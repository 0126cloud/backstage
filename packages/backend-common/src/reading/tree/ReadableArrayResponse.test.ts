/*
 * Copyright 2021 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { ReadableArrayResponse } from './ReadableArrayResponse';
import path, { resolve as resolvePath } from 'path';
import fs from 'fs-extra';
import { FromReadableArrayOptions } from '../types';

const arr: FromReadableArrayOptions = [];
const arr2: FromReadableArrayOptions = [];
const path1 = path.resolve(
  'src',
  'reading',
  '__fixtures__',
  'awsS3',
  'awsS3-mock-object.yaml',
);
const path2 = path.resolve(
  'src',
  'reading',
  '__fixtures__',
  'awsS3',
  'awsS3-mock-object2.yaml',
);

describe('ReadableArrayResponse', () => {
  it('should read files', async () => {
    const stream1 = fs.createReadStream(path1);
    const stream2 = fs.createReadStream(path2);
    arr.push({ data: stream1, path: path1 });
    arr.push({ data: stream2, path: path2 });

    const res = new ReadableArrayResponse(arr, '/tmp', 'etag');
    const files = await res.files();

    expect(files).toEqual([
      {
        path: path1,
        content: expect.any(Function),
      },
      {
        path: path2,
        content: expect.any(Function),
      },
    ]);
    const contents = await Promise.all(files.map(f => f.content()));
    expect(contents.map(c => c.toString('utf8').trim())).toEqual([
      'site_name: Test',
      'site_name: Test2',
    ]);
  });

  it('should extract entire archive into directory', async () => {
    const stream1 = fs.createReadStream(path1);
    const stream2 = fs.createReadStream(path2);

    arr2.push({ data: stream1, path: path1 });
    arr2.push({ data: stream2, path: path2 });

    const res = new ReadableArrayResponse(arr2, '/tmp', 'etag');
    const dir = await res.dir();
    await expect(
      fs.readFile(resolvePath(dir, 'awsS3-mock-object.yaml'), 'utf8'),
    ).resolves.toBe('site_name: Test\n');
    await expect(
      fs.readFile(resolvePath(dir, 'awsS3-mock-object2.yaml'), 'utf8'),
    ).resolves.toBe('site_name: Test2\n');
  });
});
