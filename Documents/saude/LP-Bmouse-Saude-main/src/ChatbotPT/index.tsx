import { useState, useEffect, useRef } from "react";
import {
  Button,
  /*  IconButton, */
  Radio,
  SpeedDial,
  SpeedDialHandler,
} from "@material-tailwind/react";
import { PlusIcon } from "@heroicons/react/24/outline";
import { Input } from "@material-tailwind/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../assets/logo.svg";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";

// Defina os tipos para Pergunta e HistoricoItem
type Pergunta = {
  pergunta: string;
  opcoes: Opcao[];
};

type Opcao = {
  texto: string;
  baseDePerguntas?: Pergunta[]; // Agora pode conter uma lista de perguntas
  proximaPergunta?: number; // Ou apenas o índice da próxima pergunta
  linkExterno?: string; // Adicione um campo para link externo, se aplicável
};

type HistoricoItem = {
  pergunta: string;
  resposta: string;
};
//base de perguntas

const chat: Pergunta[] = [
  {
    pergunta: "Olá, selecione a opção abaixo para falar conosco:",
    opcoes: [
      {
        texto: "WhatsApp",
        linkExterno:
          "https://wa.me/5534997650527?text=Ol%C3%A1%21+Vim+pelo+Site+e+gostaria+de+um+or%C3%A7amento%21",
      },
      // Outras opções aqui, se necessário...
    ],
  },
  // Outras perguntas e opções aqui...
];

