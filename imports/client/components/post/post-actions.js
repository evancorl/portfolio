import React from 'react';

class PostActions extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div className="inner-x">
        <div className="post-actions-box">
          <div className="post-stats">
            <button type="button" className="post-stat active-hover">
              16 likes
            </button>
            <button type="button" className="post-stat active-hover">
              5 comments
            </button>
          </div>
          <div className="post-actions">
            <button type="button" className="post-action icon icon-heart">
              Like
            </button>
            <button type="button" className="post-action icon icon-comment">
              Comment
            </button>
          </div>
        </div>
      </div>
    );
  }
}

PostActions.propTypes = {
  post: React.PropTypes.object.isRequired,
};

export default PostActions;
