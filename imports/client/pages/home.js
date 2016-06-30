import React from 'react';

import PostItem from '../components/posts/post-item';

const Home = () => {
  const user = Meteor.user() || {};
  const post = {};

  return (
    <div className="col-left">
      <PostItem user={user} post={post} />
    </div>
  );
};

export default Home;
