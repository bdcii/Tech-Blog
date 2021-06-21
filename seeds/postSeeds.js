   
const { Post } = require('../models');

const postData = 
 [
    {
        "title": "Pizza Time",
        "post_body": "Where should we get pizza tonight?",
        "user_id": 3
    },
    {
        "title": "Have you seen the guy with the hockey mask?",
        "post_body": "There's a weirdo running around swinging a hockey stick",
        "user_id": 1
    },
    {
        "title": "The truth is out there",
        "post_body": "Have you heard of Dimension X? I heard it leads to a parallel dimension...",
        "user_id": 2

    },
    {
        "title": "What's the best way to deal with a wild rhinoceros and warthog?",
        "post_body": "I've tried everything, honestly running out of options...",
        "user_id": 4
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;