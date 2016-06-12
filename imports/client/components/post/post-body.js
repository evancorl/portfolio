import React from 'react';

class PostBody extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div className="post-body mobile-container">
        <img className="post-image" src="/images/feeds.jpg" />
      </div>
    );
  }
}

PostBody.propTypes = {
  post: React.PropTypes.object.isRequired,
};

export default PostBody;
