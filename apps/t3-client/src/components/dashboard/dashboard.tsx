import Link from 'next/link';
import { mockData } from '../../pages/playground';
import DisplayCard from '../display-card/display-card';
import YourConnections from './your-connections';

const DashboardPage = () => {
  return (
    <>
      <DisplayCard
        data={mockData}
        img="https://i.picsum.photos/id/7/4728/3168.jpg?hmac=c5B5tfYFM9blHHMhuu4UKmhnbZoJqrzNOP9xjkV4w3o"
        editButton
      />
      <div className="mx-auto mb-10 min-h-[7.5rem] w-4/5 text-center ">
        <h2 className="pb-4 text-2xl font-bold">FIND A MENTOR OR MENTEE:</h2>
        <button className="bg-darkPink h-11 w-[6.5rem] rounded-md text-white">
          <Link href="/search">Search</Link>
        </button>
      </div>
      <YourConnections />
    </>
  );
};

export default DashboardPage;
