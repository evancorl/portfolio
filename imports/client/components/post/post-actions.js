import React from 'react';

class PostActions extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div className="post-actions">
      </div>
    );
  }
}

PostActions.propTypes = {
  post: React.PropTypes.object.isRequired,
};

export default PostActions;
