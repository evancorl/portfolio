import React from 'react';

import AboutBand from '../components/AboutBand';
import IntroBand from '../components/IntroBand';
import ProjectsBand from '../components/ProjectsBand';

class AboutPage extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div className="about-page">
        <IntroBand />
        <AboutBand />
        <ProjectsBand />
      </div>
    );
  }
}

export default AboutPage;
