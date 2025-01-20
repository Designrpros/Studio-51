import React from 'react';
import styled from 'styled-components';
import flows from '../Images/flows.png'; // Placeholder for the flower image

const About = () => {
  return (
    <>
      <Container>
        <FlowerBackground />
        <Title>Om Aurora B.</Title>
        <Description>
          Aurora B. er en lovende lokal talent fra Bærum, Norge. Med en unik evne til å formidle følelser gjennom sine sanger, har hun allerede fanget hjertene til mange med sin gripende sang <em>"Wanted Me First"</em>. 
          Hennes kunstneriske uttrykk reflekterer både hennes røtter og hennes fremtidige ambisjoner.
        </Description>
        <Highlights>
          <Highlight>
            <HighlightTitle>🎵 Lokal Kunstner</HighlightTitle>
            <HighlightText>
              Aurora B. har allerede gjort seg bemerket i det lokale musikkmiljøet i Bærum, med sin autentiske stil og ektefølte låter.
            </HighlightText>
          </Highlight>
          <Highlight>
            <HighlightTitle>🌟 Sangen "Wanted Me First"</HighlightTitle>
            <HighlightText>
              En av hennes mest populære sanger, <em>"Wanted Me First"</em>, gir et nært og ærlig innblikk i hennes opplevelser og emosjoner, som resonerer med lyttere.
            </HighlightText>
          </Highlight>
          <Highlight>
            <HighlightTitle>🎤 Ambisjoner</HighlightTitle>
            <HighlightText>
              Aurora B. har ambisjoner om å vokse som artist og bringe sin musikk til et bredere publikum, samtidig som hun forblir tro mot sine røtter i Bærum.
            </HighlightText>
          </Highlight>
        </Highlights>
        <Footer>
          © {new Date().getFullYear()} Studio 51. All rights reserved.
        </Footer>
      </Container>
    </>
  );
};

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  min-height: 100vh;
  width: 100vw;
  background-color: #ffffff; /* White background */
  color: #000000; /* Black text */
  font-family: 'Inter', sans-serif;
  text-align: center;
  padding: 60px 40px 20px; /* Increased top padding for space above the title */
  box-sizing: border-box;
`;

const FlowerBackground = styled.div`
  position: fixed; /* Fixed to the viewport */
  top: 0;
  width: 100%;
  height: 200px; /* Limited height */
  background-image: url(${flows});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: top center;
  filter: grayscale(100%) brightness(0) invert(0);
  z-index: 0; /* Place it behind other content */
  pointer-events: none; /* Ensure it doesn't interfere with interactions */
`;

const Title = styled.h1`
  font-size: 60px;
  font-weight: 800;
  letter-spacing: 2px;
  margin-bottom: 30px;
  z-index: 1; /* Bring title in front of background */
`;

const Description = styled.p`
  font-size: 20px;
  line-height: 1.8;
  max-width: 800px;
  margin-bottom: 40px;
  z-index: 1; /* Bring text in front of background */
`;

const Highlights = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  margin-bottom: 40px;
  z-index: 1;
`;

const Highlight = styled.div`
  max-width: 600px;
  text-align: left;
`;

const HighlightTitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 10px;
`;

const HighlightText = styled.p`
  font-size: 18px;
  line-height: 1.6;
`;

const Footer = styled.footer`
  font-size: 14px;
  font-weight: 400;
  color: #000000;
  margin-top: auto;
  z-index: 1;
`;

export default About;