import { z } from 'zod';
import { createRouter } from './context';

export const findMentee = createRouter().query('findMentee', {
  async resolve({ ctx }) {
    try {
      return await ctx.prisma.user.findMany({
        select: {
          isMentee: true,
        },
      });
    } catch (error) {
      console.log('error', error);
    }
  },
});
