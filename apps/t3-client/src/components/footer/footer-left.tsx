const footerLogoColumn = {
  logo: 'logo here!',
  text: 'Building Digital Products, Brands & Experiences',
};

const FooterLeft = () => {
  return (
    <div className="tinyMobile:mb-6 min-w-60 max-w-[600px] flex-1 p-2">
      {/* <span>{footerLogoColumn.logo}</span> */}
      <span className="">
        <img src="https://picsum.photos/200" alt="" className="self-end" />
      </span>
      <p className="max-w-52 font-thin">{footerLogoColumn.text}</p>
    </div>
  );
};

export default FooterLeft;

// center image 
// figure out why config changes break main page code 
