import { createRouter } from './context';
import { z } from 'zod';

export const testRouter = createRouter()
  .query('hello', {
    input: z
      .object({
        text: z.string().nullish(),
      })
      .nullish(),
    resolve({ input }) {
      return {
        greeting: `Hello ${input?.text ?? 'world'}`,
      };
    },
  })
  .query('getMentors', {
    async resolve({ ctx }) {
      try {
        return await ctx.prisma.user.findMany({
          where: {
            isMentor: true,
          },
        });
      } catch (error) {
        console.log('error', error);
      }
    },
  })
  .query('getMentees', {
    async resolve({ ctx }) {
      try {
        return await ctx.prisma.user.findMany({
          where: {
            isMentee: true,
          },
        });
      } catch (error) {
        console.log('error', error);
      }
    },
  });
