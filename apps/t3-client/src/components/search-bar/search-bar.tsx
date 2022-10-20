const SearchBar = () => {
  return (
    <div className="flex transform items-center space-x-6 rounded-xl bg-white p-6 shadow-lg transition duration-500 hover:scale-105 hover:shadow-xl">
      <div className="flex w-72 space-x-4 rounded-lg bg-gray-100 p-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 opacity-30"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          className="bg-gray-100 outline-none"
          type="text"
          placeholder="Article name or keyword..."
        />
      </div>
      <div className="flex cursor-pointer rounded-lg py-3 px-4 font-semibold text-gray-500">
        <span>All categorie</span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
      <div className="duration-3000 cursor-pointer rounded-lg bg-red-600 py-3 px-5 font-semibold text-white transition hover:shadow-lg">
        <span>Search</span>
      </div>
    </div>
  );
};

export default SearchBar;
