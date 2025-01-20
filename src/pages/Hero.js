import React from 'react';
import styled, { keyframes } from 'styled-components';
import MusicCircleImage from '../Images/MusicCircle.png'; // Import MusicCircle image
import studio51Logo from '../Images/Studio51.png'; // Import the logo
import BorderBottomWaveform from '../components/BorderBottomWaveform'; // Import the waveform component

// Animation for circular rotation
const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

// Hero section styled component
const HeroSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #ffff;
  position: relative;
  overflow: hidden;
  padding: 0 20px; /* Added padding to prevent content from touching screen edges on mobile */
`;

// Rotating image container (fixed size, does not scale)
const RotatingImage = styled.div`
  position: absolute;
  width: 900px; /* Fixed width */
  height: 900px; /* Fixed height */
  background-image: url(${MusicCircleImage});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  animation: ${rotate} 50s linear infinite; /* Rotates continuously */
  z-index: 1; /* Keep this behind the logo */
`;

// Wrapper for the logo and text
const LogoWrapper = styled.div`
  z-index: 2; /* Ensure the logo is on top */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%; /* Position the logo at 50% of the height (vertical center) */
  left: 50%; /* Center horizontally */
  transform: translate(-50%, -50%); /* Adjust the position to be exactly at the center */
  text-align: center;
`;

// Logo Styling (similar to the ContactPage's Logo styling)
const HeroLogo = styled.img`
  display: block;
  width: 700px; /* Set the width, let it scale down for smaller devices */
  height: auto;

  /* Adjust width for different screen sizes */
  @media (max-width: 768px) {
    width: 600px; /* For tablets */
  }

  @media (max-width: 480px) {
    width: 500px; /* For mobile */
  }
`;

// Style to hide BorderBottomWaveform on smaller screens
const WaveformWrapper = styled.div`
  @media (max-width: 768px) {
    display: none; /* Hide on tablet and smaller screens */
  }
`;

const Hero = () => {
  return (
    <HeroSection>
      {/* Rotating image */}
      <RotatingImage />
      {/* Centered logo and text */}
      <LogoWrapper>
        <HeroLogo src={studio51Logo} alt="Studio 51 Logo" /> {/* Logo replaces text */}
        <WaveformWrapper>
        </WaveformWrapper>
      </LogoWrapper>
    </HeroSection>
  );
};

export default Hero;