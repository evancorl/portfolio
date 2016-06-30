import { Meteor } from 'meteor/meteor';

import { Posts } from '../';

Meteor.publish('posts', () => Posts.find({}, { limit: 10 }));
