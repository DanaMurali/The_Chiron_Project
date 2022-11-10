import { testRouter } from './testing';
// src/server/router/index.ts
import { createRouter } from './context';
import superjson from 'superjson';
import { exampleRouter } from './example';
import { createUser } from './createUser';
import { findMentee } from './findMentee';
import { findMentor } from './findMentor';
import { findUser } from './findUser';
import { findRequests } from './findRequests';
import { protectedExampleRouter } from './protected-example-router';

export const appRouter = createRouter()
  .transformer(superjson)
  .merge('example.', exampleRouter)
  .merge('auth.', protectedExampleRouter)
  .merge('createUser.', createUser)
  .merge('findMentee.', findMentee)
  .merge('findMentor.', findMentor)
  .merge('test.', testRouter)
  .merge('findUser.', findUser)
  .merge('findRequests.', findRequests);

// export type definition of API
export type AppRouter = typeof appRouter;
