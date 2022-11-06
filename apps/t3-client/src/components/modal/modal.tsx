import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  open: boolean;
  onClose: () => void;
};

const Modal = ({ children, open, onClose }: Props) => {
  return (
    <div
      className={`modal fixed left-0 top-0 z-10 h-full w-full overflow-auto bg-[rgb(0,0,0)] bg-[rgba(0,0,0,0.4)] ${
        open ? '' : 'hidden'
      }`}
      onClick={() => onClose()}
    >
      <div
        className="my-[15%] mx-auto w-full rounded-[8px] border border-solid border-[#888] bg-[#fefefe] md:w-4/5"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
