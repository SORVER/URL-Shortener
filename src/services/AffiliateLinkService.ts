// services/AffiliateLinkService.ts
import APIError from '../errors/APIError';
import { AffiliateLinkRepo } from '../repos/AffiliateLink.repo.ts';
import crypto from 'crypto';

async function createAffiliateLink(originalLink: string) {

  if (!originalLink) {
    throw new APIError('A link is required', 400);
  }

  const hash = crypto.createHash('md5').update(originalLink).digest('hex').slice(0, 8);
  const shortLink = `${hash}`;

  const existingLink = await AffiliateLinkRepo.findByLink(shortLink);

  if (existingLink) {
    return existingLink; // return if already exists
  }

  const newAffiliateLink = await AffiliateLinkRepo.createAffiliateLink(originalLink, shortLink);
  return newAffiliateLink;
}

export const AffiliateLinkService = {
  createAffiliateLink,
};
