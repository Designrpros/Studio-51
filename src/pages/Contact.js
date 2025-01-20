import React from 'react';
import styled from 'styled-components';
import { FiMail, FiPhone, FiInstagram, FiYoutube } from 'react-icons/fi';
import flows from '../Images/flows.png'; // Placeholder for the flower image

const Contact = () => {
  return (
    <Container>
      <FlowerBackground />
      <Content>
        <Title>Kontakt</Title>
        <Description>
          Har du spørsmål eller ønsker å samarbeide? Ta kontakt med Aurora B. eller følg henne på sosiale medier for de siste oppdateringene.
        </Description>
        <ContactList>
          <ContactItem>
            <FiMail size={30} />
            <ContactText>
              <a href="mailto:kontakt@studio51.com">kontakt@studio51.com</a>
            </ContactText>
          </ContactItem>
          <ContactItem>
            <FiPhone size={30} />
            <ContactText>
              <a href="tel:+4712345678">+47 123 45 678</a>
            </ContactText>
          </ContactItem>
          <ContactItem>
            <FiInstagram size={30} />
            <ContactText>
              <a href="https://www.instagram.com/aurorabmusic" target="_blank" rel="noopener noreferrer">
                @aurorabmusic
              </a>
            </ContactText>
          </ContactItem>
          <ContactItem>
            <FiYoutube size={30} />
            <ContactText>
              <a href="https://www.youtube.com/channel/UCEKJ-gazCVJDDarrIYcHs8g" target="_blank" rel="noopener noreferrer">
                Aurora B. på YouTube
              </a>
            </ContactText>
          </ContactItem>
        </ContactList>
        <StudioInfo>
          Aurora B. er en del av <strong>Studio 51</strong>, et kreativt fellesskap dedikert til å fremme kunst og musikk i verdensklasse.
        </StudioInfo>
      </Content>
      <Footer>© {new Date().getFullYear()} Studio 51. All rights reserved.</Footer>
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
  width: 100%;
  background-color: #ffffff;
  font-family: 'Inter', sans-serif;
  text-align: center;
  position: relative;
`;

const FlowerBackground = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 200px;
  background-image: url(${flows});
  background-repeat: no-repeat;
  background-size: cover; /* Ensure it covers the area */
  background-position: top center;
  z-index: -1; /* Push it behind other content */

  @media (max-width: 768px) {
    height: 120px; /* Reduce height for tablets */
    background-size: contain; /* Shrink for smaller screens */
  }

  @media (max-width: 480px) {
    height: 80px; /* Further reduce height for mobile */
  }
`;

const Content = styled.div`
  z-index: 1;
  padding: 60px 20px;
`;

const Title = styled.h1`
  font-size: 50px;
  font-weight: bold;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 40px;
  }

  @media (max-width: 480px) {
    font-size: 32px;
  }
`;

const Description = styled.p`
  font-size: 20px;
  line-height: 1.5;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

const ContactList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  margin-bottom: 40px;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ContactText = styled.span`
  font-size: 18px;

  a {
    text-decoration: none;
    color: #000000;

    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const StudioInfo = styled.div`
  font-size: 18px;
  line-height: 1.6;
  margin-top: 20px;

  strong {
    font-weight: bold;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const Footer = styled.footer`
  margin-top: auto;
  font-size: 14px;
  color: #666;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export default Contact;