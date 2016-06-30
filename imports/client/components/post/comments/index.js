import React from 'react';

import MoreComments from './more-comments';
import CommentItem from './comment-item';
import WriteComment from './write-comment';

class PostComments extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div className="post-comments">
        <MoreComments count={2} />
        <div className="comments-list inner-x">
          <CommentItem />
          <WriteComment />
        </div>
      </div>
    );
  }
}

PostComments.propTypes = {
  // post: React.PropTypes.object.isRequired,
};

export default PostComments;
