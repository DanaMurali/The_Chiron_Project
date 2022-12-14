export type DisplayCardProps = {
  data: {
    name?: string;
    jobRole?: string;
    biography?: string;
  };
  editButton?: boolean;
  img: string;
  onEditClick: () => void;
};

const DisplayCard = ({
  data,
  editButton,
  img,
  onEditClick,
}: DisplayCardProps) => {
  return (
    <div className="border-sectionPink bg-sectionPink mx-auto flex min-h-[100%] w-4/5 flex-wrap rounded-xl border-8 sm:border-[45px]">
      <div className="border-mediumGreen flex h-[100%] min-h-[6.5rem] min-w-[6.5rem] items-center justify-center self-center rounded-md border-[35px] lg:w-6/12">
        <img src={img} alt="display card image here" />
      </div>
      <div className="border-sectionPink flex h-[100%] min-h-[28rem] w-full flex-col  border-[16px] bg-white py-10 px-10 text-center sm:border-[20px] lg:w-6/12">
        <h2 className="mb-4 text-base font-bold sm:text-4xl">
          {data ? data.name : 'Name'}
        </h2>
        <h3 className="mb-4 text-sm sm:text-2xl">
          {data ? data.jobRole : 'Role here!'}
        </h3>
        <p className="mb-4 text-sm sm:text-lg">
          {data
            ? data.biography
            : 'personal details, experience etc. paragraph  here!'}
        </p>
        {editButton && (
          <button
            className="bg-blackCoral mx-auto h-11 min-w-[6rem] rounded-md text-sm text-white sm:w-[174px]"
            onClick={onEditClick}
          >
            EDIT PROFILE
          </button>
        )}
      </div>
    </div>
  );
};

export default DisplayCard;
