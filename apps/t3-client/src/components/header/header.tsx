import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

type Props = {
  isLoggedIn?: boolean;
};

const defaultNavBarData = [
  {
    label: 'home',
    href: '/',
  },
  {
    label: 'skills',
    href: '#skills',
  },
  {
    label: 'events',
    href: '#mentoring-events',
  },
  {
    label: 'testimonials',
    href: '#testimonials',
  },
  {
    label: 'contact',
    href: '#contact',
  },
];

const loggedInNavBarData = [
  {
    label: 'dashboard',
    href: '/dashboard',
  },
  {
    label: 'search',
    href: '/search',
  },
  {
    label: 'logout',
    href: '/',
  },
];

const Header = ({ isLoggedIn }: Props) => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  const openMenu = () => {
    setIsBurgerOpen(true);
  };

  const closeMenu = () => {
    setIsBurgerOpen(false);
  };

  const data = (
    <>
      {isLoggedIn
        ? loggedInNavBarData.map((i, key) => (
            <li
              key={key}
              className="hover:text-champagnePink md:hover:text-hoverTeal list-none"
            >
              <a href={i.href}>{i.label}</a>
            </li>
          ))
        : defaultNavBarData.map((i, key) => (
            <li
              key={key}
              className="hover:text-champagnePink md:hover:text-hoverTeal list-none"
            >
              <a href={i.href}>{i.label}</a>
            </li>
          ))}
    </>
  );

  return (
    <>
      <nav className="bg-headerPink relative mx-auto flex h-[4rem] items-center justify-between px-1 pt-2 ">
        <span className="py-2 pl-4">
          <Link href="/">
            <Image
              src="/assets/chiron-crop.png"
              alt="logo"
              height={50}
              width={50}
            />
          </Link>
        </span>
        <button onClick={openMenu} className={`cursor-pointer md:hidden`}>
          <Image
            src="/assets/better-stolen-burger.png"
            width={50}
            height={30}
            alt="burger-menu"
          />
        </button>
        <ul className={`hidden space-x-8 pr-4 md:flex`}>{data}</ul>

        {isBurgerOpen && (
          <div
            className={`bg-blackCoral modal fixed top-0 right-0 z-50 min-w-[15rem] max-w-full overflow-visible rounded px-2 py-2`}
          >
            <div className="flex justify-end">
              <button
                className="close hover:text-grey focus:text-grey float-right mr-4 text-[28px] font-bold text-white hover:cursor-pointer"
                onClick={() => closeMenu()}
              >
                &times;
              </button>
            </div>
            <div className="pl-5 pb-2 text-lg leading-10 text-white">
              {data}
            </div>
          </div>
        )}
      </nav>
      <div className="bg-blackCoral relative mx-auto p-2"></div>
    </>
  );
};

export default Header;
