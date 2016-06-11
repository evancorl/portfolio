import moment from 'moment';

import { Posts } from '../../api/collections';

const seedPosts = () => {
  const postCount = Posts.find().count();

  if (postCount === 0) {
    for (let i = 0; i < 50; i++) {
      Posts.insert({
        createdAt: moment().utc().toDate(),
        userId: 'QBgyG7MsqswQmvm7J',
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ' +
                 'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ' +
                 'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.',
        media: {
          type: 'Video',
          source: 'Facebook',
          thumb: '/images/feeds.jpg',
          url: 'https://www.meteor.com/',
        },
        totalViews: 30,
        totalLikes: 14,
        totalShares: 3,
        totalComments: 3,
      });

      Posts.insert({
        createdAt: moment().utc().toDate(),
        userId: 'QBgyG7MsqswQmvm7J',
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ' +
                 'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ' +
                 'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.',
        media: {
          type: 'Photo',
          source: 'Instagram',
          thumb: '/images/feeds-2.jpg',
          url: 'https://www.meteor.com/',
        },
        totalViews: 30,
        totalLikes: 14,
        totalShares: 3,
        totalComments: 3,
      });
    }
  }
};

export default seedPosts;
