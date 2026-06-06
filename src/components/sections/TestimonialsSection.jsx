import { useRef } from 'react';
import Container from '../layout/Container';
import { testimonialsContent } from '../../data/content';

// Import images
import ellipse263 from '../../assets/images/Ellipse 263.png';
import person2 from '../../assets/images/Ellipse 267.png';
import person3 from '../../assets/images/Ellipse 268.png';
import person4 from '../../assets/images/Ellipse 266.png';
import person5 from '../../assets/images/Ellipse 269.png';
import person6 from '../../assets/images/Ellipse 270.png';
import person7 from '../../assets/images/Ellipse 265.png';
import person8 from '../../assets/images/Ellipse 264.png';

// Double quotation mark SVG
const QuoteMark = ({ className, rotate }) => (
  <svg 
    className={className} 
    viewBox="0 0 69 49" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    style={{ transform: rotate ? 'rotate(180deg)' : 'none' }}
  >
    <rect x="37" width="32" height="49" rx="16" fill="#934CEC" fillOpacity="0.3" />
    <rect width="32" height="49" rx="16" fill="#934CEC" fillOpacity="0.3" />
  </svg>
);

const TestimonialsSection = () => {
  const ref = useRef(null);

  return (
    <section
      ref={ref}
      id="testimonials"
      className="relative w-full xl:w-[1920px] xl:h-[653px] xl:absolute xl:top-[4517px] xl:left-0 bg-white py-20 md:py-28 xl:p-0 overflow-hidden"
    >
      {/* Desktop Artboard Layout (width >= 1280px) */}
      <div className="hidden xl:block relative w-[1920px] h-[653px] bg-white">
        
        {/* Rectangle 657 (Heading Green Pill Badge) */}
        <div className="absolute left-[608px] top-0 w-[207px] h-[70px] bg-[#D7EEDD] rounded-[100px] z-0" />

        {/* Vector 5 (Heading Yellow Underline) */}
        <div className="absolute left-[863px] top-[119px] w-[371px] h-[30px] z-0">
          <svg 
            width="371" 
            height="30" 
            viewBox="0 0 594 50" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            className="w-full h-full text-[#FFC250]"
          >
            <path 
              d="M72.1335 3H538.634L0.133545 27H594.134L293.134 53" 
              stroke="currentColor" 
              strokeWidth="6" 
            />
          </svg>
        </div>

        {/* Heading */}
        <h2 
          className="absolute left-[627px] top-[4px] w-[666px] h-[132px] text-[56px] leading-[66px] font-normal text-black text-center z-10"
          style={{ fontFamily: "'Gerbil', 'Syne', sans-serif", letterSpacing: '-0.025em' }}
        >
          What our customer says About Us
        </h2>

        {/* Quote Block Background Card (Rectangle 663) */}
        <div className="absolute left-[520px] top-[194px] w-[879px] h-[358px] bg-[#D7EEDD]/30 rounded-[60px] z-0" />

        {/* Quote text */}
        <blockquote 
          className="absolute left-[608px] top-[247px] w-[703px] h-[252px] text-[30px] leading-[42px] text-black text-center font-normal z-10"
          style={{ fontFamily: "'Satoshi', sans-serif" }}
        >
          {testimonialsContent.quote}
        </blockquote>

        {/* Quote Opening Mark */}
        <QuoteMark className="absolute left-[570px] top-[231px] w-[69px] h-[49px] z-10" />

        {/* Quote Closing Mark */}
        <QuoteMark className="absolute left-[1157px] top-[464px] w-[69px] h-[49px] z-10" rotate={true} />

        {/* --- Floating Avatars Left Side --- */}
        {/* Ellipse 263 */}
        <div className="absolute left-[161px] top-[25px] w-[125px] h-[123px] rounded-full overflow-hidden border-2 border-white shadow-card z-10">
          <img 
            src={ellipse263} 
            className="w-full h-full object-cover" 
            alt="Customer 1" 
          />
        </div>
        {/* Ellipse 267 */}
        <div className="absolute left-[38px] top-[469px] w-[123px] h-[123px] rounded-full overflow-hidden border-2 border-white shadow-card z-10">
          <img src={person2} className="w-full h-full object-cover" alt="Customer 2" />
        </div>
        {/* Ellipse 268 */}
        <div className="absolute left-[204px] top-[253px] w-[216px] h-[216px] rounded-full overflow-hidden border-2 border-white shadow-card z-10">
          <img src={person3} className="w-full h-full object-cover" alt="Customer 3" />
        </div>
        {/* Ellipse 266 */}
        <div className="absolute left-[71px] top-[219px] w-[74px] h-[74px] rounded-full overflow-hidden border-2 border-white shadow-card z-10">
          <img src={person4} className="w-full h-full object-cover" alt="Customer 4" />
        </div>

        {/* --- Floating Avatars Right Side --- */}
        {/* Ellipse 270 */}
        <div className="absolute left-[1643px] top-[4px] w-[146px] h-[146px] rounded-full overflow-hidden border-2 border-white shadow-card z-10">
          <img src={person6} className="w-full h-full object-cover" alt="Customer 6" />
        </div>
        {/* Ellipse 269 */}
        <div className="absolute left-[1587px] top-[358px] w-[295px] h-[295px] rounded-full overflow-hidden border-2 border-white shadow-card z-10">
          <img src={person5} className="w-full h-full object-cover" alt="Customer 5" />
        </div>
        {/* Ellipse 264 */}
        <div className="absolute left-[1478px] top-[83px] w-[90px] h-[90px] rounded-full overflow-hidden border-2 border-white shadow-card z-10">
          <img src={person8} className="w-full h-full object-cover" alt="Customer 4 duplicated" />
        </div>
        {/* Ellipse 265 */}
        <div className="absolute left-[1500px] top-[236px] w-[112px] h-[112px] rounded-full overflow-hidden border-2 border-white shadow-card z-10">
          <img src={person7} className="w-full h-full object-cover" alt="Customer 3 duplicated" />
        </div>
      </div>

      {/* Responsive Layout (< 1280px) */}
      <div className="xl:hidden">
        <Container className="relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-text-primary" style={{ fontFamily: "'Syne', sans-serif" }}>
              What our customer says About Us
            </h2>
          </div>

          <div className="relative max-w-4xl mx-auto bg-gray-50 border border-border rounded-2xl p-8 md:p-12 shadow-sm text-center">
            <span className="absolute -top-6 left-6 text-7xl font-serif text-[#000000] select-none">“</span>
            <p className="text-lg sm:text-xl md:text-2xl text-text-primary leading-relaxed">
              {testimonialsContent.quote}
            </p>
            <span className="absolute -bottom-12 right-6 text-7xl font-serif text-[#000000] select-none">”</span>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default TestimonialsSection;
