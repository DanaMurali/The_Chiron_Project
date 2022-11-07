import Image from 'next/image';
import Link from 'next/link';
import NavMenu from './nav-menu';

const Header = () => {
  return (
    <>
      <nav className="bg-headerPink relative mx-auto flex max-h-[4rem] items-center justify-between py-2 px-4">
        <span>
          <Link href="/">
            <Image
              src="/assets/chiron-crop.png"
              alt="logo"
              height={50}
              width={50}
            />
          </Link>
        </span>
        <span>
          <NavMenu />
        </span>
      </nav>
      <div className="bg-blackCoral relative mx-auto p-2"></div>
    </>
  );
};

export default Header;
