import React, { useEffect } from "react";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Navbar = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: "ease-in-out", // Easing function
      once: false, // Animations happen only once
    });
  }, []);

  return (
    <nav
      id="home"
      className="flex flex-row items-center mx-auto max-w-[1200px]"
      data-aos="fade-down" // Animates the entire navbar when it appears
    >
      {/* Logo */}
      <div
        className="flex-[0.4] flex items-center gap-2 md:gap-3"
        data-aos="fade-right" // Fades the logo in from the right
      >
        <div className="logo flex items-center justify-center border-none rounded-full bg-[#f1f1f1] p-1 md:p-3">
          <h1 className="text-medium md:text-2xl font-medium md:font-extrabold text-[#333333] uppercase">
            fm
          </h1>
        </div>
        <h1 className="text-[#f1f1f1] font-medium md:font-extrabold text-base md:text-2xl">
          FrontendMaster
        </h1>
      </div>

      {/* Navigation Menu */}
      <div
        className="flex-[0.6] md:flex md:items-center md:items-row md:justify-between"
        data-aos="fade-up" // Fades the navigation menu in from below
      >
        <div className="nav-links hidden md:flex md:flex-row md:items-center md:gap-5 md:text-[#f1f1f1] md:capitalize md:text-lg md:font-normal">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            home
          </Link>
          <Link
            to="technology"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            technologies
          </Link>
          <Link
            to="services"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            services
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            projects
          </Link>
          <Link
            to="reviews"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            reviews
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            get in touch
          </Link>
        </div>

        {/* Social Icons */}
        <div
          className="socials flex flex-row gap-3 justify-end"
          data-aos="zoom-in" // Zooms in the social icons
        >
          <FaGithub className="text-white text-lg md:text-xl cursor-pointer" />
          <FaLinkedin className="text-white text-lg md:text-xl cursor-pointer" />
          <FaTwitter className="text-white text-lg md:text-xl cursor-pointer" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
