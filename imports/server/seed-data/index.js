import { Meteor } from 'meteor/meteor';

import seedUsers from './seed-users';
import seedPosts from './seed-posts';
import seedComments from './seed-comments';

const seedData = () => {
  if (Meteor.isDevelopment) {
    seedUsers();
    seedPosts();
    seedComments();
  }
};

export default seedData;
