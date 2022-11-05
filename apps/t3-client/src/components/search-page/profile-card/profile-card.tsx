import Image from 'next/image';
import Link from 'next/link';

const ProfileCard = () => {
  const handleOnClick = () => {
    console.log('request');
  };
  return (
    <div className="border-blackCoral m-2 flex h-[343px] w-full w-[318px] flex-col items-center justify-center rounded-xl border-[16px] bg-white transition duration-300 ease-in-out hover:shadow-xl">
      <Link href="/">
        <div className="flex flex-col items-center justify-center hover:cursor-pointer">
          <Image
            src="/assets/profile-pic.jpg"
            alt="duck in a suit"
            width="142px"
            height="142px"
            className="rounded-full"
          />
          <p className="mt-2 mb-2 text-base capitalize ">STEVE MCDUCK</p>
          <p className="text-sm">Product Manager</p>
          <p className="mb-2 text-sm">Senior</p>
        </div>
      </Link>
      <button
        className="bg-blackCoral w-[138px] rounded-lg py-1  text-base capitalize text-white"
        onClick={handleOnClick}
      >
        REQUEST
      </button>
    </div>
  );
};

export default ProfileCard;
