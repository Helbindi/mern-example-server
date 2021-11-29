import express from 'express';

import { createPost, getPosts, getSinglePost, updatePost, deletePost, likePost } from '../controller/posts.js';
import auth from "../middleware/auth.js";

const router = express.Router();

router.post('/', auth, createPost);
router.get('/', getPosts);
router.get('/:id', getSinglePost);
router.patch('/:id', auth, updatePost);
router.delete('/:id', auth, deletePost);
router.patch('/:id/like', auth, likePost);

export default router;