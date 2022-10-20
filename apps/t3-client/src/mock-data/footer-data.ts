export const footerLogoColumn = {
  logo: 'string - logo here ',
  text: 'Building Digital Products, Brands & Experiences',
};

export type footerDataType = Array<{
  columnNumber?: number;
  title?: string;
  items: {
    one?: string;
    two?: string;
    three?: string;
    four?: string;
  };
}>;

export const footerDataLinks = [
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
