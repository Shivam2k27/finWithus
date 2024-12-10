import React from "react";

const Footer = () => {
  return (
    <div className="bg-mybrown text-textbrown">
      <div className="text-center p-20">
        <h1 className="text-responsiveLarge  hover:text-orange-400">FinWithUS</h1>
        <h3 className="text-responsiveSmall  hover:text-orange-400">Finance made easy <span className="text-responsiveMedium mr-4">WithUs</span>^_^</h3>
      </div>
      <div className="flex text-center justify-center gap-8 text-responsiveSmall">
        <div className="text-center flex flex-col  hover:text-orange-400 items-center">
          <h2>AbousUs</h2>
          <img  className='w-10 h-10 mt-4' src="/man.png" alt="aboutUs" />
        </div>
        <div className="text-center flex flex-col hover:text-orange-400 items-center">
          <h2>Instagram</h2>
          <img  className='w-10 h-10 mt-4' src="/instagram.png" alt="aboutUs" />
        </div>
      </div>
      <h2 className="p-20 text-center text-responsiveSmall">CopyRight2024@Shivam chaudhary</h2>
    </div>
  );
};

export default Footer;
