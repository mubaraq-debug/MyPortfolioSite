import React, { useState, useEffect } from "react";
import css from "../assets/css.png";
import html from "../assets/html.jpeg";
import js from "../assets/js.png";
import figma from "../assets/figma.png";
import git from "../assets/git.png";
import github from "../assets/github.png";
import react from "../assets/react.png";
import rn from "../assets/rn.png";
import sd from "../assets/sd.png";
import ts from "../assets/ts.png";
import tw from "../assets/tw.png";
import next from "../assets/next.png";
import SkillBox from "./defaults/SkillBox";

const Skills: React.FC = () => {
  const skills = [
    { image: html, name: "html" },
    { image: css, name: "css" },
    { image: js, name: "javascript" },
    { image: figma, name: "figma" },
    { image: git, name: "git" },
    { image: github, name: "github" },
    { image: react, name: "react js" },
    { image: rn, name: "react native" },
    { image: sd, name: "styled comp." },
    { image: ts, name: "typescript" },
    { image: tw, name: "tailwind" },
    { image: next, name: "next js" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 4) % skills.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [skills.length]);

  const displayedSkills = skills.slice(currentIndex, currentIndex + 4);

  return (
    <div id="technology" className="mx-auto flex flex-col gap-5 md:gap-14 max-w-[1200px] px-5 pt-14 md:pt-24">
      <header className="text-left md:text-center font-semibold capitalize text-2xl md:text-4xl text-[#333333]">
        technologies i use
      </header>
      <hr />
      <div className="skill-list flex items-start justify-between md:justify-center gap-2 md:gap-40 flex-wrap md:flex-nowrap">
        {displayedSkills.map((skill, index) => (
          <SkillBox key={index} image={skill.image} name={skill.name} />
        ))}
      </div>
      <hr />
    </div>
  );
};

export default Skills;
