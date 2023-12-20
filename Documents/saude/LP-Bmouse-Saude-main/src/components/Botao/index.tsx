interface BotaoProps {
  style2?: boolean;
}

export const Botao = ({ style2 }: BotaoProps) => {
  return (
    <a
      href="https://bmouseproductions.com/view/atendimento/"
      target="_blank"
      className={`text-white text-center uppercase leading-7 px-6 py-3 rounded-full text-2xl xl:text-3xl 2xl:text-4xl font-light shadow-2xl ${
        style2 ? "bg-[#00FFFF]" : "bg-[#0B6FE0]"
      }`}
    >
      Entre em <strong className="font-bold">contato</strong>
    </a>
  );
};
