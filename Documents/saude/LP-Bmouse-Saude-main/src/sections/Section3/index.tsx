import Image from "../../assets/tom-beta.svg";
import { Botao } from "../../components/Botao";

export const Section3 = () => {
  return (
    <section className="bg-gradient">
      <div className="m-auto container  py-20 lg:py-32 px-5 lg:px-0">
        <div className="hidden lg:grid lg:grid-cols-2 items-center gap-10">
          <div className="flex flex-col gap-5 bg">
            <img src={Image} alt="Tom e Roberta" className=" xl:w-full" />
          </div>
          <div className="flex flex-col gap-5 relative z-50">
            <div className="flex items-center justify-between">
              <p className="border border-white rounded-full px-1 py-1 w-1/3 text-center text-lg text-white">
                SOBRE NÓS
              </p>
              <div>
                <svg
                  width="70"
                  height="59"
                  viewBox="0 0 70 59"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M67.3554 11.6812L60.905 4.56391C58.2333 1.62027 54.6502 0 50.8174 0C46.9847 0 43.4099 1.62027 40.7382 4.56815L33.4181 12.6356L26.1479 4.58936C23.9007 2.09533 20.8711 0.721064 17.6293 0.716822C14.3791 0.716822 11.3537 2.0826 9.1023 4.56391L2.64361 11.6812C-0.881203 15.5665 -0.881203 21.6531 2.64361 25.5384L28.1829 53.6938L31.6411 57.5027C32.5067 58.4571 33.7261 59 35.0036 59C35.6404 59 36.2646 58.8643 36.8389 58.6098C37.409 58.3553 37.9292 57.9778 38.3662 57.5027L67.3595 25.5384C70.8802 21.6531 70.8802 15.5665 67.3595 11.6812H67.3554ZM34.9995 46.216L10.0054 18.6543C9.99703 18.6289 9.99703 18.5907 10.0054 18.5653L16.385 11.5285L16.4349 11.4776C16.7845 11.0917 17.1798 10.8965 17.6168 10.8965C18.0537 10.8965 18.4491 11.0959 18.8028 11.4819L42.5984 37.5759C42.64 37.6226 42.6775 37.6692 42.7108 37.7116L34.9995 46.216ZM59.9978 18.6543L51.0796 28.4863L48.437 25.7759L41.7786 18.4126L48.0708 11.4776C48.8407 10.6293 49.7895 10.1797 50.8174 10.1797C51.8453 10.1797 52.7942 10.6293 53.5641 11.4776C53.6098 11.5243 53.6514 11.5752 53.6972 11.6176L59.9978 18.5695C59.9978 18.595 59.9978 18.6289 59.9978 18.6543Z"
                    fill="#00FFFF"
                  />
                </svg>
              </div>
            </div>

            <h1 className="text-7xl  text-white">
              Somos <br />{" "}
              <strong className="font-bold">Especialistas. </strong>
            </h1>
            <hr className="border-white " />
            <p className="lg:text-xl  xl:text-2xl text-left font-light 2xl:leading-7 text-[#F4F4F4] ">
              <strong className="font-semibold">A BMouse</strong> é muito mais
              do que uma agência de marketing. Somos uma agência de criatividade
              com um compromisso inabalável em levar a sua marca a novos
              patamares.
            </p>
            <p className="lg:text-xl  xl:text-2xl text-left font-light 2xl:leading-7 text-[#F4F4F4] ">
              <strong className="font-semibold">O nosso diferencial?</strong>{" "}
              Possuímos o{" "}
              <strong className="font-semibold">Studio BMouse</strong>, um
              espaço equipado com tecnologia de ponta, garantindo que cada
              conteúdo audiovisual produzido atenda aos mais altos padrões de
              qualidade.
            </p>
            <p className="lg:text-xl  xl:text-2xl text-left font-light 2xl:leading-7 text-[#F4F4F4] ">
              <strong className="font-semibold">
                Conte com a BMouse para fazer a diferença no mercado.
              </strong>
            </p>
            <div className=" w-full  flex items-center justify-center ">
              <Botao style2={true} />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:hidden items-center gap-10">
          <div className="flex flex-col gap-5 relative z-50">
            <p className="border border-white rounded-full px-1 py-1 w-1/3 text-center text-lg text-white">
              SOBRE NÓS
            </p>
            <h1 className="text-6xl text-white">
              Somos <br />{" "}
              <strong className="font-bold">Especialistas. </strong>
            </h1>
            <div className="flex flex-col gap-5 bg">
              <img
                src={Image}
                alt="Tom e Roberta"
                className="lg:w-[60%] xl:w-full"
              />
            </div>

            <p className="md:text-2xl text-left font-light text-[#F4F4F4] ">
              <strong className="font-semibold">A BMouse</strong> é muito mais
              do que uma agência de marketing. Somos uma agência de criatividade
              com um compromisso inabalável em levar a sua marca a novos
              patamares.
            </p>
            <p className="md:text-2xl text-left font-light text-[#F4F4F4] ">
              <strong className="font-semibold">O nosso diferencial?</strong>{" "}
              Possuímos o{" "}
              <strong className="font-semibold">Studio BMouse</strong>, um
              espaço equipado com tecnologia de ponta, garantindo que cada
              conteúdo audiovisual produzido atenda aos mais altos padrões de
              qualidade.
            </p>
            <p className="md:text-2xl text-left font-light text-[#F4F4F4] ">
              <strong className="font-semibold">
                Conte com a BMouse para fazer a diferença no mercado.
              </strong>
            </p>
          </div>
          <div className="mx-auto arrow-container">
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
