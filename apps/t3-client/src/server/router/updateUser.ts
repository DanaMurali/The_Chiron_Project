import { z } from 'zod';
import { createRouter } from './context';

export const updateUser = createRouter().mutation('updateUser', {
  input: z.object({
    id: z.string(),
    bio: z.string(),
    isMentor: z.boolean(),
    isMentee: z.boolean(),
  }),
  async resolve({ ctx, input }) {
    try {
      return await ctx.prisma?.user.update({
        where: {
          id: input.id,
        },
        data: {
          biography: input.bio,
          isMentor: input.isMentor,
          isMentee: input.isMentee,
        },
      });
    } catch (error) {
      console.log('error', error);
    }
  },
});
