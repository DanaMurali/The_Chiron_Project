import Link from 'next/link';
import { useState } from 'react';
import { mockData } from '../../pages/playground';
import DisplayCard from '../display-card/display-card';
import Modal from '../modal/modal';
import RequestModal from '../requests/requests';
import NewRequest from './new-request';
import YourConnections from './your-connections';

type Props = {
  newRequest?: boolean;
};

const DashboardPage = ({ newRequest }: Props) => {
  const [showRequestModal, setShowRequestModal] = useState(false);
  const handleOpenNewRequestModal = () => setShowRequestModal(true);
  const onNewRequestClose = () => setShowRequestModal(false);

  return (
    <>
      <Modal onClose={() => setShowRequestModal(false)} open={showRequestModal}>
        <RequestModal requestNumber={1} onClose={onNewRequestClose} />
      </Modal>
      {newRequest && (
        <NewRequest handleOpenNewRequestModal={handleOpenNewRequestModal} />
      )}
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
