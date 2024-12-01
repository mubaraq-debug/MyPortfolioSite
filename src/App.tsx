import React from "react";
import Navbar from "./components/Navbar";
import styled from "styled-components";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

const App = () => {
  return (
    <Container>
      <div className="top bg-[#333333] px-5 py-3 sticky top-0">
        <Navbar />
      </div>
      <Hero />
      <Footer />
    </Container>
  );
};

export default App;


const Container = styled.div`
  margin: 0 auto;
`

