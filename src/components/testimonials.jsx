import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import TestimonialCarousel from "./testimonialCarousel";
// import user1 from "../assets/user1.png";
// import user2 from "../assets/user2.png";
// import user3 from "../assets/user3.png";
// import user4 from "../assets/user4.png";
// import user5 from "../assets/user5.png";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Akintayo Phillips",
      job: "CEO, ServiceApartment.Ng",
      review:
"Working with Mubaraq on the Service Apartment NG project has been an absolute pleasure. The progress and attention to detail have far exceeded my expectations. The platform's seamless functionality and modern design truly bring our vision to life!",
      // image: user1,
    },
    {
      name: "Habib Tobiloba",
      job: "Software Engineer",
      review:
       "The Wed-Me website built by Mubaraq is a masterpiece! The responsiveness, clean design, and user-friendly experience have amazed everyone. Your creativity and dedication to this project are evident in every detail. I'm so glad I trusted you with this.",
      // image: user4,
    },
    {
      name: "Ishaq Omotosho",
      job: "Software Engineer, Agrandi",
      review:
        "Collaborating with Mubaraq on the EBN ecommerce project was a game-changer. Your expertise and problem-solving skills brought incredible value to our partnership. The platform’s smooth user experience and robust performance are a testament to your commitment to excellence.",
      // image: user2,
    },
    {
      name: "Jerimiah Aro",
      job: "CEO, GreyArea",
      review:
       "As the CEO of GreyArea, I had the privilege of witnessing Mubaraq's talent firsthand during the Dashr project. The fintech utility app you delivered is innovative, intuitive, and exceeded our expectations. Your professionalism and dedication have been outstanding!",
      // image: user5,
    },
  
  ];

  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  return (
     
      <div id="reviews" data-aos="zoom-in"> {/* Animates the carousel */}
        <TestimonialCarousel testimonials={testimonials} />
      </div>
  );
};

export default Testimonials;
