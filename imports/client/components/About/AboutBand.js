import React from 'react';
import Scroll from 'react-scroll';

const ScrollElement = Scroll.Element;

class AboutBand extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    const languages = ['HTML', 'CSS', 'JavaScript', 'C#', 'SQL', 'PHP'];
    const tools = ['Meteor', 'React', 'Sass', 'ASP.NET', 'MySQL', 'Mongo'];

    return (
      <ScrollElement name="about" id="about" className="about-band inner-ver">
        <div className="inner-hor">
          <div className="col-wide">
            <h1 className="about-title">About</h1>
            <p className="about-text">
              I'm a full-stack developer and problem solver based in Houston, TX. I've been coding 
              since I made my first static website at age 13 to post skateboarding photos of my 
              friends. My experience includes writing core application logic for the back-end, 
              building and communicating with REST APIs, database migration, front-end development 
              using JavaScript view libraries, and much more. My mission is to continually hone my 
              coding skills by learning every day and applying best practices.
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
