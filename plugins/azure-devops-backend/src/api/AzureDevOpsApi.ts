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

import { Logger } from 'winston';
import { WebApi } from 'azure-devops-node-api';
import { RepoBuild } from './types';

export class AzureDevOpsApi {
  constructor(
    private readonly logger: Logger,
    private readonly webApi: WebApi,
  ) {}

  async getGitRepository(projectName: string, repoName: string) {
    if (this.logger) {
      this.logger.debug(
        `Calling Azure DevOps REST API, getting Repository ${repoName} for Project ${projectName}`,
      );
    }

    const client = await this.webApi.getGitApi();
    return client.getRepository(repoName, projectName);
  }

  async getBuildList(projectName: string, repoId: string, top: string) {
    const topBuilds: number = +top || 10;

    if (this.logger) {
      this.logger.debug(
        `Calling Azure DevOps REST API, getting up to ${topBuilds} Builds for Repository Id ${repoId} for Project ${projectName}`,
      );
    }

    const client = await this.webApi.getBuildApi();
    return client.getBuilds(
      projectName,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      topBuilds,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      repoId,
      'TfsGit',
    );
  }

  async getRepoBuilds(projectName: string, repoName: string, top: string) {
    if (this.logger) {
      this.logger.debug(
        `Calling Azure DevOps REST API, getting up to ${top} Builds for Repository ${repoName} for Project ${projectName}`,
      );
    }

    const gitRepository = await this.getGitRepository(projectName, repoName);
    const buildList = await this.getBuildList(
      projectName,
      gitRepository.id as string,
      top,
    );

    const repoBuilds = buildList.map(build => {
      const repoBuild: RepoBuild = {
        id: build.id,
        title: `${build.definition?.name} - ${build.buildNumber}`,
        link: build._links?.web.href,
        status: build.status,
        result: build.result,
        queueTime: build.queueTime,
        source: `${build.sourceBranch} (${build.sourceVersion?.substr(0, 8)})`,
      };
      return repoBuild;
    });

    return repoBuilds;
  }
}
