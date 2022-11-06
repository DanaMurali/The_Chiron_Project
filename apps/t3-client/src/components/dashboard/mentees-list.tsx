import ProfileCard from '../search-page/profile-card/profile-card';

type Props = {
  hasData: boolean;
};

const MenteesList = ({ hasData }: Props) => {
  return (
    <div className="bg-sectionPink flex min-h-[20rem] min-w-[100%] flex-wrap items-center justify-center rounded-b-md px-2 py-4">
      {hasData ? <ProfileCard /> : 'no mentees found :( '}
    </div>
  );
};
export default MenteesList;
// can use ProfileList component to map profileCards dynamically
