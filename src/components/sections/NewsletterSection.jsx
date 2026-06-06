import { useRef } from 'react';
import Container from '../layout/Container';
import { newsletterContent } from '../../data/content';

const NewsletterSection = () => {
  const ref = useRef(null);

  return (
    <section
      ref={ref}
      id="newsletter"
      className="relative w-full xl:w-[1920px] xl:h-[728px] xl:absolute xl:top-[5369px] xl:left-0 bg-[#D7EEDD] py-16 px-4 text-center xl:p-0 overflow-hidden"
    >
      {/* Desktop Artboard Layout (width >= 1280px) */}
      <div className="hidden xl:block relative w-[1920px] h-[728px] bg-[#D7EEDD]">
        
        {/* Ellipse 739 (Large Purple Circle) */}
        <div
          className="absolute bg-[#934CEC] z-0 transition-all duration-700 hover:rotate-[-45deg] hover:scale-105"
          style={{
            width: '243.99756426835313px',
            height: '243.99756426835313px',
            top: '250px',
            left: '1650px',
            transform: 'rotate(-65deg)',
            opacity: 1,
            borderRadius: '50%',
            clipPath: 'inset(0 0 50% 0)'
          }}
        />

        {/* Vector 2519 (Red border overlay 1) */}
        <svg 
          width="163.54" 
          height="121.5" 
          viewBox="0 0 178 123" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          style={{
            position: "absolute",
            top: "0px",
            left: "671px",
            zIndex: 0
          }}
        >
          <path d="M12.5435 122.809C13.2662 123.214 14.1804 122.956 14.5854 122.233L21.1855 110.457C21.5905 109.734 21.333 108.82 20.6103 108.415C19.8876 108.01 18.9735 108.267 18.5684 108.99L12.7017 119.458L2.23359 113.591C1.51092 113.186 0.596747 113.444 0.191733 114.167C-0.213281 114.889 0.0442324 115.803 0.766905 116.208L12.5435 122.809ZM13.2769 121.5L14.7207 121.093C13.2467 115.861 14.7418 106.161 25.4135 94.9465C36.0671 83.7509 55.7637 71.1882 90.2238 60.4319L89.7769 59L89.3299 57.5681C54.59 68.4118 34.37 81.1824 23.2402 92.8785C12.1286 104.555 9.97373 115.306 11.8331 121.907L13.2769 121.5ZM89.7769 59L90.2238 60.4319C124.946 49.5938 146.763 37.4335 159.932 26.5565C173.03 15.7387 177.777 6.00587 177.777 1.64509e-05L176.277 0L174.777 -1.64509e-05C174.777 4.6608 170.874 13.628 158.022 24.2435C145.241 34.7998 123.808 46.8062 89.3299 57.5681L89.7769 59Z" fill="#FF6D6D"/>
        </svg>

        {/* Vector 2518 (Red border overlay 2) */}
        <svg 
          width="163.54" 
          height="121.5" 
          viewBox="0 0 178 123" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          style={{
            position: "absolute",
            top: "0px",
            left: "774.04px",
            zIndex: 0
          }}
        >
          <path d="M12.5435 122.809C13.2662 123.214 14.1804 122.956 14.5854 122.233L21.1855 110.457C21.5905 109.734 21.333 108.82 20.6103 108.415C19.8876 108.01 18.9735 108.267 18.5684 108.99L12.7017 119.458L2.23359 113.591C1.51092 113.186 0.596747 113.444 0.191733 114.167C-0.213281 114.889 0.0442324 115.803 0.766905 116.208L12.5435 122.809ZM13.2769 121.5L14.7207 121.093C13.2467 115.861 14.7418 106.161 25.4135 94.9465C36.0671 83.7509 55.7637 71.1882 90.2238 60.4319L89.7769 59L89.3299 57.5681C54.59 68.4118 34.37 81.1824 23.2402 92.8785C12.1286 104.555 9.97373 115.306 11.8331 121.907L13.2769 121.5ZM89.7769 59L90.2238 60.4319C124.946 49.5938 146.763 37.4335 159.932 26.5565C173.03 15.7387 177.777 6.00587 177.777 1.64509e-05L176.277 0L174.777 -1.64509e-05C174.777 4.6608 170.874 13.628 158.022 24.2435C145.241 34.7998 123.808 46.8062 89.3299 57.5681L89.7769 59Z" fill="#FF6D6D"/>
        </svg>

        {/* Heading */}
        <h2 
          className="absolute left-[508px] top-[140px] w-[904px] h-[232px] text-[100px] leading-[116px] font-normal text-black text-center z-10"
          style={{ fontFamily: "'Gerbil', 'Syne', sans-serif" }}
        >
          Subscribe to our newsletter
        </h2>

        {/* Subtitle */}
        <p 
          className="absolute left-[682px] top-[382px] w-[557px] h-[36px] text-[24px] leading-[36px] font-normal text-black text-center z-10"
          style={{ fontFamily: "'Satoshi', sans-serif" }}
        >
          {newsletterContent.subtitle}
        </p>

        {/* Subscribe Button Wrapper */}
        <div className="absolute left-[844px] top-[456px] w-[233px] h-[72px] z-10">
          <button
            id="subscribe-btn"
            className="absolute left-0 top-0 w-[233px] h-[72px] bg-black text-white text-[20px] font-bold rounded-[100px] hover:bg-black/95 hover:scale-105 hover:shadow-[0_0_25px_rgba(147,76,236,0.3)] active:scale-95 transition-all duration-300 shadow-md flex items-center justify-center cursor-pointer"
            style={{ fontFamily: "'Satoshi', sans-serif" }}
          >
            Subscribe Now
          </button>
        </div>

        {/* Line 67 (Horizontal Divider Line) */}
        <div className="absolute left-[160px] top-[628px] w-[1600px] h-0 border-t border-black" />
      </div>

      {/* Responsive Layout (< 1280px) */}
      <div className="xl:hidden bg-[#D7EEDD] py-16 px-4 text-center">
        <Container className="relative">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-text-primary leading-tight mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
            Subscribe to our newsletter
          </h2>
          <p className="text-text-secondary text-sm md:text-base max-w-md mx-auto mb-8">
            {newsletterContent.subtitle}
          </p>
          <button
            id="subscribe-btn-mobile"
            className="px-8 py-3.5 bg-black text-white text-sm font-semibold rounded-full hover:bg-black/80 transition-colors"
          >
            {newsletterContent.buttonText}
          </button>
        </Container>
      </div>
    </section>
  );
};

export default NewsletterSection;
