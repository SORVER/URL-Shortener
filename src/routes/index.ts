
// import express from 'express'
// import affiliateLinkRoutes from './affiliate-link.route.js'

// const router = express.Router()

// router.use('/affiliate-link', affiliateLinkRoutes);

// export default router
// convert to TypeScript
import express from 'express';
import affiliateLinkRoutes from './affiliate-link.route.js';
const router = express.Router();
router.use('/affiliate-link', affiliateLinkRoutes);
export default router;
