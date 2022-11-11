import { z } from 'zod';
import { createRouter } from './context';

export const findMentorsByJobRole = createRouter().query(
  'findMentorsByJobRole',
  {
    input: z.object({
      jobRole: z.string(),
    }),
    async resolve({ ctx, input }) {
      try {
        return await ctx.prisma.user.findMany({
          where: {
            AND: [
              { isMentor: true },
              { jobRole: { name: { contains: input.jobRole } } },
            ],
          },
          select: {
            jobRole: true,
          },
        });
      } catch (error) {
        console.log('error', error);
      }
    },
  }
);
