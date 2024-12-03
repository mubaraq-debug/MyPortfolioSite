import React, { useEffect } from "react";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const Contact: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  return (
    <div
      id="contact"
      className="mx-auto flex flex-col gap-10 max-w-[1200px] px-5 pt-14 md:pt-32"
      data-aos="fade-up" // Animates the entire section upwards
    >
      <header
        className="text-left md:text-center font-semibold capitalize text-2xl md:text-4xl text-[#333333]"
        data-aos="fade-down" // Header fades down
      >
        Get in Touch
      </header>

      <div
        className="flex flex-col justify-start md:justify-center items-start md:items-center gap-10"
        data-aos="zoom-in" // Animates the contact details with a zoom-in effect
      >
        <div className="right flex flex-col items-start gap-5">
          <div className="call flex flex-row items-center gap-3" data-aos="fade-right">
            <FaPhone className="text-2xl" />
            <h2>+234-814-828-3853</h2>
          </div>
          <div className="email flex flex-row items-center gap-3" data-aos="fade-left">
            <FaEnvelope className="text-2xl" />
            <h2>
              <a href="mailto: mubaraqmuhammad06@gmail.com">
                mubaraqmuhammad06@gmail.com
              </a>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
