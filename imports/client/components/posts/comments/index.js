import React from 'react';

import MoreComments from './more-comments';
import CommentItem from './comment-item';
import WriteComment from './write-comment';

class PostComments extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    const { comments } = this.props;

    return (
      <div className="post-comments">
        <MoreComments count={2} />
        <div className="comments-list inner-hor">
          {comments.map((comment, i) => <CommentItem key={i} comment={comment} />)}
          <WriteComment />
        </div>
      </div>
    );
  }
}

PostComments.propTypes = {
  comments: React.PropTypes.array.isRequired,
};

export default PostComments;
