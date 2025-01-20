import React from "react";
import styled from "styled-components";

// Import your media assets
import Thomas from "../Images/Thomas.png";
import Studio from "../Images/Studio.jpg";
import Endreyvssmith from "../Images/endreyvssmith.jpg";

// Waterfall Gallery Component
const WaterfallGallery = () => {
  const images = [Thomas, Studio, Endreyvssmith, Endreyvssmith, Studio, Thomas, Studio, Endreyvssmith, Thomas ];

  return (
    <GalleryContainer>
      {images.map((image, index) => (
        <ImageWrapper key={index}>
          <Image src={image} alt={`gallery-image-${index}`} />
        </ImageWrapper>
      ))}
    </GalleryContainer>
  );
};

// Styled Components
const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const ImageWrapper = styled.div`
  overflow: hidden;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

export default WaterfallGallery;