import seedUsers from './seed-users';
import seedPosts from './seed-posts';

const seedData = () => {
  seedUsers();
  seedPosts();
};

export default seedData;
