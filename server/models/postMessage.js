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
    ingredients: [String],
    methods: [String],
    createAt: {
        type: Date,
        default: new Date()
    },
});

const PostMessage = mongoose.model('PostRecipe', postSchema);