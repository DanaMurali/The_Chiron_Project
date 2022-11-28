import ProfileCard from '../search-page/profile-card/profile-card';

type Props = {
  data?: any;
};

const MentorsList = ({ data }: Props) => {
  return (
    <div className="bg-mediumGreen flex min-h-[20rem] min-w-[100%] flex-wrap items-center justify-center rounded-b-md px-2 py-4">
      {data && data.length > 0
        ? data.map(({ mentor }: any) => {
            return (
              <ProfileCard
                name={mentor?.name}
                jobRole={mentor?.jobRole?.name}
                id={mentor?.id}
                noButton={true}
                key={mentor?.id}
              />
            );
          })
        : 'no mentors? click on search button above to search for a mentor today!'}
    </div>
  );
};

export default MentorsList;
// can use ProfileList component to map profileCards dynamically
