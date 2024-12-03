import React from "react";
import TestimonialCarousel from "./testimonialCarousel";
import user1 from "../assets/user1.png";
import user2 from "../assets/user2.png";
import user3 from "../assets/user3.png";
import user4 from "../assets/user4.png";
import user5 from "../assets/user5.png";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ali Tufan",
      job: "Product Manager, Apple Inc.",
      review:
        "The tours in this website are great. I had been really enjoy with my family! The team is very professional and taking care of the customers. Will surely recommend to my freind to join this company!!",
      image: user1,
    },
    {
      name: "Emily Johnson",
      job: "Marketing Manager, BrightFuture Media",
      review:
        "This platform has revolutionized the way we approach our campaigns. It's intuitive, reliable, and makes collaboration effortless. Truly a game-changer for our team!",
      image: user4,
    },
    {
      name: "James Carter",
      job: "Software Engineer, TechNova Solutions",
      review:
        "The efficiency and ease of use are unmatched. I've seen my workflow improve significantly, saving time and increasing productivity. Highly recommend to anyone in tech!",
      image: user2,
    },
    {
      name: "Olivia Martinez",
      job: "Product Designer, Innovate Studio",
      review:
        "I’m impressed by how seamless and user-friendly the experience is. It perfectly aligns with our design principles and supports our creative processes.",
      image: user5,
    },
    {
      name: "Daniel Smith",
      job: "Financial Analyst, Apex Investment",
      review:
        "A fantastic tool that simplifies complex tasks. The insights provided are clear and actionable, helping us make informed decisions faster than ever before.",
      image: user3,
    },
  ];

  return (
    <div id="reviews">
      <TestimonialCarousel testimonials={testimonials} />
    </div>
  );
};

export default Testimonials;
