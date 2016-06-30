import React from 'react';

import Avatar from '../../avatar';
import TimeElapsed from '../../utility/time-elapsed';

class CommentItem extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <form className="comment-item">
        <Avatar image="/images/avatar.jpg" className="comment-avatar" />
        <div className="comment-body">
          <p className="comment-text">
            <span className="comment-user active-underline">puddlepants</span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </p>
          <TimeElapsed date={new Date()} className="comment-time" />
        </div>
      </form>
    );
  }
}

CommentItem.propTypes = {
  // comment: React.PropTypes.object.isRequired,
};

export default CommentItem;
