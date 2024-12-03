import React from "react";
import appdev from "../assets/appdev.png";
import webdev from "../assets/webdev.png";
import sysdev from "../assets/sysdeg.png";
import support from "../assets/support.png";
import BoxContainer from "./defaults/BoxContainer";

const WhatDo: React.FC = () => {
  return (
    <div id="services" className="mx-auto flex flex-col gap-5 md:gap-24 max-w-[1200px] px-5 pt-14 md:pt-24">
      <header className="text-left md:text-center font-semibold capitalize text-2xl md:text-4xl text-[#333333]">
        services
      </header>
      <div className="flex flex-col md:flex-row items-center justify-center gap-5 md:gap-7">
        <BoxContainer
          image={appdev}
          header="app development"
          text="I specialize in developing mobile applications, crafting seamless, intuitive, and scalable apps that deliver high-quality experiences on both Android and iOS platforms, ensuring smooth user interactions"
        />
        <BoxContainer
          image={webdev}
          header="web development"
          text="I design and build responsive, user-centric websites, utilizing modern web technologies to create engaging, functional, and high-performance digital experiences for users across all devices"
        />
        <BoxContainer
          image={sysdev}
          header="system design and architecture"
          text="I architect scalable, efficient systems, selecting the right technologies and designing robust structures that ensure seamless integration, high performance, and future-proof solutions tailored to your business needs"
        />
        <BoxContainer
          image={support}
          header="support and maintenance"
          text="I offer ongoing support and maintenance, fixing issues, updating software, and optimizing performance to ensure your applications run smoothly, remain secure, and adapt to evolving user needs and technology changes"
        />
      </div>
    </div>
  );
};

export default WhatDo;
