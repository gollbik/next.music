"use client";
import React from "react";
import Carousel from "react-material-ui-carousel";
import { Box } from "@mui/material";

const SliderComponent = () => {
  const slides = [
    {
      img: "https://source.boomplaymusic.com/group10/M00/02/14/736819c200494aa1b7c57673e7e674c1.jpg",
    },
    {
      img: "https://source.boomplaymusic.com/group10/M00/02/06/62fec1c28253445298aa6d6fa4cf9f0f.jpg",
    },
    {
      img: "https://source.boomplaymusic.com/group10/M00/02/14/7418cde435d646d09475ff886af9da5a.jpg",
    },
    {
      img: "https://source.boomplaymusic.com/group10/M00/12/30/3ec3d0f902c94101b537cc8473bb92b5.jpg",
    },
  ];

  const sliderStyles = {
    width: "100%",
    padding: 10,
  };

  const imageStyles = {
    width: "100%",
    height: "auto",
  };

  return (
    <Box style={sliderStyles}>
      <Carousel>
        {slides.map((slide, index) => (
          <img
            src={slide.img}
            key={index}
            style={imageStyles}
            alt={`slide-${index}`}
          />
        ))}
      </Carousel>
    </Box>
  );
};

export default SliderComponent;
