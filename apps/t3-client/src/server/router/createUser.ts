import { TRPCError } from '@trpc/server/dist/declarations/src/TRPCError';
import { z } from 'zod';
import { createRouter } from './context';

// Following this tutorial
// https://dev.to/nexxeln/build-a-full-stack-app-with-create-t3-app-5e1e

export const createUser = createRouter()
  .middleware(async ({ ctx, next }) => {
    // Any queries or mutations after this middleware will
    // raise an error unless there is a current session
    if (!ctx.session) {
      throw new TRPCError({ code: 'UNAUTHORIZED' });
    }
    return next();
  })
  .mutation('createUser', {
    input: z.object({
      name: z.string(),
      email: z.string(),
      image: z.string(),
      career: z.string(),
      jobRole: z.string(),
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
            image: input.image,
            career: input.career,
            jobRole: input.jobRole,
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
