import { z } from 'zod';
import { createRouter } from './context';

// Following this tutorial
// https://dev.to/nexxeln/build-a-full-stack-app-with-create-t3-app-5e1e

export const createUser = createRouter().mutation('createUser', {
  input: z.object({
    name: z.string(),
    email: z.string(),
    biography: z.string(),
    isMentor: z.boolean(),
    isMentee: z.boolean(),
  }),
  async resolve({ ctx, input }) {
    try {
      await ctx.prisma.user.create({
        data: {
          name: input.name,
          email: input.email,
          biography: input.biography,
          isMentor: input.isMentor,
          isMentee: input.isMentee,
        },
      });
    } catch (error) {
      console.log(error);
    }
  },
});
