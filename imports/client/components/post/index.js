import React from 'react';

import PostHeader from './post-header';
import PostBody from './post-body';
import PostTags from './post-tags';
import PostActions from './post-actions';
import PostComments from './post-comments';

class Post extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    const { post, user } = this.props;

    return (
      <article className="content-box post-box container">
        {/* <header className="post-activity header">
          <div className="inner">
            <a href="">puddlepants</a> favorited this video.
          </div>
        </header> */}
        <form className="inner">
          <PostHeader user={user} post={post} />
          <PostBody post={post} />
          <PostTags post={post} />
          <PostActions post={post} />
        </form>
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
