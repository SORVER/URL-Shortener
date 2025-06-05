// controllers/AffiliateLinkController.ts
import { Request, Response } from 'express';
import { ResponseHelper } from '../utils/responseHelper';
import { asyncHandler } from '../utils/asyncHandler';
import { AffiliateLinkService } from '../services/AffiliateLinkService';

export const createAffiliateLink = asyncHandler(
  async (req: Request, res: Response) => {
    const { original_link } = req.body;

    if (!original_link) {
      console.error(original_link);
      return res.status(400).json(ResponseHelper.error('original_link is required'));
    }

    const newAffiliateLink = await AffiliateLinkService.createAffiliateLink(original_link);
    return res
      .status(200)
      .json(ResponseHelper.success('New Link Created', newAffiliateLink));
  }
);
