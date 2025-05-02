import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import ProjectBox from "./defaults/ProjectBox";
import dashr from '../assets/dashr.png'
import esusu from '../assets/esusu.png'
import serviceapart from '../assets/serviceapart.png'
const Projects: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  return (
    <div
      id="projects"
      className="mx-auto flex flex-col gap-10 md:gap-20 max-w-[1200px] px-5 pt-14 md:pt-32"
      data-aos="fade-up" // Animates the entire section on scroll
    >
      {/* Header */}
      <header
        className="text-left font-medium capitalize text-xl md:text-2xl text-[#333333]"
        data-aos="fade-down" // Header fades in from top
      >
        projects
      </header>

      {/* Project Boxes */}
      <div
        className="flex flex-col flex-wrap gap-7 md:gap-0 md:flex-row items-center justify-between"
        data-aos="zoom-in-up" // Boxes zoom in and move upwards
      >
        <ProjectBox
          image={dashr}
          title="Dashr App"
          link="http://greyarea.netlify.app"
          descr="A sleek fintech utility app for seamless transactions, built with Next.js and Styled Components."
          data-aos="flip-left" // Individual project animation
        />
        <ProjectBox
          image={esusu}
          title="Esusu Smart Solutions"
          link="https://www.esususmartsolutions.com/"
          descr="Esusu helps MSMEs and the unbanked save daily via USSD and POS."
          data-aos="flip-left"
        />
        <ProjectBox
          image={serviceapart}
          title="Service Apartment Ng"
          link="/"
          descr="A booking platform for shortlets, built with React, TypeScript, Tailwind CSS, and Firebase."
          data-aos="flip-left"
        />
      </div>
    </div>
  );
};

export default Projects;
