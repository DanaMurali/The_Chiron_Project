import FooterLeft from './footer-left';
import FooterList from './footer-list';

const Footer = () => {
  return (
    <footer className="bg-blackCoral min-h-28 relative bottom-0 max-h-[500px] w-full p-10 text-white">
      <div className=" flex flex-wrap justify-around text-center sm:items-center">
        <FooterLeft />
        <FooterList />
      </div>
      <p className="text-center font-thin">© the Chiron project</p>
    </footer>
  );
};

export default Footer;

// to do
// check spacing works okay with image
