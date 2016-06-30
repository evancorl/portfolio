import seedUsers from './seed-users';
import seedPosts from './seed-posts';
import seedComments from './seed-comments';

const seedData = () => {
  seedUsers();
  seedPosts();
  seedComments();
};

export default seedData;
