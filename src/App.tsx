import React from "react";
import Navbar from "./components/Navbar";
import styled from "styled-components";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import copy from './assets/copy.jpg'

const App = () => {
  return (
    <Container>
      <div className="top bg-[#333333] px-5 py-3 sticky top-0">
        <Navbar />
      </div>
      <HeroContainer>
        <Hero />
      </HeroContainer>
      <Footer />
    </Container>
  );
};

export default App;

const Container = styled.div`
  margin: 0 auto;
`;

const HeroContainer = styled.div`
  
    @media (max-width: 426px) {
      width: 100%;
      height: 70vh;
      background-image: url(${copy});
      background-size: cover;
      background-position: center;
      display: flex;
      align-items: center;
      justify-content: center;
    }

`;
