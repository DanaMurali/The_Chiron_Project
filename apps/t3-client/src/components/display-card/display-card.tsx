type Props = {
  data: {
    name: string;
    role: string;
    details: string;
    further: string;
  };
  editButton?: boolean;
  img?: string;
};

const DisplayCard = ({ data, editButton, img }: Props) => {
  const { name, role, details, further } = data;

  return (
    <div className="border-sectionPink mx-auto flex min-h-[38.5rem] w-4/5 flex-wrap rounded-xl border-[45px]">
      <div className="border-mediumGreen py-auto bg-sectionPink flex min-h-[12.5rem] w-full items-center rounded-md border-[35px] md:w-6/12">
        <img src={img} alt="display card image here" />
      </div>
      <div className="border-sectionPink flex min-h-[28rem] w-full  flex-col justify-between border-[20px]  py-10 px-10 text-center md:w-6/12">
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
          <button className="bg-blackCoral mx-auto h-11 min-w-[100px] rounded-md text-sm text-white sm:w-[174px]">
            EDIT PROFILE
          </button>
        )}
      </div>
    </div>
  );
};

export default DisplayCard;
