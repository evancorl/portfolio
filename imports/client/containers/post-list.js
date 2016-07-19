import { createContainer } from 'meteor/react-meteor-data';
import { _ } from 'meteor/underscore';

import { Posts, Comments } from '../../api';
import PostList from '../components/posts/post-list';

const limit = new ReactiveVar(10);

const PostListContainer = createContainer(() => {
  const postsSub = Meteor.subscribe('posts', limit.get());
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
    limit,
    postsReady,
    posts,
  };
}, PostList);

export default PostListContainer;
