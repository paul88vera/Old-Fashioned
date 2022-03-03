const { Comment } = require('../models');

const commentData = [
  {
    comment_text: 'This better work, man!',
    user_id: 1,
    drinks_id: 1
  }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;