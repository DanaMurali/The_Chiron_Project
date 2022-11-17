import { z } from 'zod';
import { createRouter } from './context';

export const findMenteesByJobRole = createRouter().query(
  'findMenteesByJobRole',
  {
    input: z.object({
      jobRole: z.string(),
    }),
    async resolve({ ctx, input }) {
      try {
        return await ctx.prisma.user.findMany({
          where: {
            AND: [
              { isMentee: true },
              { jobRole: { name: { contains: input.jobRole } } },
            ],
          },
          include: {
            jobRole: true,
          },
        });
      } catch (error) {
        console.log('error', error);
      }
    },
  }
);
