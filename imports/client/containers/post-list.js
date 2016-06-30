import { createContainer } from 'meteor/react-meteor-data';

import { Posts } from '../../api/collections';
import PostList from '../components/posts/post-list';

const PostListContainer = createContainer(() => {
  const postsSub = Meteor.subscribe('posts');

  const postsReady = postsSub.ready();
  const posts = Posts.find().fetch();

  return {
    postsReady,
    posts,
  };
}, PostList);

export default PostListContainer;
