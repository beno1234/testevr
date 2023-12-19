import React from "react";
import BannerButton from "../../Components/BannerButton";

const Testimonial = () => {
  return (
    <div className="text-center mt-10">
      <div className="mx-auto flex flex-col items-center justify-center">
        <div className="mt-5">
          <img src="/Vector.png" alt="Vector" />
        </div>
        <div className="text-center">
          <div className="items-center ml-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              O que falam <br />
            </h1>
            <div className="lg:w-1/2 mx-auto p-5">
              <BannerButton text="Os nossos" />
            </div>
          </div>
          <div className="w-3/4 lg:hidden block mx-auto">
            <BannerButton text="Os nossos" />
          </div>
          <div className="">
            <h1 className="text-4xl lg:text-8xl">Clientes </h1>
          </div>
        </div>
        <div className="mt-3 px-3">
          <p className="container px-6 text-center font-extralight text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
            Grandes ideias para divulgar a sua marca se tornam ainda maiores com
            a liberdade técnica que temos para executá-las.{" "}
            <span className="font-bold">
              Estamos prontos para te levar a uma nova realidade.
            </span>
          </p>
        </div>

        <div className="mt-5 px-3 lg:w-1/2 mx-auto">
          <div className="mx-auto container p-8 bg-[#242426] rounded-md shadow-lg">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              consectetur numquam, nobis commodi inventore corrupti unde, sequi
              ex doloribus quibusdam temporibus iusto cumque sit illo
              perspiciatis nemo explicabo quis! Fugiat.
            </p>
            <div className="relative">
              <span className="flex before:w-full mt-5 before:border-[#33F1DD] before:border-2 before:bg-[#33F1DD] h-0.5"></span>
            </div>
            <div className="flex items-center mt-4">
              <img
                className="w-10 h-10 rounded-full mr-4"
                src="/memoji.png"
                alt="Clenio"
              />
              <div>
                <p className="font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
                  Clenio
                </p>
                <p className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
                  CEO - Indústrias Patense
                </p>
              </div>
            </div>
          </div>
        </div>

        <img
          src="/down.png"
          className="mt-10 moving-image"
          alt="Seta para baixo"
        />
      </div>
    </div>
  );
};

export default Testimonial;
