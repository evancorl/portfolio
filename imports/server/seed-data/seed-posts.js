import { Meteor } from 'meteor/meteor';
import moment from 'moment';

import { Posts } from '../../api';

const seedPosts = () => {
  const post = Posts.findOne();

  if (!post) {
    const user = Meteor.users.findOne();

    for (let i = 0; i < 50; i++) {
      Posts.insert({
        userId: user._id,
        username: user.username,
        avatar: '/images/avatar.jpg',
        createdAt: moment().utc().toDate(),
        type: 'Video',
        title: 'This is a sample title',
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ' +
                 'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ' +
                 'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.',
        media: {
          source: 'YouTube',
          thumbnail: '/images/feeds.jpg',
          url: 'https://www.meteor.com/',
        },
        likeCount: 14,
        commentCount: 3,
      });

      Posts.insert({
        userId: user._id,
        username: user.username,
        avatar: '/images/avatar.jpg',
        createdAt: moment().utc().toDate(),
        type: 'Photo',
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ' +
                 'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ' +
                 'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.',
        media: {
          thumbnail: '/images/feeds-2.jpg',
          url: 'https://www.meteor.com/',
        },
        likeCount: 14,
        commentCount: 3,
      });
    }
  }
};

export default seedPosts;
