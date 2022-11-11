import { useSession } from 'next-auth/react';
import { FormEvent, useEffect, useState } from 'react';
import { trpc } from '../../utils/trpc';

type Props = {
  onClose: () => void;
};

const EditProfile = ({ onClose }: Props) => {
  const [roleInput, setRoleInput] = useState('');
  const [biographyInput, setBiographyInput] = useState('');
  const [isMentor, setIsMentor] = useState(false);
  const [isMentee, setIsMentee] = useState(false);
  const [shouldSend, setShouldSend] = useState(false);

  const { data } = useSession();

  const updateUser = trpc.useMutation('updateUser.updateUser');

  useEffect(() => {
    if (shouldSend === true) {
      updateUser.mutate({
        id: 'clac8tfvo0019viecjs6e091r',
        bio: biographyInput,
        isMentor: isMentor,
        isMentee: isMentee,
      });
      setShouldSend(false);
    }
  }, [shouldSend]);

  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(roleInput, biographyInput, isMentor, isMentee, 'submitted');
    setRoleInput('');
    setBiographyInput(biographyInput);
    setIsMentor(isMentor);
    setIsMentee(isMentee);
    setShouldSend(true);
  };

  return (
    <div className="border-mediumGreen rounded border-[1rem]">
      <div className="flex items-center justify-end">
        <button
          className="close hover:text-grey focus:text-grey float-right mr-4 text-[28px] font-bold text-black hover:cursor-pointer"
          onClick={() => onClose()}
        >
          &times;
        </button>
      </div>
      <h2 className="py-4  text-center text-[2.5rem] font-bold">
        Edit your profile:
      </h2>
      <div className="bg-sectionPink w-100% mb-[2rem] flex min-h-[20rem] flex-col items-center justify-center border-2">
        <form onSubmit={(e) => handleOnSubmit(e)}>
          {/* <div className="mb-2 flex">
            <label
              htmlFor="role"
              className="border-textGrey mr-[1rem] flex w-[11rem] items-center justify-center border bg-white"
            >
              Job Role:
            </label>
            <input
              type="text"
              placeholder="software engineer"
              id="role"
              className="form-control border-textGrey m-0 block w-full border border-solid bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
              value={roleInput}
              onChange={(e) => setRoleInput(e.target.value)}
            />
          </div> */}
          <div className="mb-2 flex">
            <label
              htmlFor="biography"
              className="border-textGrey mr-[1rem] flex w-[11rem] items-center justify-center border bg-white"
            >
              Biography:
            </label>
            <input
              type="text"
              placeholder="loves typescript"
              id="biography"
              className="form-control border-textGrey m-0 block w-full border border-solid bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
              value={biographyInput}
              onChange={(e) => setBiographyInput(e.target.value)}
            />
          </div>
          <div className="mx-auto flex max-w-[20rem] flex-col items-center justify-center text-center">
            <label className="border-textGrey mr-[1rem] flex h-[38px] w-[11rem] items-center justify-center border bg-white">
              I want to be ...
            </label>
            <div className="flex">
              <label htmlFor="mentor" className="mr-2">
                a mentor:
              </label>
              <input
                type="checkbox"
                id="mentor"
                onChange={(e) => setIsMentor(e.target.checked)}
                checked={isMentor}
              />
            </div>
            <div className="flex">
              <label htmlFor="mentee" className="mr-2">
                a mentee:
              </label>
              <input
                type="checkbox"
                id="mentee"
                onChange={(e) => setIsMentee(e.target.checked)}
                checked={isMentee}
              />
            </div>
            <p>
              note: please select both if you&apos;d like to be both mentor and
              mentee!
            </p>
          </div>
          <div className="mt-4 flex items-center">
            <input
              type="submit"
              className="bg-blackCoral mx-auto h-11 min-w-[6rem] cursor-pointer rounded-md text-sm text-white sm:w-[174px]"
              value="UPDATE MY PROFILE"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
