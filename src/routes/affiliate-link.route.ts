// routes/authRoutes.js or routes/affiliateRoutes.js (based on your structure)
import express from 'express';
import { createAffiliateLink } from '../controllers/affiliate-link.controller.ts';

const router = express.Router();

router.post('/create', createAffiliateLink);

export default router;
