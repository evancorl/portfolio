import React from 'react';

class PostStats extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div className="post-stats">
        <button type="button" className="post-stat active-hover">
          16 likes
        </button>
        <button type="button" className="post-stat active-hover">
          5 comments
        </button>
      </div>
    );
  }
}

PostStats.propTypes = {
  post: React.PropTypes.object.isRequired,
};

export default PostStats;
