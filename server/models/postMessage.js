import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    username: String,
    creator: String,
    tags: [String],
    likes: { 
        type: [String], 
        default: [] },
    comments: { 
        type: [String], 
        default: [] },
    createdAt: {
        type: Date,
        default: new Date(),
    },
    // "__v" is a version key. Default 0.
})

var PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;