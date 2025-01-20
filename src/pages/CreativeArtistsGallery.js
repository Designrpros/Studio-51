import React from 'react';
import styled from 'styled-components';

// Plassholderbilder for kategorier
import Vinyl from '../Images/Vinyl.png';
import Camera from '../Images/Camera.png';

const CreativeCategories = () => {
  // Array med kategorier, plassholderbilder og beskrivelser
  const categories = [
    { title: "Musikkproduksjon", image: Vinyl, description: "Skape og produsere musikkspor i ulike sjangre." },
    { title: "Filmproduksjon", image: Camera, description: "Regissere, filme og redigere fengende historier." },
    { title: "Grafisk Design", image: Vinyl, description: "Designe visuelt innhold for merkevarebygging og markedsføring." },
    { title: "Gaming Grupper", image: Camera, description: "Bygge samfunn og arrangere gaming events." },
    { title: "Sosiale Medier & Markedsføring", image: Vinyl, description: "Promotere merker gjennom innovative strategier." },
    { title: "Podcasting", image: Camera, description: "Spille inn og dele engasjerende podcast-episoder." },
    { title: "Informasjonsteknologi", image: Vinyl, description: "Utvikle IT-løsninger for å effektivisere operasjoner." },
    { title: "Kunstig Intelligens", image: Camera, description: "Utforske AI-innovasjoner for kreative løsninger." },
    { title: "Festival Arrangjør", image: Vinyl, description: "Locale artister, aktiviteter" },
    { title: "Administrative Aktiviteter", image: Camera, description: "Administrere og organisere studiooperasjoner." },
  ];

  return (
    <CategoriesSection>
      <SectionTitle>Hva Vi Gjør</SectionTitle>
      <CategoriesGrid>
        {categories.map((category, index) => (
          <CategoryCard key={index}>
            <ImageContainer>
              <CategoryImage src={category.image} alt={category.title} />
            </ImageContainer>
            <CategoryTitle>{category.title}</CategoryTitle>
            <CategoryDescription>{category.description}</CategoryDescription>
          </CategoryCard>
        ))}
      </CategoriesGrid>
    </CategoriesSection>
  );
};

// Styled Components
const CategoriesSection = styled.section`
  padding: 80px 40px;
  background-color: #ffffff;
  color: #000;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 80px;
  font-weight: bold;
  margin-bottom: 40px;
`;

const CategoriesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); /* Responsivt gridlayout */
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
`;

const CategoryCard = styled.div`
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;
  position: relative; /* Lagt til for konsistens */
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 160px; /* Redusert høyde for mindre bilder */
  overflow: hidden;
  border-radius: 10px;
  margin-bottom: 20px;
  position: relative; /* Lagt til for konsistens */
`;

const CategoryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain; /* Sørger for at hele bildet får plass i containeren */
`;

const CategoryTitle = styled.h3`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 10px;
`;

const CategoryDescription = styled.p`
  font-size: 16px;
  color: #555555;
`;

export default CreativeCategories;