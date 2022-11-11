import React from 'react';
import { trpc } from '../utils/trpc';
// import { signIn, signOut, useSession } from 'next-auth/react';

const test = () => {
  //   const { data: session, status } = useSession();

  const { data, refetch } = trpc.useQuery(['test.getMentees'], {
    enabled: false,
  });

  const handleClick = () => {
    refetch();
  };

  const consoleLog = () => {
    console.log(data);
  };
  return (
    <>
      <button onClick={handleClick}>Do query</button>
      <p>{JSON.stringify(data)}</p>
      <button onClick={consoleLog}>console log</button>
    </>
  );
};

export default test;

// import { signIn, signOut, useSession } from 'next-auth/react';

// const LoginTest = () => {
//   const { data: session, status } = useSession();

//   if (status === 'loading') {
//     return <main>Loading...</main>;
//   }

//   return (
//     <>
//       <h1>Login Page</h1>
//       <div>
//         {session ? (
//           <>
//             <p>hi {session.user?.name}</p>
//             <button onClick={() => signOut()}>Logout</button>
//           </>
//         ) : (
//           <button onClick={() => signIn('azure-ad')}>
//             Login with Azure AD
//           </button>
//         )}
//       </div>
//     </>
//   );
// };

// export default LoginTest;
