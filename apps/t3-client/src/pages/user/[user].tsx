import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

const UserProfile = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === 'loading') {
    return <main>Loading...</main>;
  }

  session ? <div>this will be a dynamic page</div> : router.push('/');
};

export default UserProfile;
