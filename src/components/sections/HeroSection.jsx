import { useRef } from 'react';
import Container from '../layout/Container';
import { heroContent } from '../../data/content';

// Import images
import person1 from '../../assets/images/Ellipse 261.png';
import person2 from '../../assets/images/Ellipse 255.png';
import person3 from '../../assets/images/Ellipse 256.png';
import person4 from '../../assets/images/Ellipse 262.png';
import person5 from '../../assets/images/Ellipse 257.png';
import person6 from '../../assets/images/Ellipse 258.png';
import person7 from '../../assets/images/Ellipse 259.png';
import person8 from '../../assets/images/Ellipse 260.png';

// Green squiggle — left decorative element (Figma left squiggle Vector)
const GreenSquiggle = ({ className }) => (
  <svg className={className} viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 45C15 15 25 55 35 25C45 -5 55 45 65 15C75 -15 80 25 75 35" stroke="#BEFF6C" strokeWidth="4" strokeLinecap="round" fill="none"/>
  </svg>
);

const Vector2511 =({className}) => (
  <svg className={className} viewBox="0 0 80 60" fill="none" xmlns="src/assets/images/vector2511.svg">
    <path d="M5 45C15 15 25 55 35 25C45 -5 55 45 65 15C75 -15 80 25 75 35" stroke="#BEFF6C" strokeWidth="4" strokeLinecap="round" fill="none"/>
  </svg>
);

