import BannerButton from "../../Components/BannerButton";

const Beneficios = () => {
  return (
    <div className="">
      <div className="mx-auto flex flex-col items-center justify-center ">
        <div className="">
          <img src="/Vector.png" />
        </div>
        <div className="text-center">
          <h1 className="text-4xl lg:text-6xl">
            Benefícios <br />{" "}
          </h1>
          <div className="">
            <h1 className="text-6xl mx-auto lg:text-8xl">
              {" "}
              Realidade virtual{" "}
            </h1>
          </div>
          <div className="mx-auto text-center w-1/2 lg:w-1/2  mt-5">
            <BannerButton text="Para sua empresa" />
          </div>
        </div>
        <div className="relative mt-5">
          <p className="container px-6 text-center lg:max-w-5xl font-extralight">
            A Realidade Virtual oferece uma abordagem inovadora para destacar
            sua empresa no mercado, proporcionando aos clientes experiências
            imersivas à distância. O uso de vídeos em VR amplia a presença
            global, elimina barreiras físicas e reduz custos com viagens e
            espaço em eventos.{" "}
            <span className="font-bold">
              A Realidade Virtual conecta sua empresa com o futuro!
            </span>
          </p>
        </div>

        <div className="container flex gap-4 flex-wrap justify-center">
          {[
            { image: "/$.png", title: "Redução de custo" },
            { image: "/rocket-launch.png", title: "Expansão de Mercado" },
            { image: "/AR.png", title: "Experiências imersivas" },
            { image: "/emoji-happy.png", title: "Engajamento do cliente" },
            { image: "/bulb.png", title: "Inovação e diferenciação" },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row gap-4 items-center rounded-3xl bg-[#0F1925] p-4 mt-5"
            >
              <div className="bg-[#33F1DD] rounded-full  items-center p-4">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="md:mx-auto items-center text-center md:text-left">
                <h2 className="text-white text-lg font-bold">{item.title}</h2>
              </div>
            </div>
          ))}
        </div>

        <img src="/down.png" className="mt-10 moving-image" />
      </div>
    </div>
  );
};

export default Beneficios;
