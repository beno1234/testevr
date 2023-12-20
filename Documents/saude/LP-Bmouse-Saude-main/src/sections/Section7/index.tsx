import Image from "../../assets/section-7.svg";
import Cam1 from "../../assets/cam1.png";
import Cam2 from "../../assets/cam2.png";
import Cam3 from "../../assets/cam1.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Botao } from "../../components/Botao";

const info = [
  {
    img: Cam1,
  },
  {
    img: Cam2,
  },
  {
    img: Cam3,
  },
];

export const Section7 = () => {
  return (
    <section className="bg-gradient">
      <div className="m-auto container  py-20 lg:py-32 px-5 lg:px-0 ">
        <div className="grid grid-cols-1 items-center justify-center gap-10">
          <div className="flex flex-col items-center justify-center gap-5">
            <img src={Image} alt="Tom e Roberta" className="lg:w-[60%] " />
          </div>
          <div className="flex flex-col gap-5 relative z-50">
            <p className="lg:text-xl  xl:text-2xl text-center font-light 2xl:leading-7 text-[#F4F4F4] ">
              Grandes ideias para divulgar a sua marca se tornam ainda maiores
              com a liberdade técnica que temos para executá-las. Isso quer
              dizer que "se dá pra sonhar, dá pra fazer." Um dos nossos
              principais focos é investir em infraestrutura, conheça o que temos
              disponível:
            </p>
          </div>
          <div className="hidden lg:grid grid-cols-3 gap-32 text-white text-left h-[350px] ">
            {info.map((item) => {
              return (
                <div
                  data-aos="zoom-in"
                  className="rounded-3xl flex  bg-[#00C2FF] shadow-2xl gap-10 h-full"
                >
                  <img
                    src={item.img}
                    alt=""
                    className="mx-auto object-contain self-end"
                  />
                </div>
              );
            })}
          </div>
          <div className="grid grid-cols-1 lg:hidden gap-32 text-white text-left h-[350px] ">
            <Swiper
              pagination={{
                dynamicBullets: true,
              }}
              modules={[Pagination]}
              className="mySwiper  "
            >
              {info.map((item) => {
                return (
                  <SwiperSlide>
                    <div className="rounded-3xl flex  bg-[#00C2FF] shadow-2xl gap-10 h-full">
                      <img
                        src={item.img}
                        alt=""
                        className="mx-auto object-contain self-end"
                      />
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          <div className=" w-full  flex items-center justify-center ">
            <Botao />
          </div>
        </div>
      </div>
    </section>
  );
};
