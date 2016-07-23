import React from 'react';

import LanguageList from './language-list';
import ToolList from './tool-list';

class AboutBand extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    const languages = ['HTML', 'CSS', 'JavaScript', 'SQL', 'PHP', 'C#'];
    const tools = ['Meteor', 'React', 'Sass', 'Mongo', 'NPM', 'GitHub'];

    return (
      <div className="about-band inner-ver">
        <div className="inner-hor">
          <div className="col-wide">
            <h1 className="about-title">
              About
            </h1>
            <p className="about-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </p>
            <h2 className="about-subtitle">
              My favorite languages:
            </h2>
            <LanguageList languages={languages} />
            <h2 className="about-subtitle">
              My favorite tools:
            </h2>
            <ToolList tools={tools} />
          </div>
        </div>
      </div>
    );
  }
}

export default AboutBand;
