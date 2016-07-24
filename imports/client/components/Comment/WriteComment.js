import React from 'react';

import Avatar from '../Avatar';

class WriteComment extends React.Component {
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    const { currentUser } = this.context;

    return currentUser !== nextContext.currentUser;
  }

  render() {
    const { currentUser } = this.context;

    const writeComment = (
      <form className="write-comment">
        <Avatar image="/images/avatar.jpg" className="comment-avatar" />
        <span className="wrapper">
          <textarea
            name="comment"
            placeholder="Write a comment"
            className="comment-text-box text-box"
          >
          </textarea>
        </span>
      </form>
    );

    return currentUser ? writeComment : null;
  }
}

WriteComment.contextTypes = {
  currentUser: React.PropTypes.object,
};

export default WriteComment;
