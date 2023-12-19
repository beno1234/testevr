import React from "react";

interface BannerButtonProps {
  text: string;
}

const BannerButtonTransparent: React.FC<BannerButtonProps> = ({ text }) => {
  return (
    <div className=" rounded-xl focus:outline-none focus:ring focus:border-blue-300">
      <p className="text-black">{text}</p>
    </div>
  );
};

export default BannerButtonTransparent;