// Orange crosshair / asterisk — right side decorative element (Figma right accent)
const OrangeShape = ({ className }) => (
  <svg className={className} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="20" r="6" fill="none" stroke="#FF8C42" strokeWidth="2.5"/>
    <path d="M20 7V13M20 27V33M7 20H13M27 20H33" stroke="#FF8C42" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

//Purple semicircle
export const CustomShape = () => {
  return (
    <div
      style={{
        position: 'absolute',
        top: '425.21px',
        left: '1650.06px',
        width: '155.76px',
        height: '155.76px',
        opacity: 1,
        transform: 'rotate(-5deg)',
        zIndex: 10
      }}
    >
      <svg viewBox="0 0 117 146" fill="none" className="w-full h-full">
        <path
          d="M77.8783 -4.93067e-06C86.7352 5.11355 94.4983 11.9216 100.724 20.0353C106.95 28.149 111.517 37.4095 114.164 47.2882C116.811 57.1668 117.486 67.4701 116.151 77.6097C114.816 87.7494 111.497 97.5268 106.384 106.384C101.27 115.241 94.4622 123.004 86.3484 129.23C78.2347 135.455 68.9742 140.022 59.0955 142.669C49.2169 145.316 38.9136 145.992 28.774 144.657C18.6344 143.322 8.85694 140.003 -7.20974e-06 134.889L38.9391 67.4446L77.8783 -4.93067e-06Z"
          fill="#934CEC"
        />
      </svg>
    </div>
  );
};


// Black squiggle — among the team photos (Figma bottom-left vector)
const BlackSquiggle = ({ className }) => (
  <svg className={className} viewBox="0 0 60 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 10 C 50 20, 5 40, 45 50 C 5 70, 55 90, 10 110" stroke="#1B1B1B" strokeWidth="4.5" strokeLinecap="round" fill="none"/>
  </svg>
);

// Circular image component — mobile staggered row
const CircleImage = ({ src, alt, className = '' }) => (
  <div className={`rounded-full overflow-hidden flex-shrink-0 border-2 border-white shadow-card ${className}`}>
    <img src={src} alt={alt} className="w-full h-full object-cover" loading="lazy" />
  </div>
);

const HeroSection = () => {
  const ref = useRef(null);

  return (
    <section
      ref={ref}
      id="home"
      className="relative w-full xl:w-[1920px] xl:h-[1254px] mx-auto bg-white pt-24 md:pt-32 pb-16 md:pb-24 xl:p-0 overflow-hidden"
    >
      {/* ── DESKTOP ARTBOARD (>= 1280px) ──────────────────────────────── */}
      <div className="hidden xl:block relative w-[1920px] h-[1254px] bg-white">

        {/* Yellow curved underline — Vector 5, under "thinkers and" line 1 */}
        <svg 
        width="594" 
        height="50" viewBox="0 0 594 50"
        fill='none'
        style={{
          position:"absolute",
          top:"345px",
          left:"666px",
          overflow: "visible"
        }}>
          
          <path d="M72.1335 3H538.634L0.133545 27H594.134L293.134 53" 
          stroke="#FFC250" 
          strokeWidth="6"
          />
        </svg>

        {/* Pink pill — Rectangle 657 — behind "changing" on line 2 */}
        {/* Figma: left 1235px, top 367px, w 405px, h 137px, #FFC2EA, radius 100px */}
        <div className="absolute left-[1235px] top-[367px] w-[405px] h-[137px] bg-[#FFC2EA] rounded-[100px] z-0" />

        {/* Green pill — Rectangle 658 — behind "status" on line 3 */}
        {/* Figma: left 561px, top 498px, w 456px, h 109px, #D7EEDD, radius 100px */}
        <div className="absolute left-[561px] top-[498px] w-[456px] h-[109px] bg-[#D7EEDD] rounded-[100px] z-0" />

        {/* Main heading */}
        {/* Figma: left 308px, top 243px, w 1305px, h 378px, 100px/126px, font Gerbil */}
        <h1
          className="absolute left-[308px] top-[243px] w-[1305px] h-[378px] text-[100px] leading-[126px] font-normal text-black text-center z-10 select-none"
          style={{ fontFamily: "'Gerbil', 'Syne', sans-serif" }}
        >
          The thinkers and<br />
          doers were changing<br />
          the status Quo with
        </h1>

        {/* Subtitle */}
        {/* Figma: left 545px, top 648px, w 831px, 24px/36px, Satoshi */}
        <p
          className="absolute left-[545px] top-[648px] w-[831px] h-[72px] text-[24px] leading-[36px] font-normal text-black text-center z-10"
          style={{ fontFamily: "'Satoshi', sans-serif" }}
        >
          We are a team of strategists, designers communicators, researchers. Togeather,<br />
          we belive that progress only hghappens when you refuse to play things safe.
        </p>

        {/* Purple semicircle — CustomShape */}
        <CustomShape />

        {/* Black Stripe on left side */}
        {/* Vector 2511 */}
        <svg
          width="347"
          height="76"
          viewBox="0 0 347 76"
          style={{
            position: 'absolute',
            top: '602.5px',
            left: '53.5px',
            overflow: 'visible' // Ensures the stroke isn't clipped
          }}
        >
          <path 
            d="M3.99996 3.81927C36.9367 14.0704 103.271 45.1331 71.6979 87.3753C32.2314 140.178 4 121.61 4 157.005C4 192.4 57.006 192.4 57.006 267.833C57.006 328.179 15.427 351.389 4 350.809"

            stroke="#0E0E0E" 
            strokeWidth="8" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />
        </svg>

          {/* vector 2510 */}
          <svg
            width="358"
            height="77"
            viewBox="0 0 358 77" 
            style={{
              position: 'absolute',
              top: '600.5px',
              left: '-8.5px',
              transformOrigin: 'top left', // This is the fix for alignment
              overflow: 'visible'
            }}
          >
            <path 
              d="M-0.125563 3.81958C32.8912 14.0867 91.0122 45.1979 59.3623 87.5062C19.8 140.391 -8.5 121.794 -8.5 157.245C-8.5 192.696 44.6348 192.696 44.6348 268.246C44.6348 328.686 2.95478 362.393 -8.5 361.812" 
              stroke="#FF7171" 
              strokeWidth="8" 
              fill="none" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
            />
          </svg>
      
        {/* Team photos row — starts at absolute top 801px */}
        <div className="absolute left-0 top-[801px] w-[1920px] h-[453px] z-20">

          {/* Black squiggle on far left */}
          <BlackSquiggle className="absolute left-[80px] top-[150px] w-[30px] h-[120px]" />

          {/* Ellipse 262 — far left, lower */}
          <div className="absolute left-[38px] top-[195px] w-[226px] h-[226px] rounded-full overflow-hidden border border-black/5 shadow-card transition-all duration-300 hover:scale-110 hover:shadow-[0_0_25px_rgba(147,76,236,0.35)] hover:border-[#934CEC] hover:z-30 cursor-pointer">
            <img src={person4} className="w-full h-full object-cover" alt="Team member 4" />
          </div>

          {/* Ellipse 261 — second from left */}
          <div className="absolute left-[199px] top-[139px] w-[226px] h-[226px] rounded-full overflow-hidden border border-black/5 shadow-card transition-all duration-300 hover:scale-110 hover:shadow-[0_0_25px_rgba(147,76,236,0.35)] hover:border-[#934CEC] hover:z-30 cursor-pointer">
            <img src={person1} className="w-full h-full object-cover" alt="Team member 1" />
          </div>

          {/* Ellipse 255 — center-left, highest */}
          <div className="absolute left-[553px] top-[0px] w-[226px] h-[226px] rounded-full overflow-hidden border border-black/5 shadow-card transition-all duration-300 hover:scale-110 hover:shadow-[0_0_25px_rgba(147,76,236,0.35)] hover:border-[#934CEC] hover:z-30 cursor-pointer">
            <img src={person2} className="w-full h-full object-cover" alt="Team member 2" />
          </div>

          {/* Ellipse 256 — center, lower */}
          <div className="absolute left-[677px] top-[226px] w-[226px] h-[227px] rounded-full overflow-hidden border border-black/5 shadow-card transition-all duration-300 hover:scale-110 hover:shadow-[0_0_25px_rgba(147,76,236,0.35)] hover:border-[#934CEC] hover:z-30 cursor-pointer">
            <img src={person3} className="w-full h-full object-cover" alt="Team member 3" />
          </div>

          {/* Ellipse 257 — center-right */}
          <div className="absolute left-[977px] top-[55px] w-[225px] h-[227px] rounded-full overflow-hidden border border-black/5 shadow-card transition-all duration-300 hover:scale-110 hover:shadow-[0_0_25px_rgba(147,76,236,0.35)] hover:border-[#934CEC] hover:z-30 cursor-pointer">
            <img src={person5} className="w-full h-full object-cover" alt="Team member 5" />
          </div>

          {/* Ellipse 258 — right-center */}
          <div className="absolute left-[1144px] top-[139px] w-[226px] h-[226px] rounded-full overflow-hidden border border-black/5 shadow-card transition-all duration-300 hover:scale-110 hover:shadow-[0_0_25px_rgba(147,76,236,0.35)] hover:border-[#934CEC] hover:z-30 cursor-pointer">
            <img src={person6} className="w-full h-full object-cover" alt="Team member 6" />
          </div>

          {/* Ellipse 259 — far right, top */}
          <div className="absolute left-[1414px] top-[0px] w-[226px] h-[226px] rounded-full overflow-hidden border border-black/5 shadow-card transition-all duration-300 hover:scale-110 hover:shadow-[0_0_25px_rgba(147,76,236,0.35)] hover:border-[#934CEC] hover:z-30 cursor-pointer">
            <img src={person7} className="w-full h-full object-cover" alt="Team member 7" />
          </div>

          {/* Ellipse 260 — far right, lower */}
          <div className="absolute left-[1656px] top-[159px] w-[226px] h-[227px] rounded-full overflow-hidden border border-black/5 shadow-card transition-all duration-300 hover:scale-110 hover:shadow-[0_0_25px_rgba(147,76,236,0.35)] hover:border-[#934CEC] hover:z-30 cursor-pointer">
            <img src={person8} className="w-full h-full object-cover" alt="Team member 8" />
          </div>
          {/* Ellipse 259 — center-left, highest */}
          <div className="absolute left-[553px] top-[0px] w-[226px] h-[226px] rounded-full overflow-hidden border border-black/5 shadow-card transition-all duration-300 hover:scale-110 hover:shadow-[0_0_25px_rgba(147,76,236,0.35)] hover:border-[#934CEC] hover:z-30 cursor-pointer">
            <img src={person2} className="w-full h-full object-cover" alt="Team member 2" />
          </div>

          {/* Ellipse 260 — center, lower */}
          <div className="absolute left-[960px] top-[1656px] w-[226px] h-[227px] rounded-full overflow-hidden border border-black/5 shadow-card transition-all duration-300 hover:scale-110 hover:shadow-[0_0_25px_rgba(147,76,236,0.35)] hover:border-[#934CEC] hover:z-30 cursor-pointer">
            <img src={person3} className="w-full h-full object-cover" alt="Team member 3" />
          </div>
        </div>
      </div>

      {/* ── RESPONSIVE (< 1280px) ──────────────────────────────────────── */}
      <div className="xl:hidden">
        <div className="relative z-10 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">

          {/* Hero Heading */}
          <div className="text-center max-w-5xl mx-auto mb-6 md:mb-8">
            <h1
              className="text-[2.1rem] sm:text-5xl md:text-6xl font-medium leading-[1.3] md:leading-[1.4] tracking-tight text-black"
              style={{ fontFamily: "'Gerbil', 'Syne', sans-serif" }}
            >
              The{' '}
              <span className="relative inline-block pb-2 mr-2">
                <span className="relative z-10 font-medium">thinkers and</span>
                <svg
                  className="absolute bottom-0 left-0 w-full h-3 text-[#FFC250] pointer-events-none"
                  viewBox="0 0 320 12"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path d="M3 8C80 2 240 2 317 8" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
                </svg>
              </span>{' '}
              doers were{' '}
              <span className="px-3.5 py-1 sm:px-5 sm:py-2 bg-[#FFC2EA] rounded-full inline-block align-middle mx-1">
                changing
              </span>{' '}
              the{' '}
              <span className="px-3.5 py-1 sm:px-5 sm:py-2 bg-[#D7EEDD] rounded-full inline-block align-middle mx-1">
                status
              </span>{' '}
              Quo with
            </h1>
          </div>

          {/* Subtitle */}
          <p className="text-center text-gray-600 text-xs sm:text-sm md:text-base max-w-md md:max-w-xl mx-auto mb-16 md:mb-24 leading-relaxed">
            {heroContent.subtitle}
          </p>

          {/* Team photos — staggered row */}
          <div className="relative w-full max-w-6xl mx-auto mt-12">
            <div className="flex items-center justify-between gap-1.5 sm:gap-2 md:gap-4 lg:gap-6 py-6 overflow-x-auto">
              <div className="translate-y-8 flex-shrink-0">
                <CircleImage src={person4} alt="Team member 4" className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20" />
              </div>
              <div className="-translate-y-4 flex-shrink-0">
                <CircleImage src={person1} alt="Team member 1" className="w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24" />
              </div>
              <div className="-translate-y-12 flex-shrink-0">
                <CircleImage src={person2} alt="Team member 2" className="w-16 h-16 sm:w-24 sm:h-24 md:w-28 md:h-28" />
              </div>
              <div className="translate-y-6 flex-shrink-0">
                <CircleImage src={person3} alt="Team member 3" className="w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24" />
              </div>
              <div className="-translate-y-8 flex-shrink-0">
                <CircleImage src={person5} alt="Team member 5" className="w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24" />
              </div>
              <div className="translate-y-2 flex-shrink-0">
                <CircleImage src={person6} alt="Team member 6" className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20" />
              </div>
              <div className="-translate-y-12 flex-shrink-0">
                <CircleImage src={person7} alt="Team member 7" className="w-16 h-16 sm:w-24 sm:h-24 md:w-28 md:h-28" />
              </div>
              <div className="translate-y-6 flex-shrink-0">
                <CircleImage src={person8} alt="Team member 8" className="w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
