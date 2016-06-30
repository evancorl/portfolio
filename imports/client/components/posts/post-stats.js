import React from 'react';

class PostStats extends React.Component {
  shouldComponentUpdate(nextProps) {
    const { likeCount, commentCount } = this.props.post;

    return likeCount !== nextProps.post.likeCount || commentCount !== nextProps.post.commentCount;
  }

  render() {
    const { likeCount, commentCount } = this.props.post;

    return (
      <div className="post-stats">
        <button type="button" className="post-stat active-hover">
          {likeCount} likes
        </button>
        <button type="button" className="post-stat active-hover">
          {commentCount} comments
        </button>
      </div>
    );
  }
}

PostStats.propTypes = {
  post: React.PropTypes.object.isRequired,
};

export default PostStats;
