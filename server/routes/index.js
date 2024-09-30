import { Router } from 'express';
import authRoutes from './auth-routes.js';
import apiRoutes from './api/index.js';
import { authenticateToken } from '../middleware/auth.js';

const router = Router();


// Mounting the auth routes
router.use('/auth', authRoutes);
router.use('/api', authenticateToken, apiRoutes);

export default router;
