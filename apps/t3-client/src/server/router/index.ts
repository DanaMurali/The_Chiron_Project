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
import { findUserMentees } from './findUserMentees';
import { findMentorsByJobRole } from './findMentorsByJobRole';
import { sendRequest } from './sendRequest';
import { acceptRequest } from './acceptRequest';
import { declineRequest } from './declineRequest';
import { updateUser } from './updateUser';
import { findMenteesByJobRole } from './findMenteesByJobRole';

export const appRouter = createRouter()
  .transformer(superjson)
  .merge('example.', exampleRouter)
  .merge('auth.', protectedExampleRouter)
  .merge('createUser.', createUser)
  .merge('findMentee.', findMentee)
  .merge('findMentor.', findMentor)
  .merge('test.', testRouter)
  .merge('findUser.', findUser)
  .merge('findRequests.', findRequests)
  .merge('findUserMentees.', findUserMentees)
  .merge('findMentorsByJobRole.', findMentorsByJobRole)
  .merge('sendRequest.', sendRequest)
  .merge('acceptRequest.', acceptRequest)
  .merge('declineRequest', declineRequest)
  .merge('updateUser', updateUser)
  .merge('findMenteesByJobRole.', findMenteesByJobRole);

// export type definition of API
export type AppRouter = typeof appRouter;
