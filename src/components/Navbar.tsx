import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav>
      {/* logo */}
      <div>
        <div className="logo">
          <h1>fm</h1>
        </div>
        <h1>FrontendMaster</h1>
      </div>

      {/* navigation Menu */}

      <div>
        <div className="nav-links">
          <Link to="/">home</Link>
          <Link to="/">about</Link>
          <Link to="/">projects</Link>
          <Link to="/">resume</Link>
          <Link to="/">testimonials</Link>
          <Link to="/">contact</Link>
        </div>

        <div className="socials">
          <FaGithub />
          <FaLinkedin />
          <FaTwitter />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
