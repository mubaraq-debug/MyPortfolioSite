import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import dummy from "../assets/dummyImage.png";
import ProjectBox from "./defaults/ProjectBox";

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
          image={dummy}
          title="lagos website"
          link="https://www.google.com"
          descr="lorem ipsum"
          data-aos="flip-left" // Individual project animation
        />
        <ProjectBox
          image={dummy}
          title="lagos website"
          link="https://www.google.com"
          descr="lorem ipsum"
          data-aos="flip-left"
        />
        <ProjectBox
          image={dummy}
          title="lagos website"
          link="https://www.google.com"
          descr="lorem ipsum"
          data-aos="flip-left"
        />
        <ProjectBox
          image={dummy}
          title="lagos website"
          link="https://www.google.com"
          descr="lorem ipsum"
          data-aos="flip-left"
        />
        <ProjectBox
          image={dummy}
          title="lagos website"
          link="https://www.google.com"
          descr="lorem ipsum"
          data-aos="flip-left"
        />
        <ProjectBox
          image={dummy}
          title="lagos website"
          link="https://www.google.com"
          descr="lorem ipsum"
          data-aos="flip-left"
        />
        <ProjectBox
          image={dummy}
          title="lagos website"
          link="https://www.google.com"
          descr="lorem ipsum"
          data-aos="flip-left"
        />
        <ProjectBox
          image={dummy}
          title="lagos website"
          link="https://www.google.com"
          descr="lorem ipsum"
          data-aos="flip-left"
        />
      </div>
    </div>
  );
};

export default Projects;
