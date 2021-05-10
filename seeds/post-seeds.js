const { Post } = require('../models');

const postData = [{
        title: "Fear of the dark",
        content: "I know that I can do this, I'm not afraid anymore!",
        user_id: 1

    },
    {
        title: "So much to learn!",
        content: "I don't know If I can take it ;-; My head's going to explode",
        user_id: 2
    },
    {
        title: "Where is My mind..",
        content: "Sometime's I wonder if it's still alive .-.",
        user_id: 3
    },
    {
        title: "I love my family!",
        content: "Family is the best :)",
        user_id: 4
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
