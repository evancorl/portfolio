import '../../api/collections/server';
import '../facebook';
import seedData from '../seed-data';

Meteor.startup(() => {
  seedData();
});
