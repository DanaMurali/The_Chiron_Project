const Header = () => {
  return (
    <>
      {/* <!-- Navbar --> */}
      <nav className="bg-headerPink  relative mx-auto p-4">
        {/* <!-- Flex container --> */}
        <div className="flex items-center justify-between">
          {/* <!-- Logo --> */}
          <div className="pt2">
            {/* <!-- <img src="img/logo.svg" alt=""> --> */}
            <h1 className="">LOGO</h1>
          </div>
          {/* <!-- Menu Items --> */}
          <div className="hidden space-x-8 md:flex">
            <a href="#" className="hover:text-hoverTeal">
              home
            </a>
            <a href="#" className="hover:text-hoverTeal">
              about
            </a>
            <a href="#" className="hover:text-hoverTeal">
              testimonials
            </a>
            <a href="#" className="hover:text-hoverTeal">
              contact
            </a>
          </div>
        </div>
      </nav>
      <nav className="bg-blackCoral  relative mx-auto p-2">
        {/* <!-- just to have two colours for navbar--> */}
      </nav>
    </>
  );
};

export default Header;
