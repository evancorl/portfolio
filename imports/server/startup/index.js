import '../../api/server';
import '../facebook';
import '../methods';
import seedData from '../seed-data';

Meteor.startup(() => {
  process.env.MAIL_URL = Meteor.settings.MAIL_URL;

  seedData();
});
