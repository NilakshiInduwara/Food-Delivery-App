import express from 'express';
import { getUserById, getUsers, loginUser, registerUser } from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js';
import { authorize } from '../middleware/authorizeMiddleware.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/', protect, authorize('admin'), getUsers);
router.post('/user', protect, getUserById);

export default router;