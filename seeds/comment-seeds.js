  
const { Comment } = require('../models');

const commentData = [{
        comment_text: "Work work work",
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: "Where even am I?",
        user_id: 2,
        post_id: 2
    },
    {
        comment_text: "Can't go on coding ;-;",
        user_id: 3,
        post_id: 3
    },
    {
        comment_text: "Family is forever!",
        user_id: 4,
        post_id: 4
    }
];

// here we edit more than one record at a time by utilizing bulkCreate
// we will use the above array of objects to seed our database with some sample comments
const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;