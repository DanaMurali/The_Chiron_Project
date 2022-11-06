type Props = {
  data: {
    name: string;
    role: string;
    details: string;
    further: string;
  };
  editButton?: boolean;
  img: string;
};

const DisplayCard = ({ data, editButton, img }: Props) => {
  const { name, role, details, further } = data;

  return (
    <div className="border-sectionPink bg-sectionPink mx-auto flex min-h-[100%] w-4/5 flex-wrap rounded-xl border-8 sm:border-[45px]">
      <div className="border-mediumGreen flex h-[100%] min-h-[6.5rem] min-w-[6.5rem] items-center justify-center rounded-md border-[35px] lg:w-6/12">
        <img src={img} alt="display card image here" />
      </div>
      <div className="border-sectionPink flex h-[100%] min-h-[28rem] w-full flex-col  justify-between self-center border-[16px] bg-white py-10 px-10 text-center sm:border-[20px] lg:w-6/12">
        <h2 className="text-base font-bold sm:text-4xl">
          {name ? name : 'Name here!'}
        </h2>
        <h3 className="text-sm sm:text-2xl">{role ? role : 'Role here!'}</h3>
        <p className="text-sm sm:text-lg">
          {details
            ? details
            : 'personal details, experience etc. paragraph  here!'}
        </p>
        <p className="text-sm sm:text-lg">{further ? further : ''}</p>
        {editButton && (
          <button className="bg-blackCoral mx-auto h-11 min-w-[6rem] rounded-md text-sm text-white sm:w-[174px]">
            EDIT PROFILE
          </button>
        )}
      </div>
    </div>
  );
};

export default DisplayCard;
