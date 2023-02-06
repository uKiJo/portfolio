import React from 'react';
import { useLoaderData, LoaderFunctionArgs } from 'react-router-dom';
import { PageType } from '../../globals/types';
import { data as projects } from '../latest-work/data';

interface ProjectProps {}

export async function loader({
  params,
}: LoaderFunctionArgs): Promise<PageType | any> {
  const id = params.projectId;
  let contact = projects.find((project) => project.id.toString() === id);
  return contact;
}

const Project: React.FC<ProjectProps> = (props) => {
  const project = useLoaderData() as PageType;
  console.log(project);
  return <>My Project {project.id}</>;
};

export default Project;
