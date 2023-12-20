import Image from "../../assets/img-2.svg";
import { Botao } from "../../components/Botao";

const info = [
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 25 26" fill="none"><g clip-path="url(#clip0_170_399)"><path d="M17.5712 12.8133C16.4254 13.9742 11.9665 17.4597 11.9665 17.4597M17.5712 12.8133C20.6283 9.7157 20.6283 7.65063 20.6283 4.55302C17.5712 4.55302 15.5331 4.55302 12.476 7.65063M17.5712 12.8133L18.0689 15.3348C18.3946 16.9849 17.8849 18.6907 16.7105 19.8805L15.4453 21.1625C14.9786 21.6354 14.195 21.5242 13.8745 20.9396L11.9665 17.4597M12.476 7.65063L7.8903 13.3296M12.476 7.65063L9.98742 7.14632C8.35894 6.81631 6.67543 7.33279 5.50111 8.52266L4.23587 9.80465C3.76918 10.2775 3.87894 11.0715 4.45588 11.3963L7.8903 13.3296M7.8903 13.3296L11.9665 17.4597M16.0426 9.19993L15.0236 10.2325M3.30462 22.1061L6.80267 21.3972C7.73134 21.209 8.39982 20.3828 8.39982 19.4232L8.39982 18.9565C8.39982 17.8447 7.51030 16.9434 6.41302 16.9434L5.95245 16.9434C5.00538 16.9434 4.18997 17.6208 4.00423 18.5617L3.30462 22.1061Z" stroke="#022C5E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_170_399"><rect width="24.457" height="24.7808" fill="white" transform="translate(0.247505 0.422913)"/></clipPath></defs></svg>',
    text: "Planejamento de performance e impulsionamento de conteúdos;",
  },
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 25 26" fill="none"><path d="M19.105 20.4543H20.6283C21.7539 20.4543 22.7345 19.5002 22.377 18.4187C21.832 16.7707 20.4913 15.774 18.1344 15.4288M15.0237 12.0541C15.3202 12.149 15.6599 12.194 16.0426 12.194C17.741 12.194 18.5902 11.309 18.5902 9.09638C18.5902 6.88381 17.741 5.99878 16.0426 5.99878C15.6599 5.99878 15.3202 6.04373 15.0237 6.13871M9.92838 15.2916C13.6464 15.2916 15.6114 16.3543 16.2825 18.4798C16.615 19.5331 15.6567 20.4543 14.5521 20.4543H5.30462C4.20005 20.4543 3.24173 19.5331 3.57431 18.4798C4.2454 16.3543 6.21036 15.2916 9.92838 15.2916ZM9.92838 12.194C11.6268 12.194 12.476 11.309 12.476 9.09638C12.476 6.88381 11.6268 5.99878 9.92838 5.99878C8.22998 5.99878 7.38078 6.88381 7.38078 9.09638C7.38078 11.309 8.22998 12.194 9.92838 12.194Z" stroke="#022C5E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    text: "Consultoria de mídia e imprensa;",
  },
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 25 26" fill="none"><path d="M15.4389 17.3898H9.34489M14.9311 10.1621C14.9311 8.73643 13.7943 7.58073 12.3919 7.58073M6.29786 10.1621C6.29786 12.4552 7.52337 14.4573 9.34489 15.5285V20.0525C9.34489 21.4332 10.4642 22.5525 11.8449 22.5525H12.9389C14.3197 22.5525 15.4389 21.4332 15.4389 20.0525V15.5285C17.2605 14.4573 18.486 12.4552 18.486 10.1621C18.486 6.74055 15.7576 3.96686 12.3919 3.96686C9.02626 3.96686 6.29786 6.74055 6.29786 10.1621Z" stroke="#022C5E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    text: "Planejamento de campanha anual de marketing: ",
  },
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 25 25" fill="none"><path d="M12.3919 7.56318C10.8089 5.4193 6.09855 5.31534 2.23515 6.35046V20.4581C4.97155 19.156 9.90157 18.7374 12.3919 20.9105M12.3919 7.56318V20.9105M12.3919 7.56318C13.975 5.4193 18.6853 5.31534 22.5487 6.35046V20.4581C19.8123 19.156 14.8823 18.7374 12.3919 20.9105" stroke="#022C5E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    text: "Rebranding de marca (profissional ou clínica);",
  },
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 25 26" fill="none"><path d="M9.38724 11.1579C9.75054 10.9136 10.0133 10.7499 9.77677 10.04C9.54022 9.33007 9.35924 8.70552 8.78804 9.56879C7.9494 10.837 9.59697 13.2305 11.1419 14.5892C12.6869 15.9479 15.2888 17.2914 16.4247 16.2846C17.1979 15.5989 16.5587 15.5022 15.8281 15.3616C15.0974 15.221 14.9716 15.505 14.7799 15.9002M21.8714 12.8133C21.8714 17.9456 17.7382 22.1061 12.6395 22.1061C10.958 22.1061 9.38149 21.6536 8.0236 20.8629L3.40765 22.1061L4.81659 17.7499C3.92391 16.3196 3.40765 14.6272 3.40765 12.8133C3.40765 7.68104 7.54091 3.52051 12.6395 3.52051C17.7382 3.52051 21.8714 7.68104 21.8714 12.8133Z" stroke="#022C5E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    text: "Endomarketing especializado;",
  },
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 25 26" fill="none"><path d="M14.0644 14.6339L19.8199 20.4273M10.0752 16.2972C13.191 16.2972 15.7169 13.7547 15.7169 10.6183C15.7169 7.48188 13.191 4.93933 10.0752 4.93933C6.95932 4.93933 4.43344 7.48188 4.43344 10.6183C4.43344 13.7547 6.95932 16.2972 10.0752 16.2972Z" stroke="#022C5E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    text: "Pesquisa de mercado completa.",
  },
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 25 26" fill="none"><path d="M17.1102 7.47287H17.1204M8.32461 20.6893H16.45C18.6938 20.6893 20.5127 18.8402 20.5127 16.5592V8.2989C20.5127 6.01789 18.6938 4.16876 16.45 4.16876H8.32461C6.08084 4.16876 4.2619 6.01789 4.2619 8.2989V16.5592C4.2619 18.8402 6.08084 20.6893 8.32461 20.6893ZM16.1961 12.429C16.1961 14.5675 14.4908 16.301 12.3873 16.301C10.2838 16.301 8.57853 14.5675 8.57853 12.429C8.57853 10.2906 10.2838 8.55703 12.3873 8.55703C14.4908 8.55703 16.1961 10.2906 16.1961 12.429Z" stroke="#022C5E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    text: "Criação de conteúdo para as redes sociais;",
  },
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 25 26" fill="none"><path d="M21.8457 10.9641L12.6138 5.80139L3.3819 10.9641L6.4592 12.685M21.8457 10.9641L18.7684 12.685M21.8457 10.9641V10.9641C22.4746 11.2806 22.8715 11.9246 22.8715 12.6287V18.1916M6.4592 12.685L12.6138 16.1267L18.7684 12.685M6.4592 12.685V18.8802L12.6138 22.3219L18.7684 18.8802L18.7684 12.685" stroke="#022C5E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    text: "Treinamento exclusivo para profissionais",
  },
];

