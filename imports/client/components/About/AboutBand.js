import React from 'react';
import Scroll from 'react-scroll';

const ScrollElement = Scroll.Element;

class AboutBand extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    const languages = ['HTML', 'CSS', 'JavaScript', 'SQL', 'PHP', 'C#'];
    const tools = ['Meteor', 'React', 'Sass', 'Mongo', 'MySQL', 'NPM'];

    return (
      <ScrollElement name="about" id="about" className="about-band inner-ver">
        <div className="inner-hor">
          <div className="col-wide">
            <h1 className="about-title">About</h1>
            <p className="about-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </p>
            <h2 className="about-subtitle">My favorite languages</h2>
            <ul className="language-list about-list">
              {languages.map((language, i) => (
                <li key={i} className="language-item about-item">
                  {language}
                </li>
              ))}
            </ul>
            <h2 className="about-subtitle">My favorite tools</h2>
            <ul className="tool-list about-list">
              {tools.map((tool, i) => (
                <li key={i} className="tool-item about-item">
                  <img className="tool-img" src={`/images/tools/${tool.toLowerCase()}.png`} />
                  <div className="tool-name">{tool}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </ScrollElement>
    );
  }
}

export default AboutBand;
