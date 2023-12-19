import React from "react";

interface BannerButtonProps {
  text: string;
}

const BannerButton: React.FC<BannerButtonProps> = ({ text }) => {
  return (
    <div
      className="bg-[#33F1DD]  rounded-xl focus:outline-none focus:ring focus:border-blue-300"
      style={{
        boxShadow:
          "0px 0px 12.946px 0px #03BFAC, 0px 0px 25.891px 0px #03BFAC, 0px 0px 90.619px 0px #03BFAC, 0px 0px 181.238px 0px #03BFAC, 0px 0px 310.694px 0px #03BFAC, 0px 0px 543.715px 0px #03BFAC",
      }}
    >
      <p className="text-black lg:p-2 lg:font-extralight">{text}</p>
    </div>
  );
};

export default BannerButton;
