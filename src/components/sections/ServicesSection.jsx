import { useRef } from 'react';
import Container from '../layout/Container';
import { servicesContent } from '../../data/content';
import rect661 from '../../assets/images/Rectangle 661.png';

// Custom caution sticker collage matching the Figma design (Component 127 / Rectangle 661)
const CautionSticker = ({ className }) => (
  <div className={`relative w-[160px] h-[160px] rounded-full overflow-hidden flex-shrink-0 bg-[#E5E5E5] border border-black/5 shadow-sm select-none ${className}`}>
    {/* Wrinkled paper texture mockup */}
    <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 100 100">
      <path d="M 0 30 Q 30 20 60 40 T 100 30" stroke="black" strokeWidth="0.5" fill="none" />
      <path d="M 10 90 Q 40 70 70 80 T 100 60" stroke="black" strokeWidth="0.5" fill="none" />
    </svg>
    
    {/* Yellow Caution Tape */}
    <div 
      className="absolute top-0 left-6 w-[50px] h-[120%] bg-[#FFE566] -rotate-12 flex items-center justify-center -translate-y-2"
      style={{ boxShadow: '2px 2px 6px rgba(0,0,0,0.15)' }}
    >
      <span className="text-[12px] font-bold text-black uppercase tracking-widest whitespace-nowrap rotate-90 scale-90">
        tomorrow
      </span>
    </div>

    {/* Orange overlapping circle */}
    <div className="absolute bottom-4 right-6 w-16 h-16 rounded-full bg-[#FF8C42] opacity-90" />

    {/* Green circle with wavy line */}
    <div className="absolute top-6 right-3 w-[70px] h-[70px] rounded-full bg-[#BEFF6C] flex items-center justify-center shadow-sm">
      <svg className="w-[60%] h-[60%]" viewBox="0 0 20 20" fill="none">
        <path d="M 2 10 Q 6 5 10 10 T 18 10" stroke="#1B1B1B" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    </div>

    {/* Big black letter "Q" overlay */}
    <span className="absolute bottom-2 left-4 text-3xl font-extrabold text-black leading-none opacity-80" style={{ fontFamily: "'Syne', sans-serif" }}>
      Q
    </span>
  </div>
);

