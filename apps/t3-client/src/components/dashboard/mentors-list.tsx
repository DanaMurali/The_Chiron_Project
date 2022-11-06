import ProfileCard from '../search-page/profile-card/profile-card';

type Props = {
  hasData?: boolean;
};

const MentorsList = ({ hasData }: Props) => {
  return (
    <div className="bg-mediumGreen flex min-h-[20rem] min-w-[100%] flex-wrap items-center justify-center rounded-b-md px-2 py-4">
      {hasData ? (
        <ProfileCard />
      ) : (
        'no mentors? click on search button above to search for a mentor today!'
      )}
    </div>
  );
};

export default MentorsList;
// can use ProfileList component to map profileCards dynamically
