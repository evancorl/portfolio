import { Meteor } from 'meteor/meteor';

import { Posts, Comments } from '../';

Meteor.publishComposite('posts', (limit = 10) => {
  return {
    find() {
      return Posts.find({}, {
        limit,
        sort: {
          createdAt: -1,
        },
      });
    },
    children: [
      {
        find(post) {
          return Comments.find({
            postId: post._id,
          }, {
            sort: {
              createdAt: -1,
            },
            limit: 3,
          });
        },
      },
    ],
  };
});
