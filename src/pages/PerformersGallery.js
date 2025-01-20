import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaFacebookF, FaInstagram, FaSpotify, FaYoutube, FaTwitter, FaLinkedinIn, FaTiktok } from 'react-icons/fa';
import Waveform from '../components/Waveform'; 

// Example performer data
import Performer1 from '../Images/AuroraB.jpeg'; 
import Performer2 from '../Images/endreyvssmith.jpg';
import Performer3 from '../Images/Thomas.png';



const WaveformWrapper = styled.div`
  display: block; /* Visible by default */

  /* Hide on smaller screens (mobile-sized) */
  @media (max-width: 768px) {
    display: none;
  }
`;

const PerformersGallery = () => {
  const performers = [
    { id: 1, name: "Aurora B.", image: Performer1, socials: { facebook: 'https://facebook.com', instagram: 'https://instagram.com', spotify: 'https://spotify.com' } },
    { id: 2, name: "Endrey", image: Performer2, socials: { youtube: 'https://youtube.com', twitter: 'https://twitter.com' } },
    { id: 3, name: "Thomas", image: Performer3, socials: { youtube: 'https://youtube.com', twitter: 'https://twitter.com' } },
  ];

  return (
    <PerformersSection>
      <PerformerTitle>Artister og utgivelser</PerformerTitle>
      <PerformerGrid>
        {performers.map((performer) => (
          <PerformerCard key={performer.id}>
            <PolaroidWrapper>
              <Link to={`/artist/${performer.id}`}>
                {/* Conditional rendering using media query */}
                <WaveformWrapper>
                  <Waveform />
                </WaveformWrapper>
                <PolaroidFrame>
                  <Image src={performer.image} alt={performer.name} />
                  <Caption><strong>{performer.name}</strong></Caption>
                </PolaroidFrame>
              </Link>
            </PolaroidWrapper>
            <SocialIcons>
              {performer.socials.facebook && (
                <SocialIcon href={performer.socials.facebook} target="_blank">
                  <FaFacebookF />
                </SocialIcon>
              )}
              {performer.socials.instagram && (
                <SocialIcon href={performer.socials.instagram} target="_blank">
                  <FaInstagram />
                </SocialIcon>
              )}
              {performer.socials.spotify && (
                <SocialIcon href={performer.socials.spotify} target="_blank">
                  <FaSpotify />
                </SocialIcon>
              )}
              {performer.socials.youtube && (
                <SocialIcon href={performer.socials.youtube} target="_blank">
                  <FaYoutube />
                </SocialIcon>
              )}
              {performer.socials.twitter && (
                <SocialIcon href={performer.socials.twitter} target="_blank">
                  <FaTwitter />
                </SocialIcon>
              )}
              {performer.socials.linkedin && (
                <SocialIcon href={performer.socials.linkedin} target="_blank">
                  <FaLinkedinIn />
                </SocialIcon>
              )}
              {performer.socials.tiktok && (
                <SocialIcon href={performer.socials.tiktok} target="_blank">
                  <FaTiktok />
                </SocialIcon>
              )}
            </SocialIcons>
          </PerformerCard>
        ))}
      </PerformerGrid>
    </PerformersSection>
  );
};

// Styled Components

const PerformersSection = styled.section`
  padding: 80px 40px;
  background-color: #ffffff;
  color: #000;
  text-align: center;
  
  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

const PerformerTitle = styled.h2`
  font-size: 80px;
  font-weight: 700;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 50px;
    margin-bottom: 30px;
  }
`;

const PerformerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); /* Responsive layout */
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    gap: 20px;
  }
`;

const PerformerCard = styled.div`
  background-color: #ffffff;
  padding: 20px;
  text-align: center;
  border-radius: 10px;
  position: relative;
`;

const PolaroidWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const PolaroidFrame = styled.div`
  background-color: #ffffff;
  border: 8px solid #000000;
  padding: 20px;
  width: 320px;
  height: 320px; /* Ensure a consistent height for the Polaroid */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    width: 100%;
    height: auto; /* Allow responsive resizing for smaller screens */
    padding: 10px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  max-width: 280px; /* Limit the maximum width of the image */
  max-height: 280px; /* Limit the maximum height of the image */
  object-fit: cover; /* Ensures the image fills the container proportionally without distortion */
  display: block; /* Removes extra spacing caused by inline images */
  margin: auto; /* Centers the image within the Polaroid */
`;

const Caption = styled.p`
  margin-top: -2.1px;
  font-size: 16px;
  color: #000;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;
  justify-content: center;

  @media (max-width: 768px) {
    gap: 10px;
    margin-top: 15px;
  }
`;

const SocialIcon = styled.a`
  font-size: 24px;
  color: #000000;
  text-decoration: none;
  &:hover {
    color: #555555;
  }

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export default PerformersGallery;