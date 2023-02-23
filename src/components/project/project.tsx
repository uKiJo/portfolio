import React from 'react';
import { useLoaderData, LoaderFunctionArgs } from 'react-router-dom';
import { ProjectType } from '../../globals/types';
import { data as projects } from '../latest-work/data';

interface ProjectProps {}

export async function loader({
  params,
}: LoaderFunctionArgs): Promise<ProjectType | undefined> {
  const id = params.projectId;
  let contact = projects.find((project) => project.id.toString() === id);
  return contact;
}

const Project: React.FC<ProjectProps> = (props) => {
  const project = useLoaderData() as ProjectType;
  console.log(project);
  return <div className="app-container">My Project {project.id}</div>;
};

export default Project;
