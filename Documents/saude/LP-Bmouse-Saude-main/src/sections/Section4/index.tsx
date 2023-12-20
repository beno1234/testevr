import Image from "../../assets/section4.svg";
import One from "../../assets/one.png";
import Two from "../../assets/two.png";
import Three from "../../assets/three.png";
import Four from "../../assets/four.png";
import Five from "../../assets/five.png";
import { Botao } from "../../components/Botao";
export const Section4 = () => {
  return (
    <section className="bg-section-3">
      <div className="m-auto container py-20 lg:py-32 px-5 lg:px-0 ">
        <div className="grid grid-cols-1 items-center justify-center gap-10">
          <div className="flex flex-col items-center justify-center gap-5">
            <img
              src={Image}
              alt="Tom e Roberta"
              className="md:w-[60%] 2xl:w-[50%] "
            />
          </div>
          <div className="flex flex-col gap-5 relative z-50">
            <p className="md:text-2xl lg:text-xl  xl:text-2xl 2xl:text-3xl text-center font-light  text-[#F4F4F4] ">
              Já percebeu como ninguém tem mais paciência para propagandas? O
              mundo está realmente muito rápido, então precisamos ter conteúdos
              que façam parte do fluxo recebido pela audiência, criados de forma
              assertiva dentro das tendências desse vasto universo de
              possibilidades
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 text-white text-left lg:h-[150px] ">
            <div className="lg:rounded-3xl flex items-center lg:bg-[#00C2FF] lg:shadow-2xl  gap-10 lg:gap-3 xl:gap-5 2xl:gap-10 h-full">
              <img
                src={One}
                alt=""
                className="w-[150px]  h-[150px] lg:h-[150px]  lg:w-[150px] rounded-3xl"
              />
              <p className="text-2xl md:text-3xl lg:text-xl xl:text-2xl 2xl:text-3xl">
                Vídeos <strong className="font-bold"> Institucionais</strong>
              </p>
            </div>
            <hr className="border-1 lg:hidden" />
            <div className="lg:rounded-3xl flex items-center lg:bg-[#00C2FF] lg:shadow-2xl   gap-10 lg:gap-3 xl:gap-5 2xl:gap-10 h-full">
              <img
                src={Two}
                alt=""
                className="w-[150px] h-[150px] lg:h-full  lg:w-[150px] rounded-3xl"
              />
              <p className="text-2xl md:text-3xl lg:text-xl xl:text-2xl 2xl:text-3xl">
                Filmagens <br /> em até{" "}
                <strong className="font-bold"> 12k</strong>
              </p>
            </div>
            <hr className="border-1 lg:hidden" />
            <div className="lg:rounded-3xl flex items-center lg:bg-[#00C2FF] lg:shadow-2xl   gap-10 lg:gap-3 xl:gap-5 2xl:gap-10 h-full">
              <img
                src={Three}
                alt=""
                className="w-[150px] h-[150px] lg:h-full  lg:w-[150px] rounded-3xl"
              />
              <p className="text-2xl md:text-3xl lg:text-xl xl:text-2xl 2xl:text-3xl">
                Longas e <br />{" "}
                <strong className="font-bold"> Documentários</strong>
              </p>
            </div>
            <hr className="border-1 lg:hidden" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 text-white text-left lg:h-[200px] ">
            <div className="rounded-3xl flex items-center lg:bg-[#00C2FF] lg:shadow-2xl   gap-10 lg:gap-5 xl:gap-10 h-full">
              <img
                src={Four}
                alt=""
                className="w-[150px] h-[150px]  bg-gray-200 lg:h-full lg:w-[200px] rounded-3xl"
              />

              <p className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
                Vídeos curtos <br />
                <strong className="font-bold"> e Comerciais</strong>
              </p>
            </div>
            <hr className="border-1 lg:hidden" />
            <div className="lg:rounded-3xl flex items-center lg:bg-[#00C2FF] lg:shadow-2xl  gap-10 h-full">
              <img
                src={Five}
                alt=""
                className="w-[150px] h-[150px] lg:h-full  lg:w-[200px] rounded-3xl"
              />
              <p className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
                Filmagens <br /> <strong className="font-bold"> Aéreas</strong>
              </p>
            </div>
          </div>

          <hr className="border-1 lg:hidden" />
          <div className=" w-full  flex items-center justify-center ">
            <Botao />
          </div>
          <div className=" mx-auto arrow-container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="72"
              height="72"
              viewBox="0 0 72 72"
              fill="none"
            >
              <path
                d="M18 39L36 57L54 39M18 18L36 36L54 18"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};
