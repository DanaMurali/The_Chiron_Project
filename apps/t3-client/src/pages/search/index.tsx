import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import SearchPage from '../../components/search-page/search-page';

const Search = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === 'loading') {
    return <main>Loading...</main>;
  }

  return session ? <SearchPage /> : router.push('/');
};

export default Search;
