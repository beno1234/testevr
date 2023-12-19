const Virtual = () => {
  return (
    <div className=" py-16 bg-transparent w-full relative">
      <div className="text-center">
        <h1 className="text-[#33F1DD] text-4xl lg:text-8xl">
          Realidade
          <br /> Virtual
        </h1>
      </div>
      <div className="text-center mt-10 mx-auto">
        <h2 className="text-[rgba(255, 255, 255, 0.70)] text-xl">
          Assista aqui alguns trabalhos
        </h2>

        <img src="/Patense-video.png" className="mx-auto pt-10 lg:hidden" />
        <img
          src="/patense-desktop.png"
          className="mx-auto mt-10 hidden lg:block"
        />
      </div>
    </div>
  );
};

export default Virtual;
