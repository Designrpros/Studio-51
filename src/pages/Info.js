import React, { useState } from 'react';
import styled from 'styled-components';
import flows from '../Images/flows.png'; // Placeholder for flower frame image
import flowsUp from '../Images/flowsUp.png'; // Placeholder for the upper flower frame image

// Information Component
const Info = () => {
  return (
    <>
      <SectionUp>
        <FlowerFrameUp />
      </SectionUp>
      <InfoSection>
        <InfoTitle>Velkommen til Studio 51</InfoTitle>
        <InfoText>
          Studio 51 ble etablert i 2016 i Sandvika og har vokst til et kreativt musikkfellesskap med over 50 medlemmer. 
          Vi lager musikk i ulike sjangere, skriver tekster, og produserer låter under vår egen label – tilgjengelig på Spotify, iTunes, og SoundCloud.
        </InfoText>
        <InfoText>
          Musikk er vår lidenskap, men vi utforsker også andre kreative områder som Film, gaming og podcasting. 
          Hos Studio 51 får du muligheten til å utvikle deg, dele kreativiteten din, og bli del av et inkluderende fellesskap.
        </InfoText>
        <InfoText>
          Vil du bli med? Ta kontakt for en uforpliktende prat!
        </InfoText>
      </InfoSection>
      <SectionDown>
        <FlowerFrame />
      </SectionDown>
    </>
  );
};

// Styled Components
const SectionUp = styled.div`
  height: 20vh;
  background-color: white;
  z-index: 0;

  @media (max-width: 768px) {
    height: 4vh;
  }

  @media (max-width: 480px) {
    height: 4vh;
  }
`;

const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50vh;
  background-color: #000000;
  color: #ffff;
  position: relative;
  overflow: hidden;
  z-index: 1;
`;

const SectionDown = styled.div`
  height: 25vh;
  background-color: white;
  z-index: 0;
`;

const InfoTitle = styled.h2`
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
`;

const InfoText = styled.p`
  font-size: 18px;
  line-height: 1.6;
  max-width: 800px;
  margin: 10px auto;
  text-align: center;
  padding: 0 20px;
`;

const FlowerFrameUp = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url(${flowsUp}); 
  background-repeat: no-repeat;
  filter: grayscale(100%) brightness(0) invert(0); 
  z-index: 1;

  @media (max-width: 768px) {
    background-size: 110%; /* Slightly scale up for tablets */
  }

  @media (max-width: 480px) {
    background-size: 120%; /* Slightly scale up for mobile */
  }
`;

const FlowerFrame = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url(${flows}); 
  background-repeat: no-repeat;
  filter: grayscale(100%) brightness(0) invert(0); 
  z-index: 1;

  @media (max-width: 768px) {
    background-size: 110%; /* Slightly scale up for tablets */
  }

  @media (max-width: 480px) {
    background-size: 120%; /* Slightly scale up for mobile */
  }
`;

export default Info;