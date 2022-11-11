import { z } from 'zod';
import { createRouter } from './context';

export const findUserMentors = createRouter().query('findUserMentors', {
  input: z.object({
    menteeId: z.string(),
  }),
  async resolve({ ctx, input }) {
    try {
      return await ctx.prisma.relationship.findMany({
        where: {
          menteeId: input.menteeId,
        },
        select: {
          mentor: true,
        },
      });
    } catch (error) {
      console.log('error', error);
    }
  },
});
