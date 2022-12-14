import { z } from 'zod';
import { createRouter } from './context';

export const acceptRequest = createRouter().mutation('acceptRequest', {
  input: z.object({
    mentorId: z.string(),
    menteeId: z.string(),
  }),
  async resolve({ ctx, input }) {
    try {
      await ctx.prisma.relationship.create({
        data: {
          mentorId: input.mentorId,
          menteeId: input.menteeId,
        },
      });
    } catch (error) {
      console.log('error', error);
    }
  },
});
