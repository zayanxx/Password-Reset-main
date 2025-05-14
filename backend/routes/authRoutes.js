import express from 'express';
import { register, login, logout, sendVerifyOtp, verifyEmail, IsAuthenticated, sendResetOtp, resetPassword } from '../controllers/authController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);
router.post('/send-verify-otp', authMiddleware, sendVerifyOtp);
router.post('/verify-email',IsAuthenticated,  verifyEmail);
router.post('/is-auth', authMiddleware, IsAuthenticated);
router.post('/send-reset-otp', sendResetOtp)
router.post('/reset-password', resetPassword)
export default router;