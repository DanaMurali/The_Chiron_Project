const footerDataLinks = [
  {
    columnNumber: 1,
    title: 'Resources',
    items: {
      one: 'Guides',
      two: 'Blog',
      three: 'Customer Stories',
      four: 'Glossary',
    },
  },
  {
    columnNumber: 2,
    title: 'Company',
    items: {
      one: 'About Us',
      two: 'Careers',
      three: 'Partners',
      four: 'Contact Us',
    },
  },
  {
    columnNumber: 3,
    title: 'Social Media',
    items: {
      one: 'LinkedIn',
      two: 'Facebook',
      three: 'Instagram',
      four: 'Twitter',
    },
  },
];

const FooterList = () => {
  return (
    <div className="flex flex-row  pl-5 lg:min-w-[775px] items-center border-2">
      {footerDataLinks &&
        footerDataLinks.map(({ title, items }) => (
          <div className="mb-5 mr-[60px] smallMobile:min-w-20">
            <h4 className="mb-5"> {title}</h4>
            <ul className="font-thin leading-8">
              <li>{items.one}</li>
              <li>{items.two}</li>
              <li>{items.three}</li>
              <li>{items.four}</li>
            </ul>
          </div>
        ))}
    </div>
  );
};

export default FooterList;
