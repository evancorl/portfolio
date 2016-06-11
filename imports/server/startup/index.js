import seedPosts from './seed-posts';
import seedUsers from './seed-users';

Meteor.startup(() => {
  seedPosts();
  seedUsers();
});
