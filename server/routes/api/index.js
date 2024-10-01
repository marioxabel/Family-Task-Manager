<<<<<<< HEAD
import { Router } from 'express';
import { parentRouter } from './parent-routes.js';
import { childRouter } from './child-routes.js';
import { choresRouter } from './chore-routes.js';


const router = Router();

router.use('/parents', parentRouter);
router.use('/children', childRouter);
router.use('/chores', choresRouter);

export default router;
=======
import express from 'express';

import authRoutes from './authRoutes.js';

import childPrizeRoutes from './child-prize-routes.js';

const router = express.Router();

router.use('/auth', authRoutes);  
router.use('/child-prizes', childPrizeRoutes);
>>>>>>> main
