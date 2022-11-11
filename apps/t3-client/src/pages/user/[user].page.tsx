import { useRouter } from 'next/router';
import Profile from '../../components/profile/profile';

const UserProfile = () => {
  const router = useRouter();
  const { id } = router.query;

  return <Profile id={id} />;
};

export default UserProfile;
