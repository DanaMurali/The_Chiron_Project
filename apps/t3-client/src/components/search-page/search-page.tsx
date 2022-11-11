import SearchBar from '../search-bar/search-bar';
import ProfileCard from './profile-card/profile-card';

import { useState } from 'react';
import { trpc } from '../../utils/trpc';

const SearchPage = () => {
  const [isTabSelected, setIsTabSelected] = useState('Mentors');
  const findMentee = trpc.useQuery(['findMentee.findMentee']);
  const findMentor = trpc.useQuery(['findMentor.findMentor']);

  const handleTabOnClick = (tabName: 'Mentors' | 'Mentees') => {
    setIsTabSelected(tabName);
  };
  return (
    <div className="flex min-h-screen flex-col px-[1.5rem] md:px-[2.5rem]">
      <h2 className="my-[2.5rem] self-center text-[2rem] font-bold">
        Find A Mentor
      </h2>
      <div className="mb-2 flex flex-col-reverse items-center justify-between md:flex-row">
        <div className="mt-2 flex flex-row md:mt-0">
          <button
            className={
              isTabSelected === 'Mentors'
                ? 'bg-sectionPink w-[7rem] rounded border border-black py-0.5 md:w-[9.5rem]'
                : 'w-[7rem] rounded border border-black py-0.5 md:w-[9.5rem]'
            }
            onClick={() => handleTabOnClick('Mentors')}
          >
            Mentors
          </button>
          <button
            className={
              isTabSelected === 'Mentees'
                ? 'bg-sectionPink w-[7rem] rounded border border-black py-0.5 md:w-[9.5rem]'
                : 'w-[7rem] rounded border border-black py-0.5 md:w-[9.5rem]'
            }
            onClick={() => handleTabOnClick('Mentees')}
          >
            Mentees
          </button>
        </div>
        <SearchBar />
      </div>
      <div className="bg-sectionPink mb-[1rem] flex h-full flex-wrap justify-center md:justify-start">
        <ProfileCard />
      </div>
    </div>
  );
};

export default SearchPage;
