import React from 'react';

import PostHeader from './post-header';
import PostBody from './post-body';
// import PostTags from './post-tags';
import PostActionForm from './post-action-form';
import PostComments from './comments';

class PostItem extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    const { post } = this.props;

    return (
      <article className="content-box post-box">
        {/* <header className="post-activity header">
          <div className="inner-ver">
            <a href="">puddlepants</a> favorited this video.
          </div>
        </header> */}
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
