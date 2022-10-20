import FooterList from './footer-list';

const footerLogoColumn = {
  logo: 'string - logo here ',
  text: 'Building Digital Products, Brands & Experiences',
};

const Footer = () => {
  //   const testData: footerDataType = footerDataLinks;
  //   console.log(footerDataLinks, '<<< test data ');
  return (
    <footer className="bg-blackCoral min-h-100p relative bottom-0 max-h-[500px] w-full p-10 text-white">
      <div className="flex">
        <div className="flex-1 text-center">
          <span>{footerLogoColumn.logo}</span>
          <p className="font-thin">{footerLogoColumn.text}</p>
        </div>
        <FooterList />
      </div>
      <p className="text-center font-thin">TM the Chiron project</p>
    </footer>
  );
};

export default Footer;

// split footerlist component into 1/3s
// mobile friendly!
