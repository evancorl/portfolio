import React from 'react';

import ProjectListContainer from '../../containers/ProjectListContainer';

class ProjectsBand extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div className="projects-band inner-hor inner-ver">
        <div className="col-wide">
          <h1 className="projects-title">Projects</h1>
          <ProjectListContainer />
        </div>
      </div>
    );
  }
}

export default ProjectsBand;
