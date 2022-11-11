import { z } from 'zod';
import { createRouter } from './context';

export const findRequests = createRouter().query('findRequests', {
  input: z.object({
    requesteeId: z.string(),
  }),
  async resolve({ ctx, input }) {
    try {
      return await ctx.prisma.request.findMany({
        where: {
          requesteeId: input.requesteeId,
        },
        select: {
          requester: true,

      });
    } catch (error) {
      console.log('error', error);
    }
  },
});
