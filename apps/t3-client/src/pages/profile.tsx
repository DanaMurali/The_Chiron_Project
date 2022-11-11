import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import Profile from '../components/profile/profile';
import { mockData } from './playground';

const ProfilePage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === 'loading') {
    return <main>Loading...</main>;
  }

  session ? <Profile data={mockData} isMentorAlready /> : router.push('/');
};

export default ProfilePage;
