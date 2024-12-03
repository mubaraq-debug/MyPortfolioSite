import React from "react";
import image from "../assets/hero-image.png";
import "../Hero.css";

const Hero: React.FC = () => {
  return (
    <div className="mx-auto max-w-[1200px] px-5 py-3 flex flex-col md:flex-row items-start md:items-center gap-5 md:gap-10 justify-center">
      <div className="left flex-[1] md:flex-[0.5] flex flex-col gap-5 pt-14 md:pt-0">
        <small className="uppercase font-light text-lg md:text-xl tracking-widest text-white">
          <span className="text-4xl">👋🏽</span>, welcome to my world
        </small>
        <h1 className="text-3xl md:text-6xl leading-normal font-bold text-white">
          Hi, I'm <span className="text-[#ff014f]">Mubaraq,</span> <br />
          <span className="text-[#ff014f] typewriter">a Software Engineer</span>
        </h1>
        <p className="md:w-[75%] text-white font-medium md:font-normal text-base md:text-xl">
          I'm a Software Engineer specializing in web and mobile app
          development, crafting innovative and user-centric digital solutions.
          Let’s bring ideas to life!
        </p>
      </div>
      <div className="right hidden flex-[0] md:flex md:flex-[0.5]">
        <img src={image} alt="hero-image" />
      </div>
    </div>
  );
};

export default Hero;
