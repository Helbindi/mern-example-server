import express from "express";
const router = express.Router();

import { signin, signup, getUsers, getUser } from "../controller/user.js";

router.post('/signin', signin);
router.post('/signup', signup);

router.get('/all', getUsers);
router.get('/:id', getUser);

export default router;