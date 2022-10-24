import { footerLogoData } from '../../mock-data/footer-data';
import FooterLeft from './footer-left';
import FooterList from './footer-list';

const Footer = () => {
  return (
    <footer className="bg-blackCoral min-h-28 relative w-full p-10 text-white">
      <div className="flex flex-wrap items-center justify-around text-center">
        <FooterLeft {...footerLogoData} />
        <FooterList />
      </div>
      <p className="mt-3 text-center font-thin">© the Chiron project</p>
    </footer>
  );
};

export default Footer;
