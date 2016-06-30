import React from 'react';
import { Link } from 'react-router';

class PostBody extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    const { _id, title, message, media } = this.props.post;

    return (
      <div className="post-body">
        {!media ? null : (
          <div className="post-media mobile-inner-x">
            <img className="post-image" src={media.thumbnail} />
          </div>
        )}
        <div className="inner-x">
          {!title ? null : (
            <div className="post-title">
              <Link to={`/post/${_id}`} className="active-hover">{title}</Link>
            </div>
          )}
          {!message ? null : (
            <p className="post-message">{message}</p>
          )}
        </div>
      </div>
    );
  }
}

PostBody.propTypes = {
  post: React.PropTypes.object.isRequired,
};

export default PostBody;
