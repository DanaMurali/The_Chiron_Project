import ProfileCard from '../search-page/profile-card/profile-card';

type Props = {
  isMentors?: boolean;
};

const ListColumn = ({ isMentors }: Props) => {
  return (
    <div
      className={`flex min-w-[100%] flex-wrap items-center justify-center rounded-b-md px-2 py-4 ${
        isMentors ? 'bg-sectionPink' : 'bg-mediumGreen'
      }`}
    >
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
    </div>
  );
};

export default ListColumn;
