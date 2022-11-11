import { useRouter } from 'next/router';
import Profile from '../../components/profile/profile';

const UserProfile = () => {
  const router = useRouter();
  const { user } = router.query;
  console.log(user, '<< user ');

  return <Profile id={user} />;
};

export default UserProfile;
