import { SessionStore } from 'next-auth/core/lib/cookie';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { trpc } from '../../utils/trpc';
import DisplayCard from '../display-card/display-card';

type Props = {
  id: string;
};

const Profile = ({ id }: Props) => {
  const [isUsersMentorAlready, setIsUsersMentorAlready] = useState(false);

  const { data: session } = useSession();
  console.log(session, 'from useSession');

  const sessionID = session?.user?.id.toString() || '';

  const findUser = trpc.useQuery(['findUser.findUser', { id: id }]);

  const findAMentorOfUser = trpc.useQuery([
    'findUserMentors.findUserMentors',
    { menteeId: sessionID },
  ]);

  useEffect(() => {
    if (findAMentorOfUser?.data?.mentor?.name !== undefined) {
      setIsUsersMentorAlready(true);
    }
  }, []);

  console.log(
    findAMentorOfUser?.data?.mentor?.name,
    '<< find mentors of user1 '
  );

  // session object - id
  console.log(isUsersMentorAlready, 'state')

  return (
    <div className="mb-10 mt-5">
      <div className="mx-auto my-2 flex min-h-[5rem] w-[10rem] flex-wrap items-center justify-center text-center sm:w-4/5 sm:justify-between">
        <Link href="/search">
          <button className="bg-blackCoral mb-5 h-11 w-[10rem] rounded-md text-sm text-white sm:mr-5 sm:mb-0">
            return to list page
          </button>
        </Link>
        {isUsersMentorAlready ? (
          <div className="bg-orange flex min-h-[40px] min-w-[200px] items-center justify-center rounded text-white">
           {findAMentorOfUser && findAMentorOfUser?.data?.mentor?.name } is your mentor
          </div>
        ) : (
        <button className="bg-orange h-11 w-[10rem] rounded-md text-sm text-white">
          request as mentor
        </button>
        )}
      </div>
      <DisplayCard
        data={findUser.data}
        img="https://picsum.photos/1000"
        onEditClick={() => console.log('remove')}
      />
    </div>
  );
};

export default Profile;
