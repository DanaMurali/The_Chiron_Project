import SearchBar from '../search-bar/search-bar';
import ProfileCard from './profile-card/profile-card';

const SearchPage = () => {
  return (
    <div>
      <h2>Find A Mentor</h2>
      <div>
        <div>
          <button>Mentors</button>
          <button>Mentees</button>
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
