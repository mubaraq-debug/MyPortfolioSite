import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="flex flex-row items-center mx-auto max-w-[1200px]">
      {/* logo */}
      <div className="flex-[0.5] flex items-center gap-2 md:gap-3">
        <div className="logo flex items-center justify-center border-none rounded-full bg-[#f1f1f1] p-1 md:p-3">
          <h1 className="text-medium md:text-2xl font-medium md:font-extrabold text-[#333333] uppercase">fm</h1>
        </div>
        <h1 className="text-white font-medium md:font-extrabold text-base md:text-2xl">FrontendMaster</h1>
      </div>

      {/* navigation Menu */}

      <div className="flex-[0.5] md:flex md:items-center md:items-row md:justify-between">
        <div className="nav-links hidden md:flex md:flex-row md:items-center md:gap-5 md:text-white md:capitalize md:text-lg md:font-light">
          <Link to="/">home</Link>
          <Link to="/">about</Link>
          <Link to="/">projects</Link>
          <Link to="/">resume</Link>
          <Link to="/">testimonials</Link>
          <Link to="/">contact</Link>
        </div>

        <div className="socials flex flex-row gap-3 justify-end">
          <FaGithub className="text-white text-lg md:text-xl cursor-pointer" />
          <FaLinkedin className="text-white text-lg md:text-xl cursor-pointer" />
          <FaTwitter className="text-white text-lg md:text-xl cursor-pointer" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
