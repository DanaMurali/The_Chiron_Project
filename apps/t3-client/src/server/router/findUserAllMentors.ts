import { createGzip } from 'zlib';
import { z } from 'zod';
import { createRouter } from './context';

export const findUserAllMentor = createRouter().query('findUserAllMentor', {
  input: z.object({
    userId: z.string(),
  }),
  async resolve({ ctx, input }) {
    try {
      const mentors = await ctx.prisma.user.findFirstOrThrow({
        where: {
          id: input.userId,
        },
        select: {
          mentorRelationship: true,
        },
      });
    } catch (error) {
      console.log('error', error);
    }
  },
});

//   .query('getAll', {
//     async resolve({ ctx }) {
//       return await ctx.prisma.user.findMany();
//     },
//   });

// pass in logged in userId
// use id to find mentors ids (Relationships)
// return mentor ids
// get mentor names and information from user database

// select - to get certain outputs

// try {
//   return await ctx.prisma.user.findMany({
//     select: {
//       isMentor: true,
//     },
//   });
// } catch (error) {
//   console.log('error', error);
// }

// logged in user - pass the id
