import React from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';

const LoginTest = () => {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <main>Loading...</main>;
  }

  return (
    <>
      <h1>Login Page</h1>
      <div>
        {session ? (
          <>
            <p>hi {session.user?.name}</p>
            <button onClick={() => signOut()}>Logout</button>
          </>
        ) : (
          <button onClick={() => signIn('discord')}>Login with Discord</button>
        )}
      </div>
    </>
  );
};

export default LoginTest;
