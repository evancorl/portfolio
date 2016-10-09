import React from 'react';

import IntroBand from '../components/About/IntroBand';
import AboutBand from '../components/About/AboutBand';
import ProjectsBand from '../components/About/ProjectsBand';
import ContactForm from '../components/Contact/ContactForm';

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
        <ContactForm />
      </div>
    );
  }
}

export default AboutPage;
