import Profile from '../components/profile/profile';
import { mockData } from './playground';

const ProfilePage = () => {
  return <Profile data={mockData} isMentorAlready />;
};

export default ProfilePage;
