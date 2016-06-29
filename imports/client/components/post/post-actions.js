import React from 'react';

class PostActions extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div className="post-actions">
        <button type="button" className="post-action icon icon-heart">
          Like
        </button>
        <button type="button" className="post-action icon icon-comment">
          Comment
        </button>
      </div>
    );
  }
}

PostActions.propTypes = {
  post: React.PropTypes.object.isRequired,
};

export default PostActions;
