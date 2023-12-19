import Audiovisual from "./Pages/audiovisual/audiovisual";
import Banner from "./Pages/banner";
import Beneficios from "./Pages/beneficios/beneficios";
import Carousel from "./Pages/carousel/Carousel";
import Footer from "./Pages/footer/Footer";
import Jornada from "./Pages/jornada/Jornada";
import Pensamento from "./Pages/pensamento/Pensamento";
import Testimonials from "./Pages/testimonials/Testimonial";
import Virtual from "./Pages/virtual/Virtual";

function App() {
  return (
    <>
      <Banner />
      <Carousel />
      <Virtual />
      <Beneficios />
      <Pensamento />
      <Audiovisual />
      <Testimonials />
      <Jornada />
      <Footer />
    </>
  );
}

export default App;
