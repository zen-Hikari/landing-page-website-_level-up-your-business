import { useEffect } from "react";
import luxy from "luxy.js";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Brand from "./components/Brand";
import Service1 from "./components/Service-1";
import Service2 from "./components/Service-2";
import Service3 from "./components/Service-3";
import Service4 from "./components/Service-4";
import MainService from "./components/Main-Service";
import Testimonial from "./components/Testimonial";
import Testimonial2 from "./components/Testimonial-2";
import Talk from "./components/Lets-talk";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    // Inisialisasi Luxy.js hanya untuk layar besar
    if (window.innerWidth > 768) {
      luxy.init({
        wrapper: "#luxy",
        wrapperSpeed: 0.03,
      });
    }

    // Inisialisasi AOS
    AOS.init({
      duration: 700,
      offset: 100,
    });

    // Memastikan AOS tetap mendeteksi scroll dalam Luxy.js
    const handleScroll = () => {
      AOS.refresh();
    };

    document.querySelector("#luxy")?.addEventListener("scroll", handleScroll);

    return () => {
      document
        .querySelector("#luxy")
        ?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main id="luxy">
      <Navbar />
      <Hero />
      <Brand />
      <Service1 />
      <Service2 />
      <Service3 />
      <Service4 />
      <MainService />
      <Testimonial />
      <Testimonial2 />
      <Talk />
      <Footer />
    </main>
  );
}

export default App;
