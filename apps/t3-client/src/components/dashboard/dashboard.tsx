import Link from 'next/link';
import { mockData } from '../../pages/playground';
import DisplayCard from '../display-card/display-card';
import NewRequest from './new-request';
import YourConnections from './your-connections';

type Props = {
  newRequest?: boolean;
};

const DashboardPage = ({ newRequest }: Props) => {
  return (
    <>
      {newRequest && <NewRequest />}
      <div className={`${newRequest ?? 'mt-10'}`}>
        <DisplayCard
          data={mockData}
          img="https://picsum.photos/1000"
          editButton
        />
      </div>
      <div className="mx-auto my-10 min-h-[7.5rem] w-4/5 text-center ">
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
