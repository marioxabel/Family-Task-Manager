import { Router } from 'express';
import authRoutes from './auth-routes.js';
import apiRoutes from './api/index.js';
import { authenticateToken } from '../middleware/auth.js';
import { registerRouter } from './register-routes.js';

const router = Router();


// Public routes
router.use('/register', registerRouter );
router.use('/auth', authRoutes);
// Private routes
router.use('/api', authenticateToken, apiRoutes);

export default router;
