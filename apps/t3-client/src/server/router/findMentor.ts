import { z } from 'zod';
import { createRouter } from './context';

export const findMentor = createRouter().query('findMentor', {
  async resolve({ ctx }) {
    try {
      return await ctx.prisma.user.findMany({
        where: {
          isMentor: true,
        },
        include: {
          jobRole: true,
        },
      });
    } catch (error) {
      console.log('error', error);
    }
  },
});
