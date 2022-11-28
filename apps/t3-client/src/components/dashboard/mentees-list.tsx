import ProfileCard from '../search-page/profile-card/profile-card';

type Props = {
  data: any;
};

const MenteesList = ({ data }: Props) => {
  return (
    <div className="bg-sectionPink flex min-h-[20rem] min-w-[100%] flex-wrap items-center justify-center rounded-b-md px-2 py-4">
      {data && data.length > 0
        ? data.map(({ mentee }: any) => (
            <ProfileCard
              name={mentee?.name}
              jobRole={mentee?.jobRole?.id}
              id={mentee?.id}
              noButton={true}
              key={mentee?.id}
            />
          ))
        : 'no mentees found :( '}
    </div>
  );
};
export default MenteesList;
// can use ProfileList component to map profileCards dynamically
