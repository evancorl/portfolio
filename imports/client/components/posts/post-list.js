import React from 'react';

import LoadingSpinner from '../utility/loading-spinner';
import PostItem from './post-item';

class PostList extends React.Component {
  componentDidMount() {
    const component = this;

    $(window).on('scroll', function () {
      const { limit, postsReady } = component.props;

      if (postsReady) {
        const $window = $(this);
        const $getMorePosts = $('#get-more-posts');

        const scrollBottom = $window.scrollTop() + $window.height();
        const getMorePostsPosition = $getMorePosts.position().top;
        const distanceToBottom = getMorePostsPosition - scrollBottom;

        if (distanceToBottom <= 50) {
          const currentLimit = limit.get();

          limit.set(currentLimit + 10);
        }
      }
    });
  }

  shouldComponentUpdate(nextProps) {
    return this.props.postsReady !== nextProps.postsReady;
  }

  componentWillUpdate(nextProps) {
    const { limit, postsReady, posts } = nextProps;

    if (postsReady && limit.get() > posts.length) {
      $(window).off('scroll');
    }
  }

  componentWillUnmount() {
    $(window).off('scroll');

    this.props.limit.set(10);
  }

  render() {
    const { postsReady, posts } = this.props;

    return (
      <div className="post-list">
        {posts.map((post, i) => <PostItem key={i} post={post} />)}
        <div id="get-more-posts">
          {postsReady ? null : <LoadingSpinner />}
        </div>
      </div>
    );
  }
}

PostList.propTypes = {
  limit: React.PropTypes.object.isRequired,
  postsReady: React.PropTypes.bool.isRequired,
  posts: React.PropTypes.array.isRequired,
};

export default PostList;
