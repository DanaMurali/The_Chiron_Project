// const footerLogoColumn = {
//   logo: 'https://picsum.photos/100',
//   text: 'Building Digital Products, Brands & Experiences',
// };

const FooterLeft = (footerLogoColumn: any) => {
  console.log(footerLogoColumn, '<< footerLogoColumn')
  return (
    <div className="flex flex-col md:justify-center md:w-1/3 py-2 items-center">
      <span className="">
        <img src={footerLogoColumn.logo} alt="" className="mb-2" />
      </span>
      <p className="font-thin max-w-[200px]">{footerLogoColumn.text}</p>
    </div>
  );
};

export default FooterLeft;
