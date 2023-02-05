import React from 'react';
import { useParams } from 'react-router-dom';

interface ProjectProps {}

const Project: React.FC<ProjectProps> = (props) => {
  let params = useParams();
  console.log(params);
  return <>My Project {params.projectId}</>;
};

export default Project;
