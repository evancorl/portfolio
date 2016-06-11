import React from 'react';

class PostBody extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div className="post-body">
        <img src="/images/feeds.jpg" />
      </div>
    );
  }
}

PostBody.propTypes = {
  post: React.PropTypes.object.isRequired,
};

export default PostBody;
