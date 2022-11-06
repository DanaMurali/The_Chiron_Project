import Link from 'next/link';
import { useState } from 'react';

const Login = () => {
  const [passwordInput, setPasswordInput] = useState('');
  const [emailInput, setEmailInput] = useState('');

  const handleOnSubmit = () => {
    console.log(emailInput, passwordInput);
  };
  return (
    <div className="bg-sectionPink w-100% mb-[2rem] flex flex-col items-center justify-center">
      <div className="my-[2rem] flex w-full items-center justify-center bg-white py-[0.5rem] text-[2.5rem] font-bold">
        <h2>LOG IN</h2>
      </div>
      <div className="bg-mediumGreen mb-8  flex flex-col items-center justify-center rounded-[0.5rem] py-[2rem] px-[2rem] drop-shadow-lg">
        <form>
          <div className="mb-2 flex w-[25rem] flex-row">
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
          <div className="mb-[1.5rem] flex  w-[25rem] flex-row">
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
              className="bg-blackCoral hover:bg-champagnePink px-[1rem] py-[0.5rem] hover:cursor-pointer"
              onSubmit={handleOnSubmit}
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
  );
};

export default Login;
