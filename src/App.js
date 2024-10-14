import React from "react";
import { Element } from "react-scroll"; // react-scroll'den Element import ediyoruz
import Header from "./components/Header"; // Header'ı import et
import Home from "./components/Home"; // Home component'i
import About from "./components/About"; // About component'i
import Contact from "./components/Contact"; // Contact component'i
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import ScrollToTopButton from './ScrollToTopButton'; // Yukarı çık butonunu doğru bir şekilde içe aktarın

const App = () => {
  return (
    <div>
      <Header />
      {/* Home componentine scroll olabilmesi için bir id veriyoruz */}
      <Element name="home">
        <Home />
      </Element>
  
      <Element name="project">
        <Projects />
      </Element>
      <Element name="skill">
        <Skills />
      </Element>
   

      <Element name="about">
        <About />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
      <ScrollToTopButton /> {/* Yukarı çık butonunu buraya ekleyin */}
    </div>
  );
};

export default App;
