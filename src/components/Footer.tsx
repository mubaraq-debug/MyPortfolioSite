import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mx-auto max-w-[1200px] px-5 pt-16 md:pt-36">
      <div className="top flex flex-row items-center justify-between">
        <div className="flex items-center gap-2 md:gap-3">
          <div className="logo flex items-center justify-center border-none rounded-full bg-[#f1f1f1] p-1 md:p-3">
            <h1 className="text-medium md:text-2xl font-medium md:font-extrabold text-[#333333] uppercase">
              fm
            </h1>
          </div>
          <h1 className="text-white font-medium md:font-extrabold text-base md:text-2xl">
            FrontendMaster
          </h1>
        </div>

        <div className="socials flex flex-row gap-3 justify-end">
          <FaGithub className="text-black text-lg md:text-xl cursor-pointer" />
          <FaLinkedin className="text-black text-lg md:text-xl cursor-pointer" />
          <FaTwitter className="text-black text-lg md:text-xl cursor-pointer" />
        </div>
      </div>

      <div className="btm pt-10 flex flex-col gap-2">
        <hr />
        <p className="text-center text-base md:text-lg font-normal md:font-medium">Copyright © FrontendMaster 2024</p>
      </div>
    </footer>
  );
};

export default Footer;
