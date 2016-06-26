import React from 'react';

import Post from '../components/post';

const Home = () => {
  const user = Meteor.user() || {};
  const post = {};

  return (
    <div className="col-left">
      <Post user={user} post={post} />
    </div>
  );
};

export default Home;
