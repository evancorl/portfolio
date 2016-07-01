import React from 'react';

import Avatar from '../../avatar';
import TimeElapsed from '../../utility/time-elapsed';

class CommentItem extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    const { username, avatar, message, createdAt } = this.props.comment;

    return (
      <form className="comment-item">
        <Avatar image={avatar} className="comment-avatar" />
        <div className="comment-body">
          <p className="comment-text">
            <span className="comment-user active-underline">{username}</span>
            {message}
          </p>
          <TimeElapsed date={createdAt} className="comment-time" />
        </div>
      </form>
    );
  }
}

CommentItem.propTypes = {
  comment: React.PropTypes.object.isRequired,
};

export default CommentItem;
