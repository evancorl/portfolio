import React from 'react';

class PostTags extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div className="post-tags">
      </div>
    );
  }
}

PostTags.propTypes = {
  post: React.PropTypes.object.isRequired,
};

export default PostTags;
