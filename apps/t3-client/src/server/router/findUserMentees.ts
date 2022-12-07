import { z } from 'zod';
import { createRouter } from './context';

export const findUserMentees = createRouter().query('findUserMentees', {
  input: z.object({
    mentorId: z.string(),
  }),
  async resolve({ ctx, input }) {
    try {
      return await ctx.prisma.relationship.findMany({
        where: {
          mentorId: input.mentorId,
        },
        select: {
          mentee: {
            include: { jobRole: true },
          },
        },
      });
    } catch (error) {
      console.log('error', error);
    }
  },
});
