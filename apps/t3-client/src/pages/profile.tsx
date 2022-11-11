import { useRouter } from 'next/router';
import Profile from '../components/profile/profile';

const ProfilePage = () => {
  const router = useRouter();
  const { user } = router.query;

  return <Profile id={user} />;
};

export default ProfilePage;
