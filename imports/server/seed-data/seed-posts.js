import moment from 'moment';

import { Posts } from '../../api/collections';

const seedPosts = () => {
  const post = Posts.findOne();

  if (!post) {
    for (let i = 0; i < 50; i++) {
      Posts.insert({
        userId: 'QBgyG7MsqswQmvm7J',
        username: 'evancorl',
        createdAt: moment().utc().toDate(),
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ' +
                 'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ' +
                 'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.',
        media: {
          type: 'Video',
          source: 'YouTube',
          thumbnail: '/images/feeds.jpg',
          url: 'https://www.meteor.com/',
        },
        likeCount: 14,
        commentCount: 3,
      });

      Posts.insert({
        userId: 'QBgyG7MsqswQmvm7J',
        username: 'evancorl',
        createdAt: moment().utc().toDate(),
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ' +
                 'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ' +
                 'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.',
        media: {
          type: 'Photo',
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
