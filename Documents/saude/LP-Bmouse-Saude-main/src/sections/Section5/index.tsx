/* eslint-disable @typescript-eslint/no-unused-vars */
import Image from "../../assets/section-5.svg";
import Medic from "../../assets/teste.svg";
import Elisangela from "../../assets/menezes.svg";
import Luis from "../../assets/luis.svg";
import One from "../../assets/odontologia.svg";
/* import Modal from "../../components/Modal"; */
import Sorridents from "../../assets/sorridents.svg";

/* import { useState } from "react"; */
import { Botao } from "../../components/Botao";
import Modal from "../../components/Modal";
import { useState } from "react";

const info = [
  {
    img: Medic,
    title: "Medic Imagema ",
    url: "https://player.vimeo.com/video/891869273?h=fa06cadd9b&amp;background=1&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    strong: "Diagnósticos",
    text: "A parceria entre a BMouse e a Medic Imagem Diagnósticos demonstra a importância do marketing na evolução de clínicas médicas. Para a clínica, que já é reconhecida por sua excelência e precisão em diagnósticos, buscamos aprimorar sua identidade visual para refletir sua alta tecnologia",
    text2: "",
  },
  {
    img: Elisangela,
    title: "Dra. Elisângela ",
    url: "https://player.vimeo.com/video/891898699?h=51b21404f8&amp;background=1&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    strong: "Menezes",
    text: "Nossa parceria com a Dra. Elisângela tem sido uma jornada de conquistas significativas. Reconhecida profissionalmente nas áreas de pediatria, alergia e imunologia, ela se tornou uma referência em Patos de Minas e região. E por meio de um planejamento de marketing estratégico, conseguimos fortalecer sua presença no mercado.",
    text2: "",
  },
  {
    img: Luis,
    title: "Dr. Luis ",
    url: "https://player.vimeo.com/video/891902027?h=f331a2cab6&amp;background=1&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    strong: "Paulo",
    text: "Durante a nossa parceria com o Dr. Luís Paulo, especialista em ortopedia e traumatologia, tivemos como objetivo unir sua vasta experiência na ortopedia com a modernidade do mundo digital. Buscamos também criar conteúdos que atingissem o público-alvo definido pela campanha, mostrando como essas especialidades são essenciais para o dia a dia e para maior qualidade de vida das pessoas.",
    text2: "",
  },
  {
    img: One,
    title: "One",
    url: "https://player.vimeo.com/video/891862263?h=60d99a2d57&amp;background=1&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    strong: "Odontologia",
    text: "Quando estabelecemos uma parceria com a One Odontologia, nosso objetivo era transformar sua clínica odontológica em uma referência. Trabalhamos com a mesma abordagem que adotamos em outras parcerias, desenvolvendo conteúdos que refletissem o alto padrão e a excelência que a clínica oferece.",
    text2: "",
  },
  {
    img: Sorridents,
    title: "",
    url: "https://player.vimeo.com/video/891902027?h=f331a2cab6&amp;background=1&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    strong: "Sorridents",
    text: "Com a Sorridents, a BMouse criou uma série de projetos inovadores, sempre buscando conversar com os pacientes de forma simples e clara, para que pudéssemos atingir um público amplo.",
    text2:
      " O primeiro grande marco foi a campanha 'Alegria', uma ação original e inovadora no contexto do marketing odontológico. ",
  },
];

