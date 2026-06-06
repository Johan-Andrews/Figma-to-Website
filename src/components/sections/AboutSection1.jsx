import { useRef } from 'react';
import Container from '../layout/Container';
import { aboutSection1 } from '../../data/content';
import meetingImage from '../../assets/images/image 348.png';

const AboutSection1 = () => {
  const ref = useRef(null);

  return (
    <section
      ref={ref}
      id="studio"
      className="relative w-full xl:w-[1920px] xl:h-[600px] xl:absolute xl:top-[1567px] xl:left-0 bg-white py-16 md:py-24 lg:py-32 xl:p-0 xl:overflow-visible overflow-hidden"
    >
      {/* Desktop Artboard Layout (width >= 1280px) */}
      <div className="hidden xl:block relative w-[1920px] h-[600px] bg-white overflow-visible">

        {/* Ellipse 734 — soft coral/pink radial glow top-right */}
        <div
          className="absolute pointer-events-none z-0"
          style={{
            left: '877px',
            top: '-60px',
            width: '560px',
            height: '560px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255,160,140,0.55) 0%, rgba(255,160,140,0) 70%)',
          }}
        />

        {/* Polygon 3 — red/salmon skewed rectangle at top-right (partially behind circle) */}
        <div
          className="absolute pointer-events-none z-0"
          style={{
            left: '1552px',
            top: '-34px',
            width: '220px',
            height: '220px',
            background: '#FF7171',
            transform: 'rotate(32.03deg)',
          }}
        />

        {/* Red wavy line behind circle */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-visible">
          <svg 
            width="1483" 
            height="654" 
            viewBox="0 0 1483 654" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="absolute pointer-events-none overflow-visible"
            style={{
              left: '270px',
              top: '233px'
            }}
          >
            <g filter="url(#filter0_d_2_9)">
              <path 
                d="M1488.65 134.467C1446.64 22.3687 1055.93 -89.3365 963 120.86C835.832 408.503 777.269 398.935 693.689 397.279C610.11 395.623 306.809 225.312 181.153 337.967C41.357 463.299 144.653 654.467 12.6534 618.727" 
                stroke="#FF6D6D" 
                strokeWidth="5"
              />
            </g>
            <defs>
              <filter id="filter0_d_2_9" x="0" y="0" width="1502.99" height="653.604" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="16"/>
                <feGaussianBlur stdDeviation="6"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_9"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_9" result="shape"/>
              </filter>
            </defs>
          </svg>
        </div>

        {/* Image 348 — circular team photo, right side */}
        <div
          className="absolute overflow-hidden z-10"
          style={{
            left: '1159px',
            top: '0px',
            width: '600px',
            height: '600px',
            borderRadius: '50%',
            border: '4px solid white',
            boxShadow: '0 4px 24px rgba(0,0,0,0.12)',
          }}
        >
          <img src={meetingImage} alt="Team collaboration" className="w-full h-full object-cover" />
        </div>

        {/* Text block — left side, Group 352 */}
        <div
          className="absolute z-10"
          style={{ left: '161px', top: '126px', width: '998px' }}
        >
          {/* Rectangle — green pill behind "today" on second line */}
          <div
            className="absolute pointer-events-none z-0"
            style={{
              left: '400px',
              top: '71px',
              width: '222px',
              height: '84px',
              background: '#D7EEDD',
              borderRadius: '100px',
            }}
          />

          {/* Heading */}
          <h2
            className="absolute left-0 top-0 text-black z-10"
            style={{
              fontFamily: "'Gerbil', 'Syne', sans-serif",
              fontSize: '56px',
              lineHeight: '76px',
              fontWeight: 400,
              width: '724px',
            }}
          >
            <span className="relative inline-block">
              Tomorrow
              {/* Yellow curved underline matching HeroSection style */}
              <svg 
                viewBox="0 0 594 50" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg" 
                preserveAspectRatio="none"
                className="absolute left-0 bottom-[-7px] w-[105%] h-[22px] pointer-events-none text-[#FFC250]"
              >
                <path 
                  d="M72.1335 3H538.634L0.133545 27H594.134L293.134 53" 
                  stroke="currentColor" 
                  strokeWidth="6" 
                />
              </svg>
            </span>{' '}
            should be<br />
            better than today
          </h2>

          {/* Description */}
          <p
            className="absolute left-0 text-[#1B1B1B] z-10"
            style={{
              fontFamily: "'Satoshi', sans-serif",
              fontSize: '24px',
              lineHeight: '36px',
              fontWeight: 400,
              top: '175px',
              width: '998px',
            }}
          >
            We are a team of strategists, designers<br />
            communicators, researchers. Togeather, we belive that progress only<br />
            happens when you refuse to play things safe.
          </p>

          {/* Read more link with arrow */}
          <a
            href="#about-details"
            className="absolute z-10 flex items-center gap-4 text-black hover:text-black/70 transition-colors"
            style={{
              fontFamily: "'Satoshi', sans-serif",
              fontSize: '18px',
              fontWeight: 500,
              lineHeight: '24px',
              top: '320px',
              left: '0px',
            }}
          >
            <span>Read more</span>
            <svg width="144" height="10" viewBox="0 0 144 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 5H142M142 5L138 1M142 5L138 9" stroke="black" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Responsive Layout (< 1280px) */}
      <div className="xl:hidden">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-text-primary leading-tight mb-6" style={{ fontFamily: "'Syne', sans-serif" }}>
                <span className="relative inline-block px-2">
                  Tomorrow
                  <span className="absolute bottom-0 left-0 w-full h-2 bg-[#FFC250]/40 -z-10" />
                </span>{' '}
                should be better than{' '}
                <span className="px-4 py-1.5 bg-[#D7EEDD] rounded-full inline-block font-normal">
                  today
                </span>
              </h2>
              <p className="text-text-secondary text-sm md:text-base leading-relaxed mb-8">
                {aboutSection1.description}
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-wider text-text-primary hover:text-accent-purple transition-colors duration-200 group"
              >
                Read more
                <span className="w-10 h-0.5 bg-black transition-all duration-300 group-hover:w-16" />
              </a>
            </div>

            {/* Right: Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-72 h-72 sm:w-96 sm:h-96 md:w-[450px] md:h-[450px] rounded-full overflow-hidden border-4 border-white shadow-card">
                <img src={meetingImage} alt="Team collaboration" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default AboutSection1;
