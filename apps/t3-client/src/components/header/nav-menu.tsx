import Image from 'next/image';
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

const NavMenu = ({ isLoggedIn }: Props) => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  const openMenu = () => {
    setIsBurgerOpen(!isBurgerOpen);
    console.log('burger menu interaction');
  };

  const data = (
    <>
      {isLoggedIn
        ? loggedInNavBarData.map((i, key) => (
            <li key={key}>
              <a href={i.href}>{i.label}</a>
            </li>
          ))
        : defaultNavBarData.map((i, key) => (
            <li key={key}>
              <a href={i.href}>{i.label}</a>
            </li>
          ))}
    </>
  );

  return (
    <>
      <button onClick={openMenu} className="cursor-pointer md:hidden">
        <Image
          src="/assets/better-stolen-burger.png"
          width={50}
          height={30}
          alt="burger-menu"
        />
      </button>
      {isBurgerOpen ? (
        <div className=""></div>
      ) : (
        <div>
          <ul className={`hidden space-x-8 md:flex`}>{data}</ul>
        </div>
      )}
    </>
  );
};

export default NavMenu;