export const Section5 = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const handleOpenModal = (videoUrl: string) => {
    setSelectedVideo(videoUrl);
  };

  const handleCloseModal = () => {
    setSelectedVideo(null);
  };
  return (
    <section className="bg-section-5">
      <div className="m-auto container  py-20 lg:py-32 px-5 lg:px-0 ">
        <div className="grid grid-cols-1 items-center justify-center gap-10">
          <div className="flex flex-col items-center justify-center gap-5">
            <img src={Image} alt="Tom e Roberta" className="lg:w-[60%] " />
          </div>
          <div className="grid grid-cols-1 gap-10 text-white text-left  ">
            {info.map((item, index) => {
              return (
                <div key={index}>
                  <div className="flex flex-col lg:flex-row gap-5 bg-white shadow-2xl rounded-3xl h-full pb-10 lg:pb-0 lg:h-[470px] xl:h-[550px]">
                    <a
                      href={item.url}
                      target="_blank"
                      className="w-full h-[250px] lg:h-full lg:w-[50%] xl:w-[50%] bg-transparent rounded-3xl flex items-center justify-center lg:p-10 border-none shadow-none hover:shadow-none "
                      style={{
                        backgroundImage: `url(${item.img})`,
                        backgroundSize: "cover",
                        backgroundPosition: " center",
                        backgroundRepeat: "no-repeat",
                      }}
                      onClick={(e) => {
                        e.preventDefault();
                        handleOpenModal(item.url);
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="72"
                        height="72"
                        viewBox="0 0 72 72"
                        fill="none"
                      >
                        <g filter="url(#filter0_d_230_418)">
                          <path
                            opacity="0.7"
                            d="M36.0852 63.7998C53.5392 63.7998 67.6885 49.6506 67.6885 32.1965C67.6885 14.7425 53.5392 0.593262 36.0852 0.593262C18.6312 0.593262 4.48193 14.7425 4.48193 32.1965C4.48193 49.6506 18.6312 63.7998 36.0852 63.7998Z"
                            fill="white"
                          />
                          <path
                            d="M47.9039 32.3353L30.958 42.5681V22.1025L47.9039 32.3353Z"
                            fill="#0B6FE0"
                          />
                        </g>
                        <defs>
                          <filter
                            id="filter0_d_230_418"
                            x="0.481934"
                            y="0.593262"
                            width="71.2066"
                            height="71.2065"
                            filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB"
                          >
                            <feFlood
                              flood-opacity="0"
                              result="BackgroundImageFix"
                            />
                            <feColorMatrix
                              in="SourceAlpha"
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                              result="hardAlpha"
                            />
                            <feOffset dy="4" />
                            <feGaussianBlur stdDeviation="2" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                            />
                            <feBlend
                              mode="normal"
                              in2="BackgroundImageFix"
                              result="effect1_dropShadow_230_418"
                            />
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="effect1_dropShadow_230_418"
                              result="shape"
                            />
                          </filter>
                        </defs>
                      </svg>
                    </a>

                    <Modal
                      isOpen={selectedVideo === item.url}
                      onClose={handleCloseModal}
                      link={item.url}
                    />

                    <div className="lg:py-8 px-5  lg:px-10 flex-1 flex flex-col items-start justify-center text-black gap-5 ">
                      <div className="w-full flex items-center justify-between">
                        <p className="uppercase rounded-full bg-[#00C2FF] text-white shadow-2xl px-4 py-2">
                          Cliente
                        </p>
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="34"
                            height="29"
                            viewBox="0 0 34 29"
                            fill="none"
                          >
                            <path
                              d="M32.7155 5.74162L29.5824 2.24328C28.2847 0.796405 26.5444 0 24.6828 0C22.8211 0 21.0848 0.796406 19.7871 2.24536L16.2316 6.21071L12.7004 2.25579C11.6089 1.02991 10.1374 0.354421 8.56279 0.352336C6.98414 0.352336 5.51465 1.02365 4.42112 2.24328L1.28404 5.74162C-0.428013 7.65133 -0.428013 10.6431 1.28404 12.5528L13.6888 26.3919L15.3685 28.2641C15.789 28.7331 16.3812 29 17.0018 29C17.311 29 17.6142 28.9333 17.8932 28.8082C18.1701 28.6831 18.4228 28.4976 18.635 28.2641L32.7175 12.5528C34.4275 10.6431 34.4275 7.65133 32.7175 5.74162H32.7155ZM16.9997 22.7163L4.85974 9.16909C4.8557 9.15658 4.8557 9.13781 4.85974 9.12531L7.95841 5.66657L7.98267 5.64155C8.15246 5.45183 8.34449 5.35593 8.55672 5.35593C8.76896 5.35593 8.96099 5.45392 9.1328 5.64364L20.6907 18.4695C20.7109 18.4925 20.7291 18.5154 20.7452 18.5362L16.9997 22.7163ZM29.1418 9.16909L24.8101 14.0017L23.5266 12.6695L20.2925 9.05025L23.3487 5.64155C23.7226 5.22459 24.1835 5.00359 24.6828 5.00359C25.182 5.00359 25.6429 5.22459 26.0168 5.64155C26.0391 5.66449 26.0593 5.6895 26.0815 5.71035L29.1418 9.12739C29.1418 9.1399 29.1418 9.15658 29.1418 9.16909Z"
                              fill="#022C5E"
                            />
                          </svg>
                        </div>
                      </div>

                      <div>
                        <h1 className="text-3xl lg:text-2xl xl:text-3xl text-[#022C5E] ">
                          {item.title}
                        </h1>
                        <h1 className="!text-5xl lg:!text-4xl xl:!text-5xl text-[#022C5E] font-bold">
                          {item.strong}
                        </h1>
                      </div>
                      <p className="text-base lg:text-lg xl:text-2xl text-[#022C5E] font-light">
                        {item.text}
                      </p>
                      <p className="text-base lg:text-lg xl:text-2xl text-[#022C5E] font-light">
                        {item.text2}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className=" w-full  flex items-center justify-center ">
            <Botao style2={true} />
          </div>
          <div className=" mx-auto arrow-container  ">
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
