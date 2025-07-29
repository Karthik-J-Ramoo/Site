// START OF CODE FOR src/app/page.jsx
import React from 'react';
import Navbar from './Components/Navbar/Navbar.jsx';
import HeroSection from './Components/HeroSection/HeroSection.jsx';
import SecondaryNav from './Components/SecondaryNav/SecondaryNav.jsx';
import SiteLocation from './Components/SiteLocation/SiteLocation.jsx';
import VegetationAnalysis from './Components/VegetationAnalysis/VegetationAnalysis.jsx';
import ClimateConditions from './Components/ClimateConditions/ClimateConditions.jsx';
import Footer from './Components/Footer/Footer.jsx';


export default function App() {
  return (
    // Added flex flex-col to make the content stretch and push footer down
    <div className="flex flex-col min-h-screen bg-white font-poppins antialiased">
      <Navbar />
      {/* Main content area that will grow to push the footer to the bottom */}
      <main className="flex-grow">
        <HeroSection />
        <SecondaryNav />
        <SiteLocation />
        <VegetationAnalysis />
        <ClimateConditions />
      </main>
      <Footer />
    </div>
  );
}
// END OF CODE FOR src/app/page.jsx
