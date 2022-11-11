import { z } from 'zod';
import { createRouter } from './context';

export const findUser = createRouter().query('findUser', {
  input: z.object({
    id: z.string(),
  }),
  async resolve({ ctx, input }) {
    try {
      return await ctx.prisma.user.findUnique({
        where: {
          id: input.id,
        },
        include: {
          jobRole: true,
        },
      });
    } catch (error) {
      console.log('error', error);
    }
  },
});
