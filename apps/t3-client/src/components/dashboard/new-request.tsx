type Props = {
  handleOpenNewRequestModal: () => void;
};

const NewRequest = ({ handleOpenNewRequestModal }: Props) => {
  return (
    <div className="mx-auto my-2 flex min-h-[5rem] w-4/5 items-center justify-center text-center">
      <button
        className="bg-orange min-h-[40px] min-w-[200px] rounded px-3"
        onClick={handleOpenNewRequestModal}
      >
        <p>View your mentor requests!</p>
      </button>
    </div>
  );
};

export default NewRequest;
