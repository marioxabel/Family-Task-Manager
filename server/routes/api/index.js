import express from 'express';

import authRoutes from './authRoutes.js';

import childPrizeRoutes from './child-prize-routes.js';

const router = express.Router();

router.use('/auth', authRoutes);  
router.use('/child-prizes', childPrizeRoutes);