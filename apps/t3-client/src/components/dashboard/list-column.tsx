import ProfileCard from '../search-page/profile-card/profile-card';

type Props = {
  isMentors?: boolean;
};
// isMentees?: Boolean

const ListColumn = ({ isMentors }: Props) => {
  return (
    <div
      className={`flex w-full flex-col items-center pb-4 sm:w-[50%] ${
        isMentors ? 'bg-sectionPink' : 'bg-mediumGreen'
      }`}
    >
      <h2
        className={`my-4 w-[400px] rounded p-2 text-2xl ${
          isMentors ? 'bg-mediumGreen' : 'bg-sectionPink'
        }`}
      >
        Your {isMentors ? 'Mentors' : 'Mentees'}
      </h2>
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
    </div>
  );
};

export default ListColumn;
