import express from 'express';
import authMiddleware from '../middleware/authMiddleware.js'; // add `.js` if using ES modules
import { getUserData } from '../controllers/userController.js'; // add `.js` if using ES modules

const userRoutes = express.Router();

// Protected route to get user data
userRoutes.get('/data', authMiddleware, getUserData);

export default userRoutes;
