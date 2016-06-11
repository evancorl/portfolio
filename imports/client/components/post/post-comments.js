import React from 'react';

class PostComments extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div className="post-comments">
      </div>
    );
  }
}

PostComments.propTypes = {
  post: React.PropTypes.object.isRequired,
};

export default PostComments;
