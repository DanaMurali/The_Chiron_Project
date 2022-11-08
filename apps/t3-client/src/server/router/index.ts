// src/server/router/index.ts
import { createRouter } from './context';
import superjson from 'superjson';
import { exampleRouter } from './example';
import { createUser } from './createUser';
import { findMentee } from './findMentee';
import { findMentor } from './findMentor';
import { protectedExampleRouter } from './protected-example-router';

export const appRouter = createRouter()
  .transformer(superjson)
  .merge('example.', exampleRouter)
  .merge('auth.', protectedExampleRouter)
  .merge('createUser.', createUser)
  .merge('findMentee.', findMentee)
  .merge('findMentor.', findMentor);

// export type definition of API
export type AppRouter = typeof appRouter;
