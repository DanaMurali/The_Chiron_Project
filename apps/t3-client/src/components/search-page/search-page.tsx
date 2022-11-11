import SearchBar from '../search-bar/search-bar';
import ProfileCard from './profile-card/profile-card';

import { useEffect, useState } from 'react';
import { trpc } from '../../utils/trpc';

const SearchPage = () => {
  const [isTabSelected, setIsTabSelected] = useState('Mentors');
  const [mentors, setMentors] = useState<any>();
  const [mentees, setMentees] = useState<any>();
  const [searchValue, setSearchValue] = useState('');
  const { data: findMentee, refetch: refetchFindMentee } = trpc.useQuery([
    'findMentee.findMentee',
  ]);
  const { data: findMentor, refetch: refetchFindMentor } = trpc.useQuery([
    'findMentor.findMentor',
  ]);

  const {
    data: mentorSearchResult,
    isLoading: isMentorSearchLoading,
    refetch: refetchMentorsByRole,
  } = trpc.useQuery(
    ['findMentorsByJobRole.findMentorsByJobRole', { jobRole: searchValue }],
    { enabled: false }
  );

  const {
    data: menteeSearchResult,
    isLoading: isMenteeSearchLoading,
    refetch: refetchMenteesByRole,
  } = trpc.useQuery(
    ['findMenteesByJobRole.findMenteesByJobRole', { jobRole: searchValue }],
    { enabled: false }
  );

  useEffect(() => {
    setMentors(findMentor);
    setMentees(findMentee);
  }, [findMentee, findMentor]);

  useEffect(() => {
    if (searchValue !== '' && isTabSelected === 'Mentors') {
      refetchMentorsByRole();
    } else if (searchValue !== '' && isTabSelected === 'Mentees') {
      refetchMenteesByRole();
    }
  }, [searchValue]);

  useEffect(() => {
    if (isTabSelected === 'Mentors') {
      setMentors(mentorSearchResult || []);
    } else if (isTabSelected === 'Mentees') {
      setMentees(menteeSearchResult || []);
    }
  }, [isMenteeSearchLoading, isMentorSearchLoading]);

  const handleTabOnClick = async (tabName: 'Mentors' | 'Mentees') => {
    setIsTabSelected(tabName);
  };

  const handleOnSearch = (value: string) => {
    setSearchValue(value);
    setTimeout(() => setSearchValue(''), 1000);
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
        <SearchBar handleOnSearch={handleOnSearch} />
      </div>
      <div className="flex flex-row flex-wrap items-center justify-start">
        {isTabSelected === 'Mentors' &&
          mentors &&
          mentors.map(
            (
              mentor: {
                name: any;
                jobRole: { name: string | undefined };
                id: string | undefined;
              },
              index: number
            ) => {
              return (
                <div
                  className="bg-sectionPink mx-auto mb-[1rem] flex h-full flex-wrap justify-center md:mx-0 md:justify-start"
                  key={mentor.id || index}
                >
                  <ProfileCard
                    name={mentor?.name || undefined}
                    jobRole={mentor?.jobRole?.name}
                    id={mentor?.id}
                  />
                </div>
              );
            }
          )}
        {isTabSelected === 'Mentees' &&
          mentees &&
          mentees.map(
            (
              mentee: {
                name: any;
                jobRole: { name: string | undefined };
                id: string | undefined;
              },
              index: number
            ) => {
              return (
                <div
                  className="bg-sectionPink mb-[1rem] flex h-full flex-wrap justify-center md:justify-start"
                  key={mentee.id || index}
                >
                  <ProfileCard
                    name={mentee?.name || undefined}
                    jobRole={mentee?.jobRole?.name}
                    id={mentee?.id}
                  />
                </div>
              );
            }
          )}
      </div>
    </div>
  );
};

export default SearchPage;
