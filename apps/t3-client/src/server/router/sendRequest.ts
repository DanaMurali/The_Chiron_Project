import { z } from 'zod';
import { createRouter } from './context';

export const sendRequest = createRouter().mutation('sendRequest', {
  input: z.object({
    requesteeId: z.string(),
    requesterId: z.string(),
  }),
  async resolve({ ctx, input }) {
    try {
      return await ctx.prisma?.request.create({
        data: {
          type: 'MENTOR',
          requesteeId: input.requesteeId,
          requesterId: input.requesterId,
        },
      });
    } catch (error) {
      console.log('error', error);
    }
  },
});
