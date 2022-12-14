import Link from 'next/link';
import { Dispatch, FormEvent, SetStateAction, useState } from 'react';

type Props = {
  onClose: () => void;
};

const Login = ({ onClose }: Props) => {
  const [passwordInput, setPasswordInput] = useState('');
  const [emailInput, setEmailInput] = useState('');

  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(emailInput, passwordInput);
    setEmailInput('');
    setPasswordInput('');
  };
  return (
    <div>
      <div className="flex items-center justify-end">
        <button
          className="close hover:text-grey focus:text-grey float-right mr-4 text-[28px] font-bold text-black hover:cursor-pointer"
          onClick={() => onClose()}
        >
          &times;
        </button>
      </div>
      <div className="bg-sectionPink w-100% mb-[2rem] flex flex-col items-center justify-center">
        <div className="mb-[2rem] flex w-full items-center justify-center bg-white pb-[0.5rem] text-[2.5rem] font-bold">
          <h2>LOG IN</h2>
        </div>
        <div className="bg-mediumGreen  mb-8 flex w-full flex-col items-center justify-center py-[2rem] drop-shadow-lg">
          <form onSubmit={(e) => handleOnSubmit(e)}>
            <div className="mb-2 flex w-[18rem] flex-row md:w-[25rem]">
              <div className=" border-textGrey mr-[1rem] flex w-[11rem] items-center justify-center border bg-white">
                <p>EMAIL</p>
              </div>
              <input
                type="text"
                id="emailInput"
                placeholder="example@example.com"
                className="form-control border-textGrey m-0 block w-full border border-solid bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
              />
            </div>
            <div className="mb-[1.5rem] flex  w-[18rem] flex-row md:w-[25rem]">
              <div className=" mr-[1rem] flex w-[11rem] items-center justify-center bg-white">
                <p>PASSWORD</p>
              </div>
              <input
                type="password"
                id="passwordInput"
                placeholder="password"
                className="form-control border-textGrey-300 m-0 block w-full border border-solid bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
              />
            </div>
            <div className="mb-4 flex items-center justify-center">
              <input
                type="submit"
                value="Log In"
                className="bg-blackCoral hover:bg-champagnePink px-[1rem] py-[0.5rem] text-white hover:cursor-pointer hover:text-black"
              />
            </div>
          </form>
          <Link href="/">
            <p className="hover:cursor-pointer hover:underline">
              Don&apos;t have an account? Sign up here!
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
