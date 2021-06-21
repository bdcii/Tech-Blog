const { Comment } = require('../models');

const commentData = 

 [
    {
        "user_id": 1,
        "post_id": 1,
        "comment_text": "I want stuffed crust"
    },
    {
        "user_id": 4,
        "post_id": 2,
        "comment_text": "I saw him stop someone from getting robbed."
    },
    {
        "user_id": 2,
        "post_id": 2,
        "comment_text": "Maybe we need hockey masks..."
    },
    {
        "user_id": 3,
        "post_id": 3,
        "comment_text": "Isn't that where the weird brain-dude is from?"
    },
    {
        "user_id": 3,
        "post_id": 4,
        "comment_text": "help plz"
    }
    
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;