import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { useState } from 'react';
import { trpc } from '../../utils/trpc';
import DisplayCard from '../display-card/display-card';
import Modal from '../modal/modal';
import RequestModal from '../requests/requests';
import EditProfile from './edit-profile';
import NewRequest from './new-request';
import YourConnections from './your-connections';

const DashboardPage = () => {
  const [showRequestModal, setShowRequestModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const handleOpenNewRequestModal = () => setShowRequestModal(true);
  const onNewRequestClose = () => setShowRequestModal(false);
  const handleOpenEditModal = () => setShowEditModal(true);
  const onEditModalClose = () => setShowEditModal(false);

  const { data: session, status } = useSession();

  const { data: myProfile } = trpc.useQuery([
    'findUser.findUser',
    { id: session?.user?.id || '' },
  ]);

  const { data: requests } = trpc.useQuery([
    'findRequests.findRequests',
    { requesteeId: session?.user?.id || '' },
  ]);

  const data = {
    name: myProfile?.name || '',
    jobRole: myProfile?.jobRole?.name || '',
    biography: myProfile?.biography || '',
  };

  return (
    <>
      <Modal onClose={() => setShowRequestModal(false)} open={showRequestModal}>
        <RequestModal
          requestNumber={requests?.length || 0}
          onClose={onNewRequestClose}
          requests={requests}
        />
      </Modal>
      {requests && (
        <NewRequest handleOpenNewRequestModal={handleOpenNewRequestModal} />
      )}
      <div className={`${requests ?? 'mt-10'}`}>
        <DisplayCard
          data={data}
          img="https://picsum.photos/1000"
   
          onEditClick={handleOpenEditModal}
        />
      </div>
      <Modal onClose={() => setShowEditModal(false)} open={showEditModal}>
        <EditProfile onClose={onEditModalClose} />
      </Modal>
      <div className="mx-auto my-10 min-h-[7.5rem] w-4/5 text-center ">
        <h2 className="pb-4 text-2xl font-bold">FIND A MENTOR OR MENTEE:</h2>
        <Link href="/search">
          <button className="bg-darkPink h-11 w-[6.5rem] rounded-md text-white">
            Search
          </button>
        </Link>
      </div>
      <YourConnections />
    </>
  );
};

export default DashboardPage;
