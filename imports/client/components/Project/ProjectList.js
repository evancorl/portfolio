import React from 'react';
import { Link } from 'react-router';

import ProjectItem from './ProjectItem';

class ProjectList extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    const { projects } = this.props;

    return (
      <ul className="project-list">
        {projects.map((project, i) => (
          <li key={i}>
            <ProjectItem project={project} />
          </li>   
        ))}
      </ul>
    );
  }
}

ProjectList.propTypes = {
  projects: React.PropTypes.array.isRequired,
};

export default ProjectList;
