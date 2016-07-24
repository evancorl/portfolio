import React from 'react';

import PostHeader from './PostHeader';
import PostBody from './PostBody';
// import PostTags from './PostTags';
import PostActionForm from './PostActionForm';
import PostComments from './PostComments';

class PostItem extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    const { post } = this.props;

    return (
      <article className="content-box post-box">
        <div className="inner-ver">
          <PostHeader post={post} />
          <PostBody post={post} />
          {/* <PostTags post={post} /> */}
          <PostActionForm post={post} />
        </div>
        <PostComments comments={post.comments} />
      </article>
    );
  }
}

PostItem.propTypes = {
  post: React.PropTypes.object.isRequired,
};

export default PostItem;
