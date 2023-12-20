import Logo from "../../assets/logo.svg";
import Saude from "../../assets/img.svg";
import Mobile from "../../assets/img-mb.svg";

import { Botao } from "../../components/Botao";
export const Section1 = () => {
  return (
    <section
      id="home"
      className="bg-header flex flex-col lg:flex-row items-center justify-center  lg:py-32 px-5 lg:px-0"
    >
      <div className="container m-auto ">
        <div className="flex flex-col items-center justify-center gap-10 lg:gap-5 lg:justify-evenly lg:items-start h-full lg:w-[55%] ">
          <img
            src={Logo}
            alt="logo bmouse"
            className="w-[100px] lg:w-[120px] xl:w-[150px] pt-20 lg:pt-0"
          />
          <img
            src={Saude}
            alt="logo bmouse"
            className="lg:w-[90%] 2xl:w-full  mx-auto"
          />
          <p className="lg:text-xl  xl:text-2xl text-center font-light 2xl:leading-7 text-[#F4F4F4] ">
            Busca aumentar o valor da sua consulta? Se livrar da dependência dos
            planos de saúde e planos odontológicos? a{" "}
            <strong className="font-semibold"> BMouse tem a solução</strong>{" "}
            ideal para você aumentar o volume de consultas na mesma proporção
            que aumenta o valor cobrado por elas, e vamos te explicar como:
          </p>
          <div className=" w-full  flex items-center justify-center ">
            <Botao />
          </div>
          <img
            src={Mobile}
            alt="Coração"
            className="block lg:hidden  mx-auto"
          />
        </div>
      </div>
    </section>
  );
};
