import React from "react";

const Pensamento = () => {
  return (
    <div className="py-16 mx-auto text-center">
      <div className="">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
          Pensamos
        </h1>
        <span className="text-[#33F1DD] text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl block mx-auto">
          Além.
        </span>
      </div>

      <p className="text-sm sm:text-base md:text-lg text-gray-400 lg:max-w-5xl mx-auto lg:text-xl xl:text-2xl mt-4">
        A BMouse é muito mais do que uma agência de marketing. Somos uma agência
        de criatividade com um compromisso inabalável em levar a sua marca a
        novos patamares.{" "}
      </p>

      <div className="mx-auto mt-10">
        <img
          src="/tom&roberta.png"
          className="mx-auto max-w-full"
          alt="Tom & Roberta"
        />
        <img
          src="/down.png"
          className="mt-10 moving-image mx-auto"
          alt="Seta para baixo"
        />
      </div>
    </div>
  );
};

export default Pensamento;
