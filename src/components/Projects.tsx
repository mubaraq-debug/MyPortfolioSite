import React from "react";
import dummy from "../assets/dummyImage.png";
import ProjectBox from "./defaults/ProjectBox";

const Projects: React.FC = () => {
  return (
    <div id="projects" className="mx-auto flex flex-col gap-10 md:gap-20 max-w-[1200px] px-5 pt-14 md:pt-32">
      <header className="text-left md:text-center font-semibold capitalize text-2xl md:text-4xl text-[#333333]">
        projects
      </header>
      <div className="flex flex-col flex-wrap md:flex-row items-center justify-center gap-5 md:gap-7">
        <ProjectBox image={dummy} title="lagos website" link="https://www.google.com" descr="lorem ipsum" />
        <ProjectBox image={dummy} title="lagos website" link="https://www.google.com" descr="lorem ipsum" />
        <ProjectBox image={dummy} title="lagos website" link="https://www.google.com" descr="lorem ipsum" />
        <ProjectBox image={dummy} title="lagos website" link="https://www.google.com" descr="lorem ipsum" />
        <ProjectBox image={dummy} title="lagos website" link="https://www.google.com" descr="lorem ipsum" />
        <ProjectBox image={dummy} title="lagos website" link="https://www.google.com" descr="lorem ipsum" />
        <ProjectBox image={dummy} title="lagos website" link="https://www.google.com" descr="lorem ipsum" />
        <ProjectBox image={dummy} title="lagos website" link="https://www.google.com" descr="lorem ipsum" />
      </div>
    </div>
  );
};

export default Projects;
