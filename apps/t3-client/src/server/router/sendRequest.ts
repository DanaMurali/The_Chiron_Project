import { z } from 'zod';
import { createRouter } from './context';

export const sendRequest = createRouter().mutation('sendRequest', {
  input: z.object({
    mentorId: z.string(),
    menteeId: z.string(),
  }),
  async resolve({ ctx, input }) {
    try {
      return await ctx.prisma?.requests.create({
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
