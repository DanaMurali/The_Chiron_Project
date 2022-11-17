import ProfileCard from '../search-page/profile-card/profile-card';
import Image from 'next/image';

type Props = {
  requestNumber: number;
  onClose: () => void;
  requests: any;
};

const RequestModal = ({ requestNumber, onClose, requests }: Props) => {
  return (
    <div className="border-mediumGreen flex flex-col items-center justify-center border-[1rem] border-solid bg-white">
      <div className="flex w-full flex-col items-end justify-center">
        <button
          className="close hover:text-grey focus:text-grey mr-4 text-[28px] font-bold text-black hover:cursor-pointer"
          onClick={() => onClose()}
        >
          &times;
        </button>
        <div className="mt-[-1rem] flex w-full items-center justify-center">
          <div className="ml-[1rem] flex items-center justify-center pr-[0.5rem]">
            <Image
              src="/assets/wave-user.svg"
              width="24px"
              height="24px"
              alt="Request Icon"
            />
          </div>
          <h2 className="py-4 text-[1.5rem]">
            You have {requestNumber} Mentorship{' '}
            {requestNumber !== 1 ? 'Requests!' : 'Request!'}
          </h2>
        </div>
      </div>
      <div className=" bg-sectionPink flex w-full flex-row flex-wrap justify-center px-[1.5rem] py-4">
        {requests &&
          requests.map(
            (request: any) => {
              return (
                <ProfileCard
                  accept={true}
                  name={request.requester.name}
                  jobRole={request.requester.jobRole}
                  id={request.requester.id}
                />
              );
            }
          )}
      </div>
    </div>
  );
};

export default RequestModal;
