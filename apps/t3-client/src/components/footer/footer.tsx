import { footerLogoColumn } from '../../mock-data/footer-data';
import FooterLeft from './footer-left';
import FooterList from './footer-list';

const Footer = () => {
  return (
    <footer className="bg-blackCoral min-h-28 relative w-full p-10 text-white">
      <div className="flex justify-around flex-wrap text-center items-center">
        <FooterLeft footerLogoColumn={footerLogoColumn}/>
        <FooterList />
      </div>
      <p className="text-center font-thin mt-3">© the Chiron project</p>
    </footer>
  );
};

export default Footer;
