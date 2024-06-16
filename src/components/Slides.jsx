import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
// Default theme
import "@splidejs/react-splide/css";

// or other themes
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";

// or only core styles
import "@splidejs/react-splide/css/core";
const Slides = ({ imgs, speed }) => {
  return (
    <div>
      <Splide
        options={{
          type: "loop",
          perPage: 4,
          perMove: 1,
          autoplay: true,
          interval: 0,
          speed: speed, // Adjust speed as necessary
          pauseOnHover: false,
          pauseOnFocus: false,
          arrows: false,
          gap: "2rem",
          pagination: false,
          drag: false,
          breakpoints: {
            640: {
              perPage: 1,
              gap: "1rem",
            },
            768: {
              perPage: 2,
              gap: "1rem",
            },
            1024: {
              perPage: 3,
              gap: "1rem",
            },
          },
        }}
        aria-label="My Favorite Images"
      >
        {imgs.map((img, index) => {
          return (
            <SplideSlide key={index}>
              <img className="h-auto w-auto object-cover" src={img} alt="" />
            </SplideSlide>
          );
        })}
      </Splide>
    </div>
  );
};

export default Slides;
