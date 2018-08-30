const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const PostSchema = new Schema({
    // Connect each post to a user
    user: {
        type: Schema.Types.ObjectId,
        ref: "users" // Refer to users collection
    },
    text: {
        type: String,
        required: true
    },
    name: {
        // We added name and avatar as separate fields and not getting them from User bc we don't want the posts of a user to be deleted when he deletes his profile
        type: String
    },
    avatar: {
        type: String
    },
    likes: [
        // Each like should be associated with a user_id so that he cannot like more than once
        {
            user: {
                type: Schema.Types.ObjectId,
                ref: "users" // Refer to users collection
            }
        }
    ],
    comments: [
        // Each like should be associated with a user_id so that he cannot like more than once
        {
            user: {
                type: Schema.Types.ObjectId,
                ref: "users" // Refer to users collection
            },
            text: {
                type: String,
                required: true
            },
            name: {
                // We added name and avatar as separate fields and not getting them from User bc we don't want the posts of a user to be deleted when he deletes his profile
                type: String
            },
            avatar: {
                type: String
            },
            date: {
                type: Date,
                default: Date.now
            }
        }
    ],
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Post = mongoose.model("post", PostSchema);
