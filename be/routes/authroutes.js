import express from 'express';
import { signup, login, logout, getUser } from '../controllers/authcontroller.js';

const router = express.Router();
router.post('/signup', signup);
router.post('/login', login);
router.post('/logout', logout);
router.get('/me', getUser);
export default router;
