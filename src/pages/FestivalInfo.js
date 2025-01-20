import React from 'react';
import styled from 'styled-components';
import flowsUp from '../Images/flowsUp.png';
import studio51Logo from '../Images/Studio51Logo.png'; // Import the logo

// Flower frame styled component
const FlowerFrameUp = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url(${flowsUp});
  background-repeat: no-repeat;
  filter: grayscale(100%) brightness(0) invert(0);
  z-index: 1;
  color: #000000;
`;

// Contact Section Styling
const ContactSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #ffffff;
  background-color: #000000;
  position: relative;
  overflow: hidden;
  z-index: 1;
  padding: 40px 20px;
  font-family: Arial, sans-serif;
`;

const ContactTitle = styled.h2`
  font-size: 40px;
  font-weight: 700;
`;

const ContactText = styled.p`
  font-size: 18px;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto 30px;
  text-align: center;
`;

const ContactLink = styled.a`
  display: flex;
  align-items: center;
  color: #ffffff;
  text-decoration: none;
  font-size: 18px;
  margin-bottom: 20px;
  transition: color 0.3s;

  &:hover {
    color: #f39c12;
  }

  & .material-icons {
    margin-right: 10px;
  }
`;

const Address = styled.div`
  text-align: center;
  font-size: 18px;
  line-height: 1.8;
  margin-top: 20px;

  & .material-icons {
    vertical-align: middle;
    margin-right: 10px;
  }

  a {
    color: #ffffff;
    text-decoration: none;
    transition: color 0.3s;

    &:hover {
      color: #f39c12;
    }
  }
`;

const SocialLinks = styled.div`
  margin-top: 30px;
  text-align: center;
  font-size: 18px;

  & a {
    color: #ffffff;
    text-decoration: none;
    margin: 0 10px;
    transition: color 0.3s;

    &:hover {
      color: #f39c12;
    }
  }
`;

const Section2 = styled.div`
  height: 20vh;
  background-color: white;
  z-index: 0;
`;

const Footer = styled.footer`
  background-color: #000;
  color: #ffffff;
  text-align: center;
  padding: 20px;
  font-family: 'Old English Text MT', serif;
  position: relative;
`;

const FooterText = styled.p`
  margin: 0;
`;

// Logo Styling
const Logo = styled.img`
  display: block;
  margin: 20px auto; /* Centers the logo and adds space around it */
  filter: invert(1); /* Turns the black logo into white */
  width: 200px; /* Adjust size if necessary */
`;

const ContactPage = () => {
  return (
    <>
      <Section2>
        <FlowerFrameUp />
      </Section2>
      <ContactSection>
        <ContactTitle>Kontakt Oss</ContactTitle>
        <ContactText>
          Ta gjerne kontakt med oss via e-post eller telefon, eller besøk oss på en av våre adresser.
        </ContactText>
        <ContactLink href="mailto:home@rapclinic.no">
          <span className="material-icons">email</span>
          home@rapclinic.no
        </ContactLink>
        <ContactLink href="tel:+4797739908">
          <span className="material-icons">phone</span>
          +47 977 39 908
        </ContactLink>
        <Address>
          <div>
            <a
              href="https://www.google.com/maps?q=Gamle+Drammensvei+25,+1369+Stabekk,+Norge"
              target="_blank"
              rel="noopener noreferrer"
            >
              Gamle Drammensvei 25, 1369 Stabekk, Norge
            </a>
          </div>
          <div>
            <a
              href="https://www.google.com/maps?q=Anthon+Walles+vei+37,+1337+Sandvika,+Norge"
              target="_blank"
              rel="noopener noreferrer"
            >
              Anthon Walles vei 37, 1337 Sandvika, Norge
            </a>
          </div>
        </Address>
        <SocialLinks>
          <a href="https://instagram.com/rapclinic" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://facebook.com/rapclinic" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://twitter.com/rapclinic" target="_blank" rel="noopener noreferrer">Twitter</a>
        </SocialLinks>
      </ContactSection>

      {/* Add logo centered above the footer */}
      <Logo src={studio51Logo} alt="Studio 51 Logo" />

      <Footer>
        <FooterText>© 2025 Studio 51</FooterText>
      </Footer>
    </>
  );
};

export default ContactPage;