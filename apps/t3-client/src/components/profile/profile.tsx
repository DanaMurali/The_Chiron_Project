import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { trpc } from '../../utils/trpc';
import DisplayCard from '../display-card/display-card';

type Props = {
  id: any;
};

const Profile = ({ id }: Props) => {
  const [isUsersMentorAlready, setIsUsersMentorAlready] = useState(false);

  const { data: session } = useSession();
  console.log(session, 'from useSession');

  const sessionID = session?.user?.id.toString() || '';

  const findUser = trpc.useQuery(['findUser.findUser', { id: id }]);

  // const findAMentorOfUser = trpc.useQuery([
  //   'findUserMentors.findUserMentors',
  //   { menteeId: sessionID },
  // ]);

  // const idOfProfilePerson = id;

  // useEffect(() => {
  //   if (findAMentorOfUser?.data?.mentor?.name !== undefined) {
  //     setIsUsersMentorAlready(true);
  //   }
  // }, []);

  // const findName = () => {
  //   return findAMentorOfUser?.data?.forEach((v) => {
  //     if (v.mentor.id === idOfProfilePerson) {
  //       const mentorName = v.mentor.name;
  //       console.log(mentorName);
  //       return mentorName;
  //     }
  //     return v.mentor.name;
  //   });
  // };

  const data = {
    name: findUser.data?.name || undefined,
    jobRole: findUser.data?.jobRole?.name || undefined,
    biography: findUser.data?.biography || undefined,
  };

  return (
    <div className="mb-10 mt-5">
      <div className="mx-auto my-2 flex min-h-[5rem] w-[10rem] flex-wrap items-center justify-center text-center sm:w-4/5 sm:justify-between">
        <Link href="/search">
          <button className="bg-blackCoral text-md mb-5 h-11 w-[10rem] rounded-md text-white sm:mr-5 sm:mb-0">
            return to list page
          </button>
        </Link>
        {isUsersMentorAlready ? (
          <div className="bg-orange text-md flex min-h-[40px] min-w-[200px] items-center justify-center rounded text-white">
            is your mentor
          </div>
        ) : (
          <button className="bg-orange text-md h-11 w-[10rem] rounded-md text-white">
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