const ServicesSection = () => {
  const ref = useRef(null);

  return (
    <section
      ref={ref}
      id="services"
      className="relative w-full xl:w-[1618px] xl:h-[856px] xl:absolute xl:top-[3345px] xl:left-[143px] bg-white py-16 md:py-24 lg:py-28 xl:p-0 xl:overflow-visible overflow-hidden"
    >
      {/* Desktop Artboard Layout (width >= 1280px) */}
      <div className="hidden xl:block relative w-[1618px] h-[856px] bg-white overflow-visible">
        
        {/* Vector 5 (Yellow Underline) */}
        <div className="absolute left-[0px] top-[204px] w-[371px] h-[30px] z-0">
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

        {/* Rectangle 657 (Green Pill behind "can") */}
        <div className="absolute left-[607px] top-[12px] w-[262px] h-[92px] bg-[#D7EEDD] rounded-[100px] z-0" />

        {/* Heading Text */}
        <h2 
          className="absolute left-[18px] top-0 w-[831px] h-[232px] text-[100px] leading-[116px] font-normal text-black z-10"
          style={{ fontFamily: "'Gerbil', 'Syne', sans-serif" }}
        >
          What we can offer you!
        </h2>

        {/* red stripe*/}
        <svg 
          width="1439.87" 
          height="697.60" 
          viewBox="0 0 1503 654" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          style={{
            position: "absolute", 
            top: "-440px", 
            left: "926px", 
            width: "1439.87px",
            height: "697.60px",
            transform: "rotate(-3.88deg)",
            transformOrigin: "top left",
            opacity: 1,
            overflow: "visible",
            zIndex: 0
          }}
        >
          <g filter="url(#filter0_d_1_158)">
            <path 
              d="M1488.65 134.467C1446.64 22.3687 1055.93 -89.3365 963 120.86C835.832 408.503 777.269 398.935 693.689 397.279C610.11 395.623 306.809 225.312 181.153 337.967C41.357 463.299 144.653 654.467 12.6534 618.727" 
              stroke="#FF6D6D" 
              strokeWidth="5"
            />
          </g>
          <defs>
            <filter id="filter0_d_1_158" x="0" y="0" width="1502.99" height="653.604" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dy="16"/>
              <feGaussianBlur stdDeviation="6"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_158"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_158" result="shape"/>
            </filter>
          </defs>
        </svg>

        {/* Services Rows Container */}
        <div className="absolute left-0 top-[316px] w-[1600px] h-[540px] z-10">
          
          {/* Row 1 / Group 352 */}
          <div className="absolute left-0 top-[0px] w-[1600px] h-[180px]">
            <div className="absolute left-0 top-0 w-[1600px] h-0 border-t border-[#B1B1B1]" />
            <div 
              className="absolute left-0 top-[48px] w-[226px] h-[84px] text-[30px] leading-[42px] text-[#1B1B1B] font-normal"
              style={{ fontFamily: "'Satoshi', sans-serif" }}
            >
              Office of multiple<br />interest content
            </div>
            <div 
              className="absolute left-[456px] top-[32px] w-[923px] h-[116px] text-[56px] leading-[116px] text-black font-normal"
              style={{ fontFamily: "'Gerbil', 'Syne', sans-serif" }}
            >
              Colaborative & partnership
            </div>
            {/* Arrow 1 */}
            <svg width="96" height="16" viewBox="0 0 96 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute left-[1519px] top-[82px]">
              <path d="M0 8H90M90 8L83 2M90 8L83 14" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <div className="absolute left-0 top-[180px] w-[1600px] h-0 border-t border-[#B1B1B1]" />
          </div>

          {/* Row 2 / Group 353 */}
          <div className="absolute left-0 top-[212px] w-[1600px] h-[148px]">
            <div 
              className="absolute left-0 top-[16px] w-[316px] h-[84px] text-[30px] leading-[42px] text-[#1B1B1B] font-normal"
              style={{ fontFamily: "'Satoshi', sans-serif" }}
            >
              The hanger US Air force<br />digital experimental
            </div>
            <div 
              className="absolute left-[456px] top-0 w-[882px] h-[116px] text-[56px] leading-[116px] text-black font-normal"
              style={{ fontFamily: "'Gerbil', 'Syne', sans-serif" }}
            >
              We talk about our weight
            </div>
            {/* Arrow 2 */}
            <svg width="96" height="16" viewBox="0 0 96 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute left-[1519px] top-[50px]">
              <path d="M0 8H90M90 8L83 2M90 8L83 14" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <div className="absolute left-0 top-[148px] w-[1600px] h-0 border-t border-[#B1B1B1]" />
          </div>

          {/* Row 3 / Group 354 */}
          <div className="absolute left-0 top-[370px] w-[1600px] h-[170px]">
            <div 
              className="absolute left-0 top-[38px] w-[273px] h-[84px] text-[30px] leading-[42px] text-[#1B1B1B] font-normal"
              style={{ fontFamily: "'Satoshi', sans-serif" }}
            >
              Delta faucet content,<br />social, digital
            </div>
            <div 
              className="absolute left-[456px] top-[22px] w-[878px] h-[116px] text-[56px] leading-[116px] text-black font-normal whitespace-nowrap z-20"
              style={{ fontFamily: "'Gerbil', 'Syne', sans-serif"}}
            >
              Piloting digital confidence
            </div>
            
            {/* rect 661 (Circle) */}
            <div 
              className="absolute overflow-hidden z-0"
              style={{
                width: '160px',
                height: '160px',
                left: '1066px',
                top: '0px',
                borderRadius: '500px',
                opacity: 1
              }}
            >
              <img src={rect661} alt="Rectangle 661"  />
            </div>

            {/* Arrow 3 */}
            <svg width="96" height="16" viewBox="0 0 96 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute left-[1519px] top-[82px]">
              <path d="M0 8H90M90 8L83 2M90 8L83 14" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <div className="absolute left-0 top-[170px] w-[1600px] h-0 border-t border-[#B1B1B1]" />
          </div>

        </div>
      </div>

      {/* Responsive Layout (< 1280px) */}
      <div className="xl:hidden">
        <Container>
          <div className="mb-12">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-medium leading-[1.3] tracking-tight text-text-primary">
              What we{' '}
              <span className="px-3.5 py-1 bg-[#D7EEDD] rounded-full inline-block align-middle mx-1 font-heading font-normal">
                can
              </span>{' '}
              <span className="relative inline-block pb-1">
                offer
                <span className="absolute bottom-0 left-0 w-full h-[3.5px] bg-[#FFC250] rounded-full" />
              </span>{' '}
              you!
            </h2>
          </div>

          <div className="space-y-0">
            {servicesContent.services.map((service, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row sm:items-center justify-between py-6 border-t border-border last:border-b cursor-pointer hover:bg-gray-50/50 transition-colors px-2 rounded-lg"
              >
                <div className="w-full sm:w-44 lg:w-52 mb-2 sm:mb-0">
                  <p className="text-xs md:text-sm text-text-secondary whitespace-pre-line">
                    {service.category}
                  </p>
                </div>
                <div className="flex-1 flex items-center gap-3 px-0 sm:px-8">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-text-primary" style={{ fontFamily: "'Syne', sans-serif" }}>
                    {service.title}
                  </h3>
                  {index === 2 && <div className="w-10 h-10 rounded-full bg-yellow-400/20 border border-yellow-500 flex items-center justify-center text-xs font-bold text-yellow-600">Q</div>}
                </div>
                <div className="flex-shrink-0 self-end sm:self-center mt-2 sm:mt-0">
                  <svg className="w-5 h-5 text-text-muted" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
};

export default ServicesSection;
