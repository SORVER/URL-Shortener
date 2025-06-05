// repos/AffiliateLink.repo.ts
import { prisma } from '../db/PrismaClient';

export const AffiliateLinkRepo = {
  async createAffiliateLink(originalUrl: string, affiliateLink: string) {
    return await prisma.affiliateLink.create({
      data: {
        originalUrl,
        affiliateLink,
        count: 0,
      },
    });
  },

  async findByLink(affiliateLink: string) {
    return await prisma.affiliateLink.findUnique({
      where: {
        affiliateLink,
      },
    });
  },
};
