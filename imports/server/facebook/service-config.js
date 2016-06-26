import { Meteor } from 'meteor/meteor';
import { ServiceConfiguration } from 'meteor/service-configuration';

const { settings } = Meteor;
const { FACEBOOK_APP_ID } = settings.public;
const { FACEBOOK_APP_SECRET } = settings;

ServiceConfiguration.configurations.upsert({
  service: 'facebook',
}, {
  $set: {
    appId: FACEBOOK_APP_ID,
    secret: FACEBOOK_APP_SECRET,
  },
});
