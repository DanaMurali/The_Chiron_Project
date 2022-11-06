import { useState } from 'react';
import MenteesList from './mentees-list';
import MentorsList from './mentors-list';

const YourConnections = () => {
  const [isMentorsTabSelected, setIsMentorsTabSelected] = useState(true);

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
        <MentorsList hasData={false} />
      ) : (
        <MenteesList hasData={false} />
      )}
    </section>
  );
};

export default YourConnections;
