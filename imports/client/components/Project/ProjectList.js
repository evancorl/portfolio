import React from 'react';
import { Link } from 'react-router';

import ProjectItem from './ProjectItem';

const ProjectList = ({ projects }) => {
  return (
    <ul className="project-list">
      {projects.map((project, i) => (
        <li key={i}>
          <ProjectItem project={project} />
        </li>   
      ))}
    </ul>
  );
};

ProjectList.propTypes = {
  projects: React.PropTypes.array.isRequired,
};

export default ProjectList;
