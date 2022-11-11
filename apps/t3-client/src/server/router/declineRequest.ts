import { z } from 'zod';
import { createRouter } from './context';

export const declineRequest = createRouter().mutation('declineRequest', {
  input: z.object({
    mentorId: z.string(),
    menteeId: z.string(),
  }),
  async resolve({ ctx, input }) {
    try {
      return await ctx.prisma?.requests.deleteMany({
        where: {
          AND: [{ mentorId: input.mentorId }, { menteeId: input.menteeId }],
        },
      });
    } catch (error) {
      console.log('error', error);
    }
  },
});
