import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import Profile from '../components/profile/profile';

const ProfilePage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const { user } = router.query;

  if (status === 'loading') {
    return <main>Loading...</main>;
  }

  session ? <Profile id={user} /> : router.push('/');
};

export default ProfilePage;
