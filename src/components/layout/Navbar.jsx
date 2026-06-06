import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { cn } from '../../utils/cn';
import { navLinks } from '../../data/content';
import Container from './Container';

// Custom double-line menu icon matching the Figma header design (Component 126)
const DoubleLineMenu = ({ className }) => (
  <div className={cn("relative w-[45.36px] h-[10.5px] flex flex-col justify-between cursor-pointer", className)}>
    <div className="w-full h-0 border-t-2 border-black" />
    <div className="w-full h-0 border-t-2 border-black" />
  </div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1280) setIsOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <nav
      id="navbar"
      className={cn(
        'w-full z-50 transition-all duration-300',
        // Desktop positioning
        'xl:absolute xl:top-0 xl:left-0 xl:w-[1920px] xl:h-[100px] xl:bg-white',
        // Non-desktop sticky positioning
        'fixed top-0 left-0 right-0 h-16 md:h-20 bg-white/90 backdrop-blur-md border-b border-border xl:border-none'
      )}
    >
      {/* Desktop Artboard Layout (width >= 1280px) */}
      <div className="hidden xl:block relative w-[1920px] h-[100px] mx-auto bg-white">
        {/* Logo */}
        <a
          href="#home"
          id="nav-logo"
          className="absolute left-[160px] top-[27px] w-[201px] h-[46px] flex items-center justify-center text-black font-heading text-[28px] font-normal leading-[46px]"
          style={{ fontFamily: "'Gerbil', 'Syne', sans-serif" }}
        >
          Elementum
        </a>

        {/* Navigation Links */}
        <div className="absolute left-[694px] top-[38px] w-[533px] h-[24px]">
          <a
            href="#home"
            id="nav-home"
            className="absolute left-0 top-0 w-[49px] h-[24px] text-[18px] font-medium text-black hover:text-black/70 transition-all duration-300 hover:scale-105 hover:bg-[#934CEC]/10 hover:shadow-[0_0_15px_rgba(147,76,236,0.25)] rounded-md px-2 py-1 -mx-2 -my-1 text-center"
            style={{ fontFamily: "'Satoshi', sans-serif", lineHeight: '24px' }}
          >
            Home
          </a>
          <a
            href="#studio"
            id="nav-studio"
            className="absolute left-[113px] top-0 w-[52px] h-[24px] text-[18px] font-medium text-black hover:text-black/70 transition-all duration-300 hover:scale-105 hover:bg-[#934CEC]/10 hover:shadow-[0_0_15px_rgba(147,76,236,0.25)] rounded-md px-2 py-1 -mx-2 -my-1"
            style={{ fontFamily: "'Satoshi', sans-serif", lineHeight: '24px' }}
          >
            Studio
          </a>
          <a
            href="#services"
            id="nav-services"
            className="absolute left-[229px] top-0 w-[68px] h-[24px] text-[18px] font-medium text-black hover:text-black/70 transition-all duration-300 hover:scale-105 hover:bg-[#934CEC]/10 hover:shadow-[0_0_15px_rgba(147,76,236,0.25)] rounded-md px-2 py-1 -mx-2 -my-1"
            style={{ fontFamily: "'Satoshi', sans-serif", lineHeight: '24px' }}
          >
            Services
          </a>
          <a
            href="#contact"
            id="nav-contact"
            className="absolute left-[361px] top-0 w-[65px] h-[24px] text-[18px] font-medium text-black hover:text-black/70 transition-all duration-300 hover:scale-105 hover:bg-[#934CEC]/10 hover:shadow-[0_0_15px_rgba(147,76,236,0.25)] rounded-md px-2 py-1 -mx-2 -my-1"
            style={{ fontFamily: "'Satoshi', sans-serif", lineHeight: '24px' }}
          >
            Contact
          </a>
          <a
            href="#faqs"
            id="nav-faqs"
            className="absolute left-[490px] top-0 w-[43px] h-[24px] text-[18px] font-medium text-black hover:text-black/70 transition-all duration-300 hover:scale-105 hover:bg-[#934CEC]/10 hover:shadow-[0_0_15px_rgba(147,76,236,0.25)] rounded-md px-2 py-1 -mx-2 -my-1"
            style={{ fontFamily: "'Satoshi', sans-serif", lineHeight: '24px' }}
          >
            FAQ`s
          </a>
        </div>

        {/* Double-Line Menu Burger (Component 126) */}
        <button
          id="nav-menu-toggle-desktop"
          className="absolute left-[1715px] top-[45px] w-[45.36px] h-[10.5px] p-0 border-none bg-transparent cursor-pointer flex items-center justify-center focus:outline-none transition-all duration-300 hover:scale-110 hover:shadow-[0_0_12px_rgba(147,76,236,0.25)]"
          aria-label="Toggle navigation menu"
        >
          <DoubleLineMenu />
        </button>
      </div>

      {/* Responsive Layout (< 1280px) */}
      <div className="xl:hidden w-full h-full px-4 sm:px-6 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center" id="nav-logo-mobile">
          <span className="text-xl md:text-2xl font-bold tracking-tight text-black" style={{ fontFamily: "'Syne', sans-serif" }}>
            Elementum
          </span>
        </a>

        {/* Hamburger Menu Button */}
        <button
          id="nav-menu-toggle-mobile"
          className="p-2 text-black hover:text-black/70 transition-colors relative z-50 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={24} /> : <div className="w-[30px] h-[8px] flex flex-col justify-between"><div className="w-full h-[2px] bg-black" /><div className="w-full h-[2px] bg-black" /></div>}
        </button>
      </div>

      {/* Mobile Navigation Menu Dropdown */}
      <div
        className={cn(
          'xl:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white border-b border-border px-4 sm:px-6 md:px-8',
          isOpen ? 'max-h-80 opacity-100 pb-6' : 'max-h-0 opacity-0 pointer-events-none'
        )}
      >
        <div className="flex flex-col gap-4 pt-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-base font-medium text-black hover:text-black/70 transition-colors duration-200 py-1"
            >
              {link.label === 'FAQs' ? 'FAQ`s' : link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
