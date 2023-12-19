import React from "react";
import BannerButton from "../../Components/BannerButton";

const Audiovisual = () => {
  return (
    <div className="">
      <div className="mx-auto flex flex-col items-center justify-center ">
        <div className="">
          <img src="/Vector.png" className="lg:w-[200px]" />
        </div>
        <div className="text-center">
          <h1 className="text-4xl lg:text-6xl">
            Nosso Arsenal <br />{" "}
          </h1>
          <div className="">
            <h1 className="text-6xl mx-auto lg:text-8xl"> Audiovisual </h1>
          </div>
          <div className="mx-auto text-center  mt-5">
            <BannerButton text="Conheça o que temos disponível" />
          </div>
        </div>
        <div className="relative mt-5 lg:max-w-4xl">
          <p className="container px-6 lg:text-xl text-center font-extralight">
            Grandes ideias para divulgar a sua marca se tornam ainda maiores com
            a liberdade técnica que temos para executá-las.{" "}
            <span className="font-bold">
              Estamos prontos para te levar a uma nova realidade.
            </span>
          </p>
        </div>

        <div className="container justify-center">
          {[
            {
              image: "/camera-ursa.png",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex  items-center border-4 lg:w-1/4 lg:mx-auto border-[#33F1DD] rounded-3xl  p-4 mt-5"
            >
              <div className=" mx-auto">
                <img src={item.image} className="z-20" />
              </div>
            </div>
          ))}
        </div>

        <img src="/down.png" className="mt-10 moving-image" />
      </div>
    </div>
  );
};

export default Audiovisual;
