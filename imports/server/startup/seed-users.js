import { Accounts } from 'meteor/accounts-base';

const seedUsers = () => {
  const userCount = Meteor.users.find().count();

  if (userCount === 0) {
    Accounts.createUser({
      username: 'ephankoral',
      email: 'evan@poeticsystems.com',
      password: 'password',
      profile: {},
    });
  }
};

export default seedUsers;
