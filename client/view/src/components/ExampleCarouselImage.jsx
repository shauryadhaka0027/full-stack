// ExampleCarouselImage.js
import React from 'react';

const ExampleCarouselImage = ({ text, imageUrl }) => {
  return (
    <img
    style={{ width: "100%", maxWidth: "100%", height: "31rem" }}
      src={`${imageUrl} `}  // Replace with your actual image source
      alt={text}
    />
  );
}

export default ExampleCarouselImage;
