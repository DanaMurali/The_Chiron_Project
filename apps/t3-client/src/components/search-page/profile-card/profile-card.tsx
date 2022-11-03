import Image from 'next/image';

const ProfileCard = () => {
  return (
    <div className="border-blackCoral m-2 flex h-[343px] w-full w-[318px] flex-col items-center justify-center rounded-xl border-[16px] bg-white">
      <Image
        src="/assets/profile-pic.jpg"
        alt="duck in a suit"
        width="142px"
        height="142px"
        className="rounded-full"
      />
      <p className="mt-2 mb-2 text-base capitalize">STEVE MCDUCK</p>
      <p className="text-sm">Product Manager</p>
      <p className="mb-2 text-sm">Senior</p>
      <button className="bg-blackCoral w-[138px] rounded-lg py-1  text-base capitalize text-white">
        REQUEST
      </button>
    </div>
  );
};

export default ProfileCard;
