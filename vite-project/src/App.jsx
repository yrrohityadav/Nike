import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import SlidingText from './components/SlidingText';
import ImgTab from './components/ImgTab';
import Tab3 from './components/Tab3';
import Feature from './components/Feature';
import Footer from './components/Footer';
import Resources from './components/Resources';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import your page components
import NewFeatured from './pages/NewFeatured';
import Men from './pages/Men';
import Women from './pages/Women';
import Kids from './pages/Kids';
import Sale from './pages/Sale';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Routes for pages that include the shared layout */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <SlidingText />
              <ImgTab />
              <Tab3 />
              <Feature />
              <Footer />
              <Resources />
            </>
          }
        />

        {/* Routes for pages that do not include the shared layout */}
        <Route path="/new-featured" element={<NewFeatured />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/sale" element={<Sale />} />
      </Routes>
    </Router>
  );
};

export default App;
