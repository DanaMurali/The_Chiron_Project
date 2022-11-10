import Link from 'next/link';
import DisplayCard from '../display-card/display-card';

type Props = {
  data: {
    name: string;
    role: string;
    details: string;
    further: string;
  };
  isMentorAlready?: boolean;
};

const Profile = ({ data, isMentorAlready }: Props) => {
  return (
    <div className="mb-10 mt-5">
      <div className="mx-auto my-2 flex min-h-[5rem] w-[10rem] flex-wrap items-center justify-center text-center sm:w-4/5 sm:justify-between">
        <button className="bg-blackCoral mb-5 h-11 w-[10rem] rounded-md text-sm text-white sm:mr-5 sm:mb-0">
          <Link href="/search">return to list page</Link>
        </button>
        {isMentorAlready ? (
          <div className="bg-orange flex min-h-[40px] min-w-[200px] items-center justify-center rounded text-white">
            {data.name} is your mentor
          </div>
        ) : (
          <button className="bg-orange h-11 w-[10rem] rounded-md text-sm text-white">
            request as mentor
          </button>
        )}
      </div>
      <DisplayCard
        data={data}
        img="https://picsum.photos/1000"
        onEditClick={() => console.log('remove')}
      />
    </div>
  );
};

export default Profile;
