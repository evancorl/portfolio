import { Accounts } from 'meteor/accounts-base';

const seedUsers = () => {
  const user = Meteor.users.findOne();

  if (!user) {
    Accounts.createUser({
      username: 'evancorl',
      email: 'info@evancorl.com',
      password: 'password',
      profile: {},
    });
  }
};

export default seedUsers;
