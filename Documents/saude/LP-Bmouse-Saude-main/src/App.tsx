import { Chatbot } from "./ChatbotPT";
import { BtnUP } from "./components/BtnUp";

import { Footer } from "./components/Footer";
import { Section1 } from "./sections/Section1";
import { Section2 } from "./sections/Section2";
import { Section3 } from "./sections/Section3";
import { Section4 } from "./sections/Section4";
import { Section5 } from "./sections/Section5";
import { Section6 } from "./sections/Section6";
import { Section7 } from "./sections/Section7";
import { Section8 } from "./sections/Section8";

import AOS from "aos";
import "aos/dist/aos.css";
function App() {
  AOS.init({
    once: true,
    delay: 10, // values from 0 to 3000, with step 50ms
    duration: 1500, // values from 0 to 3000, with step 50ms
  });

  return (
    <>
      <div className="flex flex-col !justify-between ">
        <Section1></Section1>
        <Section2></Section2>
        <Section3></Section3>
        <Section4></Section4>
        <Section5></Section5>
        <Section6></Section6>
        <Section7></Section7>

        <Section8></Section8>

        <Footer></Footer>
        <div className="z-50">
          <BtnUP></BtnUP>
          <Chatbot></Chatbot>
        </div>
      </div>
    </>
  );
}

export default App;
