import { z } from 'zod';
import { createRouter } from './context';

export const findRequests = createRouter().query('findRequests', {
  input: z.object({
    mentorId: z.string(),
  }),
  async resolve({ ctx, input }) {
    try {
      return await ctx.prisma.requests.findMany({
        where: {
          mentorId: input.mentorId,
        },
        select: {
          mentee: true,
        },
      });
    } catch (error) {
      console.log('error', error);
    }
  },
});
