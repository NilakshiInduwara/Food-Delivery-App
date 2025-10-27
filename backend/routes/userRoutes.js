import express from 'express';
import { getUsers, registerUser } from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js';
import { authorize } from '../middleware/authorizeMiddleware.js';

const router = express.Router();

router.post('/register', registerUser);

router.get('/', protect, authorize('admin'), getUsers);

export default router;