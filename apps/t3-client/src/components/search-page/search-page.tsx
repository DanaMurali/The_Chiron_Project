import SearchBar from '../search-bar/search-bar';
import ProfileCard from './profile-card/profile-card';

import { useState } from 'react';

const SearchPage = () => {
  const [isTabSelected, setIsTabSelected] = useState('Mentors');

  const handleTabOnClick = (tabName: 'Mentors' | 'Mentees') => {
    setIsTabSelected(tabName);
  };
  return (
    <div className="mx-[40px] flex w-screen flex-col">
      <h2 className="my-[40px] self-center font-bold">Find A Mentor</h2>
      <div className="flex-column flex items-center justify-between ">
        <div className="flex flex-row">
          <button
            className={
              isTabSelected === 'Mentors'
                ? 'bg-sectionPink w-[152px] rounded border border-black py-0.5'
                : 'w-[152px] rounded border border-black py-0.5'
            }
            onClick={() => handleTabOnClick('Mentors')}
          >
            Mentors
          </button>
          <button
            className={
              isTabSelected === 'Mentees'
                ? 'bg-sectionPink w-[152px] rounded border border-black py-0.5'
                : 'w-[152px] rounded border border-black py-0.5'
            }
            onClick={() => handleTabOnClick('Mentees')}
          >
            Mentees
          </button>
        </div>
        <SearchBar />
      </div>
      <div>
        <ProfileCard />
      </div>
    </div>
  );
};

export default SearchPage;
