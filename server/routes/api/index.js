import { Router } from 'express';
import { parentRouter } from './parent-routes.js';

const router = Router();

router.use('/parents', parentRouter);

export default router;
