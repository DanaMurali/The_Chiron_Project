import Image from 'next/image';
import Link from 'next/link';

type Props = {
  accept?: boolean;
  name?: string;
  jobRole?: string;
};

const ProfileCard = ({ accept, name, jobRole }: Props) => {
  const handleRequestOnClick = () => {
    console.log('request');
  };
  const handleAcceptOnClick = () => {
    console.log('request');
  };
  return (
    <div className="border-blackCoral m-2 flex h-[343px] w-full w-[318px] flex-col items-center justify-center rounded-xl border-[16px] bg-white transition duration-300 ease-in-out hover:shadow-xl">
      <Link href="/user/1">
        <div className="flex flex-col items-center justify-center hover:cursor-pointer">
          <Image
            src="/assets/profile-pic.jpg"
            alt="duck in a suit"
            width="142px"
            height="142px"
            className="h-auto max-w-full rounded-full border-none align-middle shadow-lg"
          />
          <p className="mt-2 mb-1 text-base capitalize ">{name}</p>
          <p className="mb-2  text-sm">{jobRole}</p>
        </div>
      </Link>
      {accept ? (
        <button
          className="bg-blackCoral w-[138px] rounded-lg py-1  text-base capitalize text-white"
          onClick={handleAcceptOnClick}
        >
          ACCEPT
        </button>
      ) : (
        <button
          className="bg-blackCoral w-[138px] rounded-lg py-1  text-base capitalize text-white"
          onClick={handleRequestOnClick}
        >
          REQUEST
        </button>
      )}
    </div>
  );
};

export default ProfileCard;
