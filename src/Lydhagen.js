import React from 'react';
import Hero from './pages/Hero';
import Info from './pages/Info1';
import Info1 from './pages/Info';
import CreativeArtistsGallery from './pages/CreativeArtistsGallery';
import FestivalInfo from './pages/FestivalInfo';
import PerformersGallery from './pages/PerformersGallery';

const Lydhagen = () => {
  return (
    <div>
      <Hero />
      <Info1 />
      <CreativeArtistsGallery />
      <Info />
      <PerformersGallery />
      <FestivalInfo />
    </div>
  );
};

export default Lydhagen;