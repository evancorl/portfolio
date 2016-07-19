import React from 'react';

import PostActions from './post-actions';
import PostStats from './post-stats';

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
