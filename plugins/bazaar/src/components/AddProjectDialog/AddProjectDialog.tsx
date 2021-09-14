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

import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { Entity } from '@backstage/catalog-model';
import { SubmitHandler } from 'react-hook-form';
import { updateMetadata } from '../../util/dbRequests';
import { useApi, configApiRef } from '@backstage/core-plugin-api';
import { ProjectDialog } from '../ProjectDialog';
import { ProjectSelector } from '../ProjectSelector';
import { BazaarProject, FormValues, Status } from '../../util/types';

type Props = {
  catalogEntities: Entity[];
  open: boolean;
  handleClose: () => void;
  setBazaarProjects: Dispatch<SetStateAction<BazaarProject[]>>;
  setCatalogEntities: Dispatch<SetStateAction<Entity[]>>;
};

export const AddProjectDialog = ({
  catalogEntities,
  open,
  handleClose,
  setBazaarProjects,
  setCatalogEntities,
}: Props) => {
  const baseUrl = useApi(configApiRef)
    .getConfig('backend')
    .getString('baseUrl');
  const [selectedEntity, setSelectedEntity] = useState(
    catalogEntities ? catalogEntities[0] : null,
  );

  useEffect(() => {
    setSelectedEntity(catalogEntities ? catalogEntities[0] : null);
  }, [catalogEntities]);

  const defaultValues = {
    title: 'Add project',
    announcement: '',
    status: 'proposed' as Status,
  };

  const handleListItemClick = (entity: Entity) => {
    setSelectedEntity(entity);
  };

  const handleSave: SubmitHandler<FormValues> = async (
    getValues: any,
    reset: any,
  ) => {
    const formValues = getValues();

    const bazaarProject: BazaarProject = {
      entityRef: `${selectedEntity!.metadata.namespace}/${
        selectedEntity!.kind
      }/${selectedEntity!.metadata.name}`,
      name: selectedEntity!.metadata.name,
      announcement: formValues.announcement,
      status: formValues.status,
      updatedAt: new Date().toISOString(),
    };

    setBazaarProjects((oldProjects: BazaarProject[]) => {
      return [...oldProjects, bazaarProject];
    });

    setCatalogEntities((oldEntities: Entity[]) => {
      return oldEntities.filter(entity => entity !== selectedEntity);
    });

    await updateMetadata(
      selectedEntity!,
      selectedEntity!.metadata.name,
      formValues.announcement,
      formValues.status,
      baseUrl,
    );

    handleClose();
    reset(defaultValues);
  };

  return (
    <ProjectDialog
      handleSave={handleSave}
      title="Add project"
      isAddForm
      defaultValues={defaultValues}
      open={open}
      projectSelector={
        <ProjectSelector
          value={selectedEntity?.metadata.name || ''}
          onChange={handleListItemClick}
          isFormInvalid={false}
          entities={catalogEntities || []}
        />
      }
      handleClose={handleClose}
    />
  );
};
