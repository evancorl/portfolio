import React from 'react';

import PostHeader from './post-header';
import PostBody from './post-body';
import PostTags from './post-tags';
import PostActionForm from './post-action-form';
import PostComments from './comments';

class Post extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    const { post, user } = this.props;

    return (
      <article className="content-box post-box">
        {/* <header className="post-activity header">
          <div className="inner-y">
            <a href="">puddlepants</a> favorited this video.
          </div>
        </header> */}
        <div className="inner-y">
          <PostHeader user={user} post={post} />
          <PostBody post={post} />
          <PostTags post={post} />
          <PostActionForm post={post} />
        </div>
        <PostComments post={post} />
      </article>
    );
  }
}

Post.propTypes = {
  user: React.PropTypes.object.isRequired,
  post: React.PropTypes.object.isRequired,
};

export default Post;
