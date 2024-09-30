import { Router } from 'express';
import { parentRouter } from './parent-routes.js';
import { childRouter } from './child-routes.js';


const router = Router();

router.use('/parents', parentRouter);
router.use('/children', childRouter);

export default router;
