import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import ProjectBox from "./defaults/ProjectBox";
import dashr from '../assets/dashr.svg'
import viatour from '../assets/viatour.svg'
import ser from '../assets/ser.svg'

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
        className="text-left md:text-center font-semibold capitalize text-2xl md:text-4xl text-[#333333]"
        data-aos="fade-down" // Header fades in from top
      >
        projects
      </header>

      {/* Project Boxes */}
      <div
        className="flex flex-col flex-wrap md:flex-row items-center justify-center gap-5 md:gap-7"
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
          image={viatour}
          title="Viatours"
          link="https://viatours-template-git-dev-mubaraqdebugs-projects.vercel.app/"
          descr="A visually stunning landing page for a tour web app, built with ReactJS, TailwindCSS, and Styled Components."
          data-aos="flip-left"
        />
        <ProjectBox
          image={ser}
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
