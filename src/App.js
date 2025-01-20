import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreativeArtistView from './pages/CreativeArtistView';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Lydhagen from './Lydhagen';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Lydhagen />} />
        
        {/* Artist page */}
        <Route path="/artist/:artistId" element={<CreativeArtistView />} />
        
        {/* Add :artistId to these routes to make them dynamic */}
        <Route path="/about/:artistId" element={<About />} />
        <Route path="/projects/:artistId" element={<Projects />} />
        <Route path="/contact/:artistId" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;