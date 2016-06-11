import React from 'react';

// import PageMenu from '../components/page-menu';
import Post from '../components/post';

class Feeds extends React.Component {
  shouldComponentUpdate() {
    return true;
  }

  render() {
    const user = Meteor.user() || {};
    const post = {};

    return (
      <div className="col-left">
        <Post user={user} post={post} />
      </div>
    );
  }
}

export default Feeds;
