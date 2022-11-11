import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { trpc } from '../../utils/trpc';
import MenteesList from './mentees-list';
import MentorsList from './mentors-list';

const YourConnections = () => {
  const [isMentorsTabSelected, setIsMentorsTabSelected] = useState(true);
  const { data: session, status } = useSession();

  const { data: myMentors, refetch: myMentorsRefetch } = trpc.useQuery([
    'findUserMentors.findUserMentors',
    { menteeId: session?.user?.id || '' },
  ]);

  const { data: myMentees, refetch: myMenteesRefetch } = trpc.useQuery([
    'findUserMentees.findUserMentees',
    { mentorId: session?.user?.id || '' },
  ]);

  useEffect(() => {
    myMentorsRefetch();
    myMenteesRefetch();
  }, []);

  const activeMentorsTab = () => {
    if (!isMentorsTabSelected) {
      setIsMentorsTabSelected(true);
    }
  };

  const activeMenteesTab = () => {
    if (isMentorsTabSelected) {
      setIsMentorsTabSelected(false);
    }
  };

  return (
    <section className="mx-auto mb-10 flex min-h-[13rem] w-4/5 flex-wrap text-center">
      <div className="flex w-full">
        <button
          onClick={activeMentorsTab}
          className="bg-mediumGreen max-h-[7.5rem] min-h-[5rem] w-full rounded-t text-2xl"
        >
          Mentors
        </button>
        <button
          onClick={activeMenteesTab}
          className="bg-sectionPink  max-h-[7.5rem] min-h-[5rem] w-full rounded-t text-2xl"
        >
          Mentees
        </button>
      </div>
      {isMentorsTabSelected ? (
        <MentorsList data={myMentors} />
      ) : (
        <MenteesList data={myMentees} />
      )}
    </section>
  );
};

export default YourConnections;
