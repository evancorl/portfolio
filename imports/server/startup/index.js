import seedData from '../seed-data';

Meteor.startup(() => {
  seedData();
});
