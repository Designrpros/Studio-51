import React from 'react';
import styled from 'styled-components';
import flows from '../Images/flows.png'; // Placeholder for the flower image

const Projects = () => {
  return (
    <Container>
      <FlowerBackground />
      <Title>Utgivelser</Title>
      <Description>
        Utforsk musikken til Aurora B. og Liora, to kunstneriske uttrykk som sammen forteller en historie om lidenskap, utvikling og kreativitet.
      </Description>
      <Section>
        <ArtistName>Aurora B</ArtistName>
        <TrackList>
          <Track>
            <a href="https://youtu.be/98MbQTW9sKE?si=XLS6pblqaEGWAZ10" target="_blank" rel="noopener noreferrer">
              Wanted Me First
            </a>
          </Track>
          <Track>
            <a href="https://youtu.be/igHZG1YyBXI?si=gYyylbXnFBfyGWkH" target="_blank" rel="noopener noreferrer">
              Casual
            </a>
          </Track>
          <Track>
            <a href="https://youtu.be/CymZA4NYUw0?si=ta6AVewNaqR02sh0" target="_blank" rel="noopener noreferrer">
              Igjen og igjen
            </a>
          </Track>
          <Track>
            <a href="https://youtu.be/FMUOy4SaeyQ?si=YZn627c3kQO3uPfg" target="_blank" rel="noopener noreferrer">
              Fly
            </a>
          </Track>
          <Track>
            <a href="https://youtu.be/JeQkgg3uUQc?si=59u2C9Hdc6vyP_CJ" target="_blank" rel="noopener noreferrer">
              Blanke Ark
            </a>
          </Track>
        </TrackList>
      </Section>
      <Section>
        <ArtistName>Liora</ArtistName>
        <TrackList>
          <Track>
            <a href="https://youtu.be/4_g7kwFEypg?si=_WoiH__sLpJQ5Hzo" target="_blank" rel="noopener noreferrer">
              Bad Company
            </a>
          </Track>
          <Track>
            <a href="https://youtu.be/N-Vtvw7bFBQ?si=iUnfxPEehoAEme4I" target="_blank" rel="noopener noreferrer">
              Alt Vi Hadde
            </a>
          </Track>
          <Track>
            <a href="https://youtu.be/yCCH6h8lTcg?si=3AZ0FsMXaooH3b9u" target="_blank" rel="noopener noreferrer">
              Raknet Bort
            </a>
          </Track>
          <Track>
            <a href="https://youtu.be/AzZ2ozYxzm0?si=tAAREmTvB5AS08gr" target="_blank" rel="noopener noreferrer">
              Too Late
            </a>
          </Track>
        </TrackList>
      </Section>
      <YouTubeChannel>
        Sjekk ut mer musikk på vår 
        <a href="https://www.youtube.com/channel/UCEKJ-gazCVJDDarrIYcHs8g" target="_blank" rel="noopener noreferrer"> YouTube-kanal</a>.
      </YouTubeChannel>
      <Footer>
        © {new Date().getFullYear()} Studio 51. All rights reserved.
      </Footer>
    </Container>
  );
};

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
  width: 100vw;
  background-color: #ffffff;
  color: #000000;
  font-family: 'Inter', sans-serif;
  text-align: center;
  padding: 60px 40px 20px;
  box-sizing: border-box;
`;

const FlowerBackground = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 200px;
  background-image: url(${flows});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: top center;
  filter: grayscale(100%) brightness(0) invert(0);
  z-index: 0;
  pointer-events: none;
`;

const Title = styled.h1`
  font-size: 60px;
  font-weight: 800;
  letter-spacing: 2px;
  margin-bottom: 20px;
  z-index: 1;
`;

const Description = styled.p`
  font-size: 20px;
  line-height: 1.8;
  max-width: 800px;
  margin-bottom: 40px;
  z-index: 1;
`;

const Section = styled.div`
  margin-bottom: 40px;
  z-index: 1;
`;

const ArtistName = styled.h2`
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 20px;
`;

const TrackList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const Track = styled.li`
  font-size: 18px;
  margin: 10px 0;

  a {
    color: #000000;
    text-decoration: none;
    font-weight: 500;

    &:hover {
      text-decoration: underline;
      color: #555555;
    }
  }
`;

const YouTubeChannel = styled.div`
  font-size: 18px;
  margin-top: 40px;
  z-index: 1;

  a {
    color: #0000ff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Footer = styled.footer`
  font-size: 14px;
  font-weight: 400;
  color: #000000;
  margin-top: auto;
  z-index: 1;
`;

export default Projects;