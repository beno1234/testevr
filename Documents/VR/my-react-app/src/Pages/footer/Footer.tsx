import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#33F1DD] py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 md:px-10">
        <div className="mb-4 md:mb-0">
          <img src="/logo.png" alt="Logo" className="mb-2" />
          <p className="text-sm">
            Embarque na jornada do marketing digital com a gente e alcance as
            estrelas!
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center">
          <a href="#" className="mr-4 mb-2 md:mb-0">
            Privacy & Cookie Policy
          </a>
          <p className="text-sm">&copy; BMouse Productions</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