export const Section2 = () => {
  return (
    <section className="bg-[#0B6FE0] lg:rounded-b-[40px]  py-20 lg:py-32 px-5 lg:px-0">
      <div className="m-auto container ">
        <div className="grid lg:grid-cols-1 xl:grid-cols-3 items-center gap-10">
          <div className="flex flex-col  gap-5 ">
            <img src={Image} alt="" className="lg:w-[60%] xl:w-full" />
            <p className="text-2xl text-left font-light 2xl:leading-7 text-[#F4F4F4]  ">
              A BMouse tem a solução ideal para você aumentar a quantidade de
              consultas, na mesma proporção que aumenta o valor cobrado por
              elas, e vamos te explicar como.
            </p>

            <Botao style2={true} />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:col-span-3 xl:col-span-2 gap-5">
            {info.map((item, index) => {
              return (
                <div
                  data-aos="zoom-in"
                  className="flex gap-1 items-center  2xl:h-[80px]"
                  key={index}
                >
                  <div className="bg-[#00FFFF] h-[65px] w-[65px] flex items-center justify-center rounded-full">
                    <div dangerouslySetInnerHTML={{ __html: item.icon }} />
                  </div>
                  <div className="bg-[#022C5E] h-[70px] 2xl:h-[60px] rounded-full px-4 flex items-center justify-center flex-1">
                    <p className="font-light lg:text-lg xl:text-[15px] xl:leading-5 2xl:text-base text-center text-[#FFF]">
                      {item.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <hr className="my-10 lg:hidden" />
      </div>
    </section>
  );
};
