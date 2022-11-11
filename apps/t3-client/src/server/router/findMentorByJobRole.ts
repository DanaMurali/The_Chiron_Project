import { z } from 'zod';
import { createRouter } from './context';

export const findMentorByJobRole = createRouter().query('findMentorByJobRole', {
  input: z.object({
    jobRole: z.string(),
  }),
  async resolve({ ctx, input }) {
    try {
      return await ctx.prisma.user.findMany({
        where: {
          jobRole: { contains: input.jobRole },
        },
      });
    } catch (error) {
      console.log('error', error);
    }
  },
});
