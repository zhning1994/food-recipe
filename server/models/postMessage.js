import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    type: String,
    title: String,
    description: String,
    creator: String,
    tags: [String],
    imgURL: String,
    servings: {
        type: Number,
        default: 1
    },
    likeCount: {
        type: Number,
        default: 0
    },
    prepTime: {
        type: Number,
        default: 1
    },
    cookTime: {
        type: Number,
        default: 1
    },
    ingredients: [String],
    methods: [String],
    createAt: {
        type: Date,
        default: new Date()
    },
});

const PostMessage = mongoose.model('PostRecipe', postSchema);

export default PostMessage;