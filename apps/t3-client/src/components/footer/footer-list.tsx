import { footerDataLinks } from '../../mock-data/footer-data';

const FooterList = () => {
  return (
    <div className="flex flex-wrap justify-center md:w-2/3">
      {footerDataLinks &&
        footerDataLinks.map(({ title, items }) => (
          <div className="min-w-[150px] lg:mr-10" key={title}>
            <h4 className="mb-5 mt-5 md:mt-0">{title}</h4>
            <ul className="cursor-pointer font-thin leading-8">
              <li className="hover:text-champagnePink">{items.one}</li>
              <li className="hover:text-champagnePink">{items.two}</li>
              <li className="hover:text-champagnePink">{items.three}</li>
              <li className="hover:text-champagnePink">{items.four}</li>
            </ul>
          </div>
        ))}
    </div>
  );
};

export default FooterList;