export const Chatbot = () => {
  //botoes
  const [isButtonVisible, setIsButtonVisible] = useState(true);
  const [isCardVisible, setIsCardVisible] = useState(false);

  //verificacao
  const [resultado, setResultado] = useState("");
  const [numeroAleatorio, setNumeroAleatorio] = useState(getRandomInt(1, 5));
  const [numeroAleatorio2, setNumeroAleatorio2] = useState(getRandomInt(1, 5));
  const [resposta, setResposta] = useState("");
  const [isRespostaCorreta, setIsRespostaCorreta] = useState(false);
  const [radioMarcado, setRadioMarcado] = useState(false);

  const [mensagem, setMensagem] = useState("");
  const [perguntaAtual, setPerguntaAtual] = useState<Pergunta | null>(null);
  const [historicoPerguntas, setHistoricoPerguntas] = useState<HistoricoItem[]>(
    []
  );
  /* const [progressoCompleto, setProgressoCompleto] = useState(false); */

  const [historico, setHistorico] = useState<
    { pergunta: Pergunta; opcao: Opcao }[]
  >([]);

  const [mostrarMensagemVoltar, setMostrarMensagemVoltar] = useState(false);
  const [, setMostrarBotaoVoltar] = useState(false);

  const chatContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Inicialize o chat com a primeira pergunta
    setPerguntaAtual(chat[0]);
  }, []);

  const handleOptionSelect = (opcao: Opcao) => {
    const { texto, linkExterno, baseDePerguntas } = opcao;

    // Adicione a pergunta atual e a resposta selecionada ao histórico
    setHistoricoPerguntas([
      ...historicoPerguntas,
      {
        pergunta: perguntaAtual!.pergunta,
        resposta: texto,
      },
    ]);

    // Se houver linkExterno, redirecione para ele
    if (linkExterno) {
      window.open(linkExterno, "_blank");
    } else if (baseDePerguntas) {
      // Se houver baseDePerguntas, avance para a próxima pergunta
      const proximaPergunta = baseDePerguntas[0];

      if (!proximaPergunta) {
        // Verifique se não há mais perguntas na base
        setPerguntaAtual(chat[0]);
        setMensagem("");
        /*   setProgressoCompleto(true); */ // Todas as perguntas foram respondidas
      } else {
        // Salve a pergunta atual e opção no histórico
        setHistorico([...historico, { pergunta: perguntaAtual!, opcao }]);
        setPerguntaAtual(proximaPergunta);
        setMostrarBotaoVoltar(true); // Mostrar o botão de voltar
        setMensagem(""); // Limpe a mensagem
      }
    }
  };

  const handleVoltar = () => {
    // Verifique se há perguntas no histórico para voltar
    if (historico.length > 0) {
      const { pergunta } = historico.pop()!;
      setPerguntaAtual(pergunta);
      setHistorico([...historico]);
      setMostrarMensagemVoltar(true);

      // Role o chat para o final ao mostrar a mensagem de volta
      if (chatContainerRef.current) {
        chatContainerRef.current.scrollIntoView({ behavior: "smooth" });
      }

      // Limpe a mensagem de volta após um período de tempo
      setTimeout(() => {
        setMensagem("");
        setMostrarMensagemVoltar(false);
        if (chatContainerRef.current) {
          chatContainerRef.current.scrollIntoView({ behavior: "smooth" });
        }
      }, 0);
    }
  };

  useEffect(() => {
    // Role o chat para o final sempre que uma nova mensagem for adicionada
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [historicoPerguntas]);

  const opcoes =
    perguntaAtual &&
    perguntaAtual.opcoes.map((opcao, index) => (
      <button
        key={index}
        onClick={() => handleOptionSelect(opcao)}
        className="bg-[#036735] h-[60px] lg:h-[80px] flex items-center justify-center p-3 lg:p-5 rounded-xl text-white text-sm lg:text-lg shadow-2xl"
      >
        {opcao.texto}
      </button>
    ));

  // Mensagem a ser exibida quando todas as perguntas forem respondidas
  /* const mensagemFinal =
    progressoCompleto && historico.length === 0 ? (
      <div className="bg-gray-300 p-2 rounded-md mt-2">
        O problema foi resolvido? (Sim / Não)
      </div>
    ) : null; */

  //gera numeros aleatorios
  function getRandomInt(min: number, max: number): number {
    min = Math.ceil(min); // Arredonda para cima para incluir o valor mínimo
    max = Math.floor(max); // Arredonda para baixo para excluir o valor máximo
    return Math.floor(Math.random() * (max - min)) + min;
  }

  // abrir o chat
  const handleButtonClick = () => {
    setIsButtonVisible(false);
    setIsCardVisible(true);
  };

  // fechar o chat
  const handleButtonClose = () => {
    setIsButtonVisible(true);
    setIsCardVisible(false);
    setIsRespostaCorreta(false);
    setNumeroAleatorio(getRandomInt(1, 5));
    setNumeroAleatorio2(getRandomInt(1, 5));
    setResposta("");
    setResultado("");
    /*  setHistoricoPerguntas([]); */
  };

  const handleRadioChange = () => {
    setRadioMarcado(!radioMarcado); // Inverte o valor do estado
  };

  //verificar se o usuario nao e bot
  const verification = () => {
    if (radioMarcado) {
      if (parseInt(resultado) === numeroAleatorio + numeroAleatorio2) {
        setResposta(`Resposta correta!`);
        setNumeroAleatorio(getRandomInt(1, 5));
        setNumeroAleatorio2(getRandomInt(1, 5));
        setIsRespostaCorreta(true);
        setResultado("");
      } else {
        setResposta("Resposta incorreta. Tente novamente.");
        setTimeout(() => {
          setResposta("");
        }, 1000);
        setNumeroAleatorio(getRandomInt(1, 5));
        setNumeroAleatorio2(getRandomInt(1, 5));
        setIsRespostaCorreta(false);
        setResultado("");
      }
    } else {
      // O rádio não está marcado, você pode fazer algo aqui, como mostrar uma mensagem de erro.
      alert("Você deve aceitar os termos para continuar.");
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setResultado(event.target.value);
  };

  if (isRespostaCorreta) {
    return (
      /*   <div className="absolute bottom-3 right-3  w-[80%] h-[500px]  lg:w-[500px] lg:h-[700px] rounded-xl flex flex-col shadow-2xl border-2 "> */
      <div className="fixed bottom-3 right-3 bg-[#e3e2e2]  w-[80%] max-w-[500px] max-h-[700px] h-[500px] sm:w-[60%] md:w-[50%] lg:w-[45%] xl:w-[35%]  2xl:w-[30%] lg:h-[600px] 2xl:h-[650px] rounded-xl flex flex-col shadow-2xl border-2 ">
        <header className="bg-[#000000] h-[80px] p-5 flex justify-between rounded-t-xl sticky top-0  shadow-2xl ">
          <img src={Logo} alt="BMOUSE SAÚDE" className="w-[120px]" />
          <button onClick={handleButtonClose}>
            {" "}
            <PlusIcon className="h-7 w-7 text-red-700  transition-transform rotate-45" />
          </button>
        </header>

        <div className=" p-5 flex flex-col bg-[#e3e2e2] opacity-90 h-[500px] lg:h-[700px] overflow-x-auto justify-items-center  gap-5">
          <div className="historico">
            {historicoPerguntas.map((item, index) => (
              <div
                key={index}
                className="historico-item flex flex-col overflow-x-hidden gap-5"
              >
                <p className="text-base lg:text-xl !text-[#616161] bg-white p-3 lg:p-5 rounded-t-2xl rounded-be-none rounded-br-2xl mt-5 ">
                  {item.pergunta}
                </p>
                <p className="text-base lg:text-lg bg-[#036735] p-3 lg:p-5 rounded-t-2xl rounded-s-2xl !text-[#ffffff]  self-end ">
                  {item.resposta}
                </p>
              </div>
            ))}
          </div>
          {/* <h1 className="text-base lg:text-xl bg-white p-5 rounded-t-2xl rounded-be-none rounded-br-2xl">
            {perguntaAtual?.pergunta}
          </h1> */}
          <h1 className="text-base lg:text-xl bg-white !text-[#616161] p-3 lg:p-5 rounded-t-2xl rounded-be-none rounded-br-2xl shadow-2xl ">
            {perguntaAtual?.pergunta}
          </h1>
          {mensagem && <p>{mensagem}</p>}
          <div className="grid grid-cols-2 gap-5 text-base !text-[#ffffff] lg:text-xl w-full">
            {opcoes}
          </div>
          {mostrarMensagemVoltar && (
            <div className="bg-green-200 p-2 rounded-lg">{mensagem}</div>
          )}
          {/* Exiba a mensagem final, se aplicável */}
          <div ref={chatContainerRef} />
        </div>

        <footer className="text-center text-sm lg:text-base bg-black text-white h-[80px] w-full p-5 rounded-b-xl">
          {historico.length > 0 && (
            <Button
              size="lg"
              onClick={handleVoltar}
              className="bg-[#036735] text-sm lg:text-base  p-2 lg:px-3 lg:py-3 rounded-md text-white  flex gap-2 justify-between items-center "
            >
              <FontAwesomeIcon icon={faChevronLeft} className="text-sm " />
              Voltar ao menu anterior
            </Button>
          )}
        </footer>
        {/*  <footer className="bg-[#ac3939] h-[80px] px-5 py-3 flex justify-start sticky bottom-0 rounded-b-xl  shadow-2xl">
          {historico.length > 0 && (
            <Button
              color="green"
              size="lg"
              onClick={handleVoltar}
              className="text-sm lg:text-base  p-2 lg:px-3 lg:py-2 rounded-md text-white  flex gap-2 justify-between items-center "
            >
              <FontAwesomeIcon icon={faChevronLeft} className="text-sm" />
              Voltar ao menu anterior
            </Button>
          )}
        </footer> */}
      </div>
    );
  }

  return (
    <>
      {isButtonVisible && (
        /*         <div className="absolute bottom-3 right-3  rounded-full border-2 w-[65px] h-[65px] flex items-center justify-center bg-white"> */
        <div className="fixed bottom-3 right-3 cursor-pointer ">
          <SpeedDial>
            <SpeedDialHandler onClick={handleButtonClick}>
              <FontAwesomeIcon
                icon={faCommentDots}
                className="text-5xl text-[#00FFFF] shadow-2xl "
                /*   className="rounded-full text-3xl md:text-4xl bg-white  p-3 md:p-4 border-2 border-blue-gray-50 shadow-xl cursor-pointer " */
              />
              {/* <IconButton
                color="white"
                size="lg"
                className="rounded-full border border-blue-gray-50 shadow-xl"
              >
                <PlusIcon className="h-5 w-5 transition-transform group-hover:rotate-45" />
              </IconButton> */}
            </SpeedDialHandler>
          </SpeedDial>
        </div>
      )}

      {isCardVisible && (
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          className="fixed bottom-3 right-3 bg-[#e3e2e2] w-[80%] max-w-[500px] max-h-[700px] h-[500px] sm:w-[60%] md:w-[50%] lg:w-[45%] xl:w-[35%]  2xl:w-[30%] lg:h-[600px] 2xl:h-[650px] rounded-xl flex flex-col shadow-2xl border-2 "
        >
          <header className="bg-[#000000] h-[80px] p-5 flex justify-between rounded-t-xl sticky top-0  shadow-xl">
            <img src={Logo} alt="BMOUSE SAÚDE" className="w-[120px]" />
            <button onClick={handleButtonClose}>
              {" "}
              <PlusIcon className="h-7 w-7 text-red-700  transition-transform rotate-45" />
            </button>
          </header>
          <div className="h-[500px] lg:h-[700px] bg-[#e3e2e2] p-5 text-center flex flex-col gap-5 justify-between py-5 lg:py-10 overflow-x-auto">
            <h1 className="text-base lg:text-xl text-[#616161]">
              Por razões de segurança, por favor responda a questão abaixo para
              continuar o processo
            </h1>
            <p className="text-base lg:text-xl text-[#616161]">
              Qual o resultado de {numeroAleatorio} + {numeroAleatorio2} ?
            </p>
            {/* <Input label="Input Error"  error /> */}
            <div className="w-full">
              <Input
                label="Digite o resultado"
                type="number"
                size="lg"
                value={resultado}
                onChange={handleInputChange}
                crossOrigin={undefined}
                className=" shadow-2xl text-[#616161]"
              />
            </div>

            <div className=" ">
              <label className="text-[#616161] text-xs md:text-base">
                <Radio
                  name="terms"
                  required
                  crossOrigin={undefined}
                  checked={radioMarcado}
                  onChange={handleRadioChange}
                />{" "}
                Para melhor lhe atender precisaremos guardar temporariamente as
                informações aqui fornecidas.
                <a
                  href="https://www.bmouseproductions.com/view/politica-de-privacidade/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-xs md:text-base text-blue-800"
                >
                  Leia a nossa política de privacidade
                </a>
              </label>
            </div>

            <button
              className="bg-[#036735] shadow-2xl p-2 lg:px-3 lg:py-3 w-full rounded-xl hover:opacity-90 text-white"
              onClick={verification}
            >
              Verificar
            </button>

            <div>
              <p
                className={
                  isRespostaCorreta ? "text-green-900" : "text-red-700 pb-5"
                }
              >
                {resposta}
              </p>
            </div>
          </div>
          <footer className="text-center text-sm lg:text-base bg-black text-white h-[80px] w-full p-5 rounded-b-xl">
            <p>
              Desenvolvido por{" "}
              <a
                href="https://www.bmouseproductions.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Bmouse Productions
              </a>
            </p>
          </footer>
          {/*       <footer className="bg-[#a83737] h-[60px]  p-3 flex justify-between sticky bottom-0 rounded-b-xl  shadow-2xl">
            {historico.length > 0 && (
              <button
                onClick={handleVoltar}
                className="bg-[#006131] text-sm lg:text-base p-2 lg:px-3 lg:py-2 rounded-md text-white items-end"
              >
                Voltar ao menu anterior
              </button>
            )}
          </footer> */}
        </div>
      )}
    </>
  );
};

/* 
text-center p-5 flex flex-col bg-[#e0e0e0] opacity-90 h-[500px] lg:h-[700px] overflow-x-auto justify-items-center gap-5 */
