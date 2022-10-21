import SearchBar from '../search-bar/search-bar';
import ProfileCard from './profile-card/profile-card';

const SearchPage = () => {
  return (
    <div className="mx-[40px] flex w-screen flex-col">
      <h2 className="my-[40px] font-bold">Find A Mentor</h2>
      <div>
        <div className="flex flex-row">
          <button className="w-[152px] rounded border border-black py-0.5">
            Mentors
          </button>
          <button className="w-[152px] rounded border border-black py-0.5">
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
