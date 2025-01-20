import React, { useState } from 'react';
import styled from 'styled-components';
import flows from './Images/flows.png'; // Placeholder for flower frame image
import flowsUp from './Images/flowsUp.png'; // Placeholder for the upper flower frame image

// First Section: About the Festival with a Program Table
const InfoSection1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Make the section taller for better visibility */
  color: #ffffff;
  background-color: #000000;
  position: relative;
  overflow: hidden;
  z-index: 1;
`;

const Section1 = styled.div`
  height: 25vh;
  background-color: white;
  z-index: 0;
`;

const InfoTitle1 = styled.h2`
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 20px;
  text-align: center; // Center the title
`;

const InfoText1 = styled.p`
  font-size: 18px;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto;
  text-align: center; // Center the text
  padding: 0 20px; // Add padding for better readability
`;

const SliderContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

const SliderButton = styled.button`
  background-color: transparent;
  border: 2px solid #ffffff;
  color: #ffffff;
  font-family: 'Old English Text MT', serif;
  font-size: 20px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ffffff;
    color: #000000;
  }

  &:focus {
    outline: none;
  }

  margin: 0 10px; // Add spacing between buttons
`;

const ProgramTable = styled.table`
  width: 80%;
  margin: 20px 0;
  border-collapse: collapse;
  color: #ffffff;
  font-family: 'Old English Text MT', serif;
  border: 2px solid #ffffff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); // Add shadow to the table for depth

  th, td {
    border: 2px solid #ffffff;
    padding: 10px;
    text-align: center;
  }

  th {
    background-color: #000000;
    color: #ffffff;
    font-size: 24px; // Increase font size for better readability
  }

  td {
    background-color: #ffffff;
    color: #000000;
    font-size: 18px; // Adjust font size for table cells
  }

  // Zebra striping for better readability
  tr:nth-child(even) {
    background-color: #f0f0f0;
  }

  tr:hover {
    background-color: #d1d1d1; // Highlight row on hover
    cursor: pointer; // Change cursor to pointer on hover
  }
`;

// Flower frame styled component
const FlowerFrame = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url(${flows}); /* Use flower image */
  background-repeat: no-repeat;
  filter: grayscale(100%) brightness(0) invert(0); /* Style the flower frame in black */
  z-index: 1;
`;

const FlowerFrameUp = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url(${flowsUp}); /* Use flower image */
  background-repeat: no-repeat;
  filter: grayscale(100%) brightness(0) invert(0); /* Style the flower frame in black */
  z-index: 1;
`;

// Festival program data for two days
const programData = [
  {
    day: "Fredag",
    events: [
      { time: "12:00", activity: "Åpning", description: "Velkommen til Lydhagen Festival!" },
      { time: "13:00", activity: "Band A", description: "En fantastisk opptreden av lokale helter." },
      { time: "15:00", activity: "Kunstutstilling", description: "Se fantastiske verk av lokale kunstnere." },
      { time: "17:00", activity: "DJ Set", description: "Dans til rytmene fra vår DJ." },
      { time: "19:00", activity: "Band B", description: "Opplev musikken fra denne fantastiske gruppen." },
      { time: "21:00", activity: "Avslutning", description: "Takk for i kveld!" },
    ],
  },
  {
    day: "Lørdag",
    events: [
      { time: "12:00", activity: "Workshops", description: "Lær om kunst og musikk." },
      { time: "14:00", activity: "Band C", description: "Ny gruppe som viser seg frem." },
      { time: "16:00", activity: "Teaterforestilling", description: "Se lokale talenter i aksjon." },
      { time: "18:00", activity: "DJ Set 2", description: "Siste sjanse til å danse." },
      { time: "20:00", activity: "Band D", description: "Avslutt festivalen med stil." },
      { time: "22:00", activity: "Avslutning", description: "Takk for at du kom!" },
    ],
  },
];

// First Section Component
const Info1 = () => {
  const [currentDay, setCurrentDay] = useState(0); // State to manage the current day

  return (
    <>
      <Section1>
        <FlowerFrameUp />
      </Section1>
      <InfoSection1>
        <InfoTitle1>Festival Program</InfoTitle1>
        <InfoText1>
          Her er programmet for Lydhagen Festivalen! Kom og opplev fantastiske opptredener og aktiviteter.
        </InfoText1>

        {/* Slider to switch between days */}
        <SliderContainer>
          <SliderButton onClick={() => setCurrentDay(0)}>Fredag</SliderButton>
          <SliderButton onClick={() => setCurrentDay(1)}>Lørdag</SliderButton>
        </SliderContainer>

        <ProgramTable>
          <thead>
            <tr>
              <th>Tid</th>
              <th>Artist / Aktivitet</th>
              <th>Beskrivelse</th>
            </tr>
          </thead>
          <tbody>
            {programData[currentDay].events.map((event, index) => (
              <tr key={index}>
                <td>{event.time}</td>
                <td>{event.activity}</td>
                <td>{event.description}</td>
              </tr>
            ))}
          </tbody>
        </ProgramTable>
      </InfoSection1>
      <Section1>
        <FlowerFrame />
      </Section1>
    </>
  );
};

export default Info1;