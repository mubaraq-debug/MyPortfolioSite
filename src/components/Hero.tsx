import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import image from "../assets/hero-image.png";
import "../Hero.css";

const Hero: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: "ease-in-out", // Easing function
      once: false, // Animations happen only once
    });
  }, []);

  return (
    <div
      className="mx-auto max-w-[1200px] px-5 py-3 flex flex-col md:flex-row items-start md:items-center gap-5 md:gap-10 justify-center"
      data-aos="fade-in" // Animate the entire Hero section on scroll
    >
      {/* Left Section */}
      <div
        className="left flex-[1] md:flex-[0.5] flex flex-col gap-5 pt-14 md:pt-0"
        data-aos="fade-right" // Fades the text in from the right
      >
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

      {/* Right Section */}
      <div
        className="right hidden flex-[0] md:flex md:flex-[0.5]"
        data-aos="zoom-in" // Zooms the image in
      >
        <img src={image} alt="hero-image" />
      </div>
    </div>
  );
};

export default Hero;
