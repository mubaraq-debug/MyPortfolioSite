import React, { useState, useEffect } from "react";
import { Carousel } from "antd";
import styled from "styled-components";

const TestimonialContainer = styled.div`
  text-align: center;
  max-width: 600px;
  margin: 0 auto;

  @media (max-width: 426px) {
    width: 90%;
    padding: 0px 20px;
  }
`;

const CustomerImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  border: ${(props) =>
    props.active ? "2px solid #1890ff" : "2px solid transparent"};
  transition: border 0.3s;

  @media (max-width: 425px) {
    width: 35px;
    height: 35px;
  }
`;

const CustomerName = styled.h3`
  margin-top: 30px;
  font-size: 1rem;
  font-weight: bold;
`;

const CustomerReview = styled.p`
  font-size: 1rem;
  color: #555;
`;

const TestimonialCarousel = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = React.useRef();

  // Change review manually when an image is clicked
  const handleImageClick = (index) => {
    setCurrentIndex(index);
    carouselRef.current.goTo(index);
  };

  // Auto-advance every 7 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      carouselRef.current.goTo((currentIndex + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [currentIndex, testimonials.length]);

  return (
    <div className="flex flex-col items-center justify-center pt-14 md:pt-32 gap-10">
      <header className="flex flex-col items-center gap-10">
        <h1 className="text-left md:text-center font-semibold capitalize text-2xl md:text-4xl text-[#333333]">
          reviews
        </h1>
      </header>
      <TestimonialContainer>
        <Carousel
          ref={carouselRef}
          afterChange={(index) => setCurrentIndex(index)}
          dots={false}
          autoplay={false}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index}>
              <CustomerReview>"{testimonial.review}"</CustomerReview>
              <CustomerName>{testimonial.name}</CustomerName>
              <small>{testimonial.job}</small>
            </div>
          ))}
        </Carousel>
        <div
          className="image-thumbnails"
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          {testimonials.map((testimonial, index) => (
            <CustomerImage
              key={index}
              src={testimonial.image}
              alt={testimonial.name}
              active={index === currentIndex}
              onClick={() => handleImageClick(index)}
            />
          ))}
        </div>
      </TestimonialContainer>
    </div>
  );
};

export default TestimonialCarousel;
