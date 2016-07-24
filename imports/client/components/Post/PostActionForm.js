import React from 'react';

import PostActions from './PostActions';
import PostStats from './PostStats';

class PostActionForm extends React.Component {
  shouldComponentUpdate() {
    return true;
  }

  render() {
    const { post } = this.props;

    return (
      <div className="inner-hor">
        <form className="post-action-form">
          <PostStats post={post} />
          <PostActions post={post} />
        </form>
      </div>
    );
  }
}

PostActionForm.propTypes = {
  post: React.PropTypes.object.isRequired,
};

export default PostActionForm;
