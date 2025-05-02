import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
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
      className="mx-auto max-w-[1200px] px-5 py-3 flex flex-col"
      data-aos="fade-in" // Animate the entire Hero section on scroll
    >
      <div
        className="left flex-[1] md:flex-[0.5] flex flex-col gap-5 pt-14 md:pt-0 md:my-20"
        data-aos="fade-right" // Fades the text in from the right
      >
        <small className="uppercase font-light text-lg md:text-xl tracking-widest text-white">
          <span className="text-4xl">👋🏽</span>, welcome to my world
        </small>
        <h1 className="text-3xl md:text-6xl leading-10 font-bold text-white">
          Hi, I'm <span className="text-[#ff014da4]">Mubaraq,</span> <br />
          <span className="text-[#ff014da4] typewriter">a Software Engineer</span>
        </h1>
        <p className="md:w-[75%] text-white font-normal text-base md:text-xl">
          I'm a Software Engineer specializing in web and mobile app
          development, crafting innovative and user-centric digital solutions.
          Let’s bring ideas to life!
        </p>
      </div>
    </div>
  );
};

export default Hero;
