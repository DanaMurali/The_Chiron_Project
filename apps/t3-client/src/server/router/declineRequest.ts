import { z } from 'zod';
import { createRouter } from './context';

export const declineRequest = createRouter().mutation('declineRequest', {
  input: z.object({
    requesteeId: z.string(),
    requesterId: z.string(),
  }),
  async resolve({ ctx, input }) {
    try {
      return await ctx.prisma?.request.deleteMany({
        where: {
          AND: [
            { requesteeId: input.requesteeId },
            { requesterId: input.requesterId },
          ],
        },
      });
    } catch (error) {
      console.log('error', error);
    }
  },
});
