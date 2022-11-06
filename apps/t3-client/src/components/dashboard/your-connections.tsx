import { useState } from 'react';

import ListColumn from './list-column';

const YourConnections = () => {
  const [isMentorsTabSelected, setIsMentorsTabSelected] = useState(true);

  const activeMenteesTab = () => {
    setIsMentorsTabSelected(false);
  };

  const activeMentorsTab = () => {
    setIsMentorsTabSelected(true);
  };

  return (
    <section className="mx-auto mb-10 flex min-h-[32.5rem] w-4/5 flex-wrap text-center">
      <div className="flex w-full">
        <button
          onClick={activeMenteesTab}
          className="bg-mediumGreen max-h-[7.5rem] min-h-[5rem] w-full rounded-t text-2xl"
        >
          Mentors
        </button>
        <button
          onClick={activeMentorsTab}
          className="bg-sectionPink  max-h-[7.5rem] min-h-[5rem] w-full rounded-t text-2xl"
        >
          Mentees
        </button>
      </div>
      {isMentorsTabSelected ? <ListColumn isMentors /> : <ListColumn />}
    </section>
  );
};

export default YourConnections;
