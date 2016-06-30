import React from 'react';

import LoadingSpinner from '../utility/loading-spinner';
import PostItem from './post-item';

class PostList extends React.Component {
  shouldComponentUpdate(nextProps) {
    return this.props.postsReady !== nextProps.postsReady;
  }

  render() {
    const { postsReady, posts } = this.props;

    const user = Meteor.user() || {};

    const postList = (
      <div className="post-list">
        {posts.map((post, i) => <PostItem key={i} post={post} user={user} />)}
      </div>
    );

    return postsReady ? postList : <LoadingSpinner />;
  }
}

PostList.propTypes = {
  postsReady: React.PropTypes.bool.isRequired,
  posts: React.PropTypes.array.isRequired,
};

export default PostList;
