import { createContainer } from 'meteor/react-meteor-data';

import { Posts, Comments } from '../../api/collections';
import PostList from '../components/posts/post-list';

const PostListContainer = createContainer(() => {
  const postsSub = Meteor.subscribe('posts');
  const postsReady = postsSub.ready();

  let posts = Posts.find().fetch();

  posts = _.map(posts, post => {
    const comments = Comments.find({
      postId: post._id,
    }).fetch();

    return {
      ...post,
      comments,
    };
  });

  return {
    postsReady,
    posts,
  };
}, PostList);

export default PostListContainer;
