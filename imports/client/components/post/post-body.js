import React from 'react';
import { Link } from 'react-router';

class PostBody extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    const title = 'INTRODUCING CHRIS COLBOURN - Presented By Element';

    const message = 'Chris Colbourn has been a Berrics favorite since we first saw him skate a '
      + 'couple years ago. His talent and creativity on a skateboard are unreal. We\'re very '
      + 'proud to present his brand new street part, presented by Element. This is just the tip '
      + 'of the iceberg...';

    return (
      <div className="post-body">
        <div className="post-media mobile-container">
          <img className="post-image" src="/images/feeds.jpg" />
        </div>
        <div className="container">
          <div className="post-title">
            <Link to="" className="active-hover">{title}</Link>
          </div>
          <p className="post-message">{message}</p>
        </div>
      </div>
    );
  }
}

PostBody.propTypes = {
  post: React.PropTypes.object.isRequired,
};

export default PostBody;
