import React from 'react';
import Scroll from 'react-scroll';

import ProjectListContainer from '../../containers/ProjectListContainer';

const ScrollElement = Scroll.Element;

class ProjectsBand extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <ScrollElement name="projects" id="projects" className="projects-band inner-hor inner-ver">
        <div className="col-wide">
          <h1 className="projects-title">Projects</h1>
          <ProjectListContainer />
        </div>
      </ScrollElement>
    );
  }
}

export default ProjectsBand;
