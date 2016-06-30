import { Meteor } from 'meteor/meteor';
import { _ } from 'meteor/underscore';
import moment from 'moment';

import { Comments, Posts } from '../../api/collections';

const seedComments = () => {
  const user = Meteor.users.findOne();

  const posts = Posts.find({}, {
    limit: 25,
  }).fetch();

  _.each(posts, post => {
    Comments.insert({
      postId: post._id,
      userId: user._id,
      username: user.username,
      avatar: '/images/avatar.jpg',
      message: 'This is a sample comment',
      createdAt: moment().utc().toDate(),
    });
  });
};

export default seedComments;
