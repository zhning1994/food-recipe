import express from "express";
import { getPosts, createPosts, updatePost } from "../controllers/post.js";

const router = express.Router();

router.get('/', getPosts);
router.post('/', createPosts);
router.patch('/:id', updatePost);
export default router;