import type { footerLogoData } from '../../mock-data/footer-data';

const FooterLeft = ({ logo, text }: footerLogoData) => {
  return (
    <div className="flex flex-col items-center py-2 md:w-1/3 md:justify-center">
      <span>
        <img src={logo} alt="" className="mb-2" />
      </span>
      <p className="max-w-[200px] font-thin">{text}</p>
    </div>
  );
};

export default FooterLeft;
