import { useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import HeroSection from './components/sections/HeroSection';
import AboutSection1 from './components/sections/AboutSection1';
import AboutSection2 from './components/sections/AboutSection2';
import ServicesSection from './components/sections/ServicesSection';
import TestimonialsSection from './components/sections/TestimonialsSection';
import NewsletterSection from './components/sections/NewsletterSection';
import Footer from './components/layout/Footer';

function App() {
  const [scale, setScale] = useState(1);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const desktop = width >= 1280;
      setIsDesktop(desktop);
      setScale(desktop && width < 1920 ? width / 1920 : 1);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden relative flex flex-col items-center">
      <div
        className="w-full bg-white relative"
        style={isDesktop ? {
          width: '1920px',
          minWidth: '1920px',
          height: `${6665 * scale}px`,
          overflow: 'hidden'
        } : {}}
      >
        <div
          className="relative bg-white"
          style={isDesktop ? {
            width: '1920px',
            minWidth: '1920px',
            height: '6665px',
            transform: `scale(${scale})`,
            transformOrigin: 'top center',
            position: 'absolute',
            left: '50%',
            marginLeft: '-960px'
          } : {}}
        >
          <Navbar />
          <main>
            <HeroSection />
            <AboutSection1 />
            <AboutSection2 />
            <ServicesSection />
            <TestimonialsSection />
            <NewsletterSection />
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
