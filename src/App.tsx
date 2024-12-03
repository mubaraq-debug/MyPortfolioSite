import React from "react";
import Navbar from "./components/Navbar";
import styled from "styled-components";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import WhatDo from "./components/WhatDo";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/testimonials";
import Contact from "./components/Contact";
import bg from "./assets/bg5.jpg";
import { FaArrowCircleUp } from "react-icons/fa";
import { Link } from "react-scroll";

const App = () => {
  return (
    <Container>
      <div className="top-level">
        <div className="top bg-[#333333]/10 px-5 py-3">
          <Navbar />
        </div>
        <div>
          <Hero />
        </div>
      </div>
      <Skills />
      <WhatDo />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
      <div className="up fixed bottom-10 right-4 text-3xl md:text-5xl cursor-pointer text-[#ff014f]">
        <Link to='home' smooth={true} duration={500}>
          <FaArrowCircleUp />
        </Link>
      </div>
    </Container>
  );
};

export default App;

const Container = styled.div`
  margin: 0 auto;

  .top-level {
    width: 100%;
    height: 100%;
    background-image: url(${bg});
    background-size: cover;
    background-repeat: no-repeat;

    @media (max-width: 426px) {
      width: 100%;
      height: 85vh;
    }
  }
`;

// const HeroContainer = styled.div`
//   @media (max-width: 426px) {
//     width: 100%;
//     height: 70vh;
//     background-image: url(${copy});
//     background-size: cover;
//     background-position: center;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//   }
// `;
