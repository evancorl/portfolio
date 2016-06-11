import React from 'react';
import { Link } from 'react-router';

class HeaderScene extends React.Component {
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    const { currentUser } = this.context;

    return currentUser !== nextContext.currentUser;
  }

  render() {
    const { currentUser } = this.context;

    const sceneText = currentUser ? 'Texas, United States' : 'Find my scene';
    const sceneLink = currentUser ? '/us/texas' : '/scenes';

    return (
      <div className="header-scene col-right">
        <span className="icon icon-scene">
          <strong>My scene:</strong>
        </span>
        <Link to={sceneLink}>{sceneText}</Link>
      </div>
    );
  }
}

HeaderScene.contextTypes = {
  currentUser: React.PropTypes.object,
};

export default HeaderScene;
