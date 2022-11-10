import { z } from 'zod';
import { createRouter } from './context';

export const acceptRequest = createRouter().mutation('acceptRequest', {
  input: z.object({
    mentorId: z.string(),
    menteeId: z.string(),
  }),
  async resolve({ ctx, input }) {
    try {
      return await ctx.prisma.relationships.create({
        data: {
          mentorId: input.mentorId,
          menteeId: input.menteeId,
        },
      });
    } catch (error) {
      console.log('error', error);
    }
    try {
      const deleteUser = await ctx.prisma?.requests.delete({
        where: {
          AND: [{ mentorId: input.mentorId }, { menteeId: input.menteeId }],
        },
      });
    } catch (error) {
      console.log('error', error);
    }
  },
});
