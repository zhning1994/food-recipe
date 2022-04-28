import express from "express";
import { getPosts, createPosts, updatePost, deletePost, likePost } from "../controllers/post.js";


const router = express.Router();

import auth from "../middleware/auth.js";

router.get('/', getPosts);
router.post('/', auth, createPosts);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);
router.patch('/:id/likePost', likePost);
export default router;