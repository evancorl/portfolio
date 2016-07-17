import React from 'react';

class Introduction extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div className="intro-band">
        <div className="inner-x">
          <div className="col-wide intro-col">
            <img src="/images/me.jpg" className="intro-photo" />
            <div className="intro-text">
              <h1 className="intro-title">
                Hi, I'm Evan.
              </h1>
              <p className="intro-body">
                <span>I </span>
                <span className="intro-love">love </span>
                <span>web and mobile app development.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Introduction;
