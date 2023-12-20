import Ana from "../../assets/dr-ana.svg";
import Luis from "../../assets/luis.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Botao } from "../../components/Botao";

export const Section6 = () => {
  return (
    <>
      <section className="bg-[#022C5E] lg:rounded-none">
        <div className="m-auto container  py-5 lg:py-20 px-5 lg:px-0 ">
          <Swiper
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination]}
            className="mySwiper xl:!hidden"
          >
            <div className="flex gap-20 ">
              <SwiperSlide className="">
                <div className="flex bg-[#022C5E]   flex-col gap-3  text-left ">
                  <p className="border-2 border-white rounded-full px-6 py-2 self-end text-white">
                    Depoimentos
                  </p>
                  <div className="flex items-center gap-3 ">
                    <img src={Ana} alt="" className="!w-[100px] lg:w-full" />
                    <div className="flex flex-col gap-1 text-white">
                      <h1 className="font-bold text-3xl">Dra. Ana</h1>
                      <p className="font-light">Medic Imagem</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 text-white">
                    <p>
                      "Apparently we had reached a great height in the
                      atmosphere, for the sky was a dead black, and the stars
                      had ceased to twinkle. By the same illusion which lifts
                      the horizon of the sea to the level of the spectator on a
                      hillside, the sable cloud beneath was dished out, and the
                      car seemed to float in the middle of an immense dark
                      sphere, whose upper half was strewn with silver."dark
                      sphere, whose upper half was strewn with silver."dark
                      sphere, whose upper half was strewn with silver."
                    </p>
                    <p>
                      "Apparently we had reached a great height in the
                      atmosphere, for the sky was a dead black, and the stars
                      had ceased to twinkle. By the same illusion which lifts
                      the horizon of the sea to the level of the spectator on a
                      hillside, the sable cloud beneath was dished out, and the
                      car seemed to float in the middle of an immense dark
                      sphere, whose upper half was strewn with silver."dark
                      sphere, whose upper half was strewn with silver."dark
                      sphere, whose upper half was strewn with silver."
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex bg-[#022C5E]  ">
                  <div className="hidden lg:block bg-white h-full w-[3px] "></div>
                  <div className="flex flex-col gap-3 px-5 text-left lg:px-0">
                    <p className="border-2 border-white rounded-full px-6 py-2 self-end text-white">
                      Depoimentos
                    </p>
                    <div className="flex items-center gap-3">
                      <img src={Luis} alt="" className="!w-[100px] lg:w-full" />
                      <div className="flex flex-col gap-1 text-white">
                        <h1 className="font-bold text-3xl">Dr. Luis</h1>
                        <p className="font-light">Ortopedia</p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 text-white">
                      <p>
                        "Apparently we had reached a great height in the
                        atmosphere, for the sky was a dead black, and the stars
                        had ceased to twinkle. By the same illusion which lifts
                        the horizon of the sea to the level of the spectator on
                        a hillside, the sable cloud beneath was dished out, and
                        the car seemed to float in the middle of an immense dark
                        sphere, whose upper half was strewn with silver."dark
                        sphere, whose upper half was strewn with silver."dark
                        sphere, whose upper half was strewn with silver."
                      </p>
                      <p>
                        "Apparently we had reached a great height in the
                        atmosphere, for the sky was a dead black, and the stars
                        had ceased to twinkle. By the same illusion which lifts
                        the horizon of the sea to the level of the spectator on
                        a hillside, the sable cloud beneath was dished out, and
                        the car seemed to float in the middle of an immense dark
                        sphere, whose upper half was strewn with silver."dark
                        sphere, whose upper half was strewn with silver."dark
                        sphere, whose upper half was strewn with silver."
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </div>
          </Swiper>
          <div className="hidden xl:flex gap-20 ">
            <div className="flex   flex-col gap-3  text-left ">
              <p className="border-2 border-white rounded-full px-6 py-2 self-end text-white">
                Depoimentos
              </p>
              <div className="flex items-center gap-3 ">
                <img src={Ana} alt="" className="!w-[100px] lg:w-full" />
                <div className="flex flex-col gap-1 text-white">
                  <h1 className="font-bold text-3xl">Dra. Ana</h1>
                  <p className="font-light">Medic Imagem</p>
                </div>
              </div>
              <div className="flex flex-col gap-2 text-white">
                <p>
                  "Apparently we had reached a great height in the atmosphere,
                  for the sky was a dead black, and the stars had ceased to
                  twinkle. By the same illusion which lifts the horizon of the
                  sea to the level of the spectator on a hillside, the sable
                  cloud beneath was dished out, and the car seemed to float in
                  the middle of an immense dark sphere, whose upper half was
                  strewn with silver."dark sphere, whose upper half was strewn
                  with silver."dark sphere, whose upper half was strewn with
                  silver."
                </p>
                <p>
                  "Apparently we had reached a great height in the atmosphere,
                  for the sky was a dead black, and the stars had ceased to
                  twinkle. By the same illusion which lifts the horizon of the
                  sea to the level of the spectator on a hillside, the sable
                  cloud beneath was dished out, and the car seemed to float in
                  the middle of an immense dark sphere, whose upper half was
                  strewn with silver."dark sphere, whose upper half was strewn
                  with silver."dark sphere, whose upper half was strewn with
                  silver."
                </p>
              </div>
            </div>
            <div className="flex bg-[#022C5E]  ">
              <div className="hidden lg:block bg-white h-full w-[3px] me-20"></div>
              <div className="flex flex-col gap-3 px-5 text-left lg:px-0">
                <p className="border-2 border-white rounded-full px-6 py-2 self-end text-white">
                  Depoimentos
                </p>
                <div className="flex items-center gap-3">
                  <img src={Luis} alt="" className="!w-[100px] lg:w-full" />
                  <div className="flex flex-col gap-1 text-white">
                    <h1 className="font-bold text-3xl">Dr. Luis</h1>
                    <p className="font-light">Ortopedia</p>
                  </div>
                </div>
                <div className="flex flex-col gap-2 text-white">
                  <p>
                    "Apparently we had reached a great height in the atmosphere,
                    for the sky was a dead black, and the stars had ceased to
                    twinkle. By the same illusion which lifts the horizon of the
                    sea to the level of the spectator on a hillside, the sable
                    cloud beneath was dished out, and the car seemed to float in
                    the middle of an immense dark sphere, whose upper half was
                    strewn with silver."dark sphere, whose upper half was strewn
                    with silver."dark sphere, whose upper half was strewn with
                    silver."
                  </p>
                  <p>
                    "Apparently we had reached a great height in the atmosphere,
                    for the sky was a dead black, and the stars had ceased to
                    twinkle. By the same illusion which lifts the horizon of the
                    sea to the level of the spectator on a hillside, the sable
                    cloud beneath was dished out, and the car seemed to float in
                    the middle of an immense dark sphere, whose upper half was
                    strewn with silver."dark sphere, whose upper half was strewn
                    with silver."dark sphere, whose upper half was strewn with
                    silver."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" w-full  flex items-center justify-center mb-10">
          <Botao />
        </div>
        <div className=" flex items-center justify-center mx-auto arrow-container">
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
      </section>
    </>
  );
};
