import Image from "../../assets/section-8.svg";

import { Card, Input, Button, Typography } from "@material-tailwind/react";

import { Select, Option, Textarea } from "@material-tailwind/react";
import { Botao } from "../../components/Botao";

export const Section8 = () => {
  return (
    <section className="bg-white">
      <div className="m-auto container   py-20 lg:py-32 px-5 lg:px-0 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-10">
          <div className="flex flex-col items-center justify-center gap-5">
            <img src={Image} className="" />
            <div className="   flex items-center justify-center ">
              <Botao />
            </div>
          </div>

          <div>
            <Card
              className="bg-[#022C5E] flex flex-col items-center justify-center py-10 !text-white"
              shadow={false}
            >
              <Typography variant="h1">Contato</Typography>

              <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 mx-auto">
                <div className="mb-1 flex flex-col gap-6">
                  <Typography variant="h6" className="-mb-3">
                    Seu Nome
                  </Typography>
                  <Input
                    size="lg"
                    placeholder="nome"
                    className=" !border-t-blue-gray-200 focus:!border-white"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                    crossOrigin={undefined}
                  />
                  <Typography variant="h6" className="-mb-3">
                    Seu Email
                  </Typography>
                  <Input
                    size="lg"
                    placeholder="email@mail.com"
                    className=" !border-t-blue-gray-200 focus:!border-white"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                    crossOrigin={undefined}
                  />
                  <Typography variant="h6" className="-mb-3">
                    Área de atuação
                  </Typography>
                  <Select
                    label="               Área de atuação"
                    className="focus:border-white"
                  >
                    <Option>Material Tailwind HTML</Option>
                    <Option>Material Tailwind React</Option>
                    <Option>Material Tailwind Vue</Option>
                    <Option>Material Tailwind Angular</Option>
                    <Option>Material Tailwind Svelte</Option>
                  </Select>
                  <Typography variant="h6" className="-mb-3">
                    Mensagem
                  </Typography>
                  <Textarea label="  Mensagem" className="focus:border-white" />
                </div>

                <Button className="mt-6 bg-[#0080FF] ">Enviar</Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
