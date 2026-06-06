import { cn } from '../../utils/cn';
import Container from './Container';
import { footerContent } from '../../data/content';

const Footer = () => {
  return (
    <footer
      id="footer"
      className="relative w-full xl:w-[1920px] xl:h-[568px] xl:absolute xl:top-[6097px] xl:left-0 bg-[#D7EEDD] pt-16 pb-8 xl:p-0 overflow-hidden"
    >
      {/* Desktop Artboard Layout (width >= 1280px) */}
      <div className="hidden xl:block relative w-[1920px] h-[568px] bg-[#D7EEDD]">
        
        {/* Column 1 (Company) / Group 327 */}
        <div className="absolute left-[160px] top-0 w-[130px] h-[279px]">
          <h3 
            className="absolute left-0 top-0 w-[130px] h-[30px] text-[22px] leading-[30px] font-normal text-black"
            style={{ fontFamily: "'Gerbil', 'Syne', sans-serif" }}
          >
            Company
          </h3>
          <ul className="absolute left-0 top-[69px] w-[64px] h-[210px] space-y-[10px]">
            {footerContent.columns[0].links.map((link, i) => (
              <li key={i}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="text-[20px] leading-[30px] font-normal text-black hover:text-black/70 transition-colors whitespace-nowrap"
                  style={{ fontFamily: "'Satoshi', sans-serif" }}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 2 (Terms & Policies) / Group 328 */}
        <div className="absolute left-[586px] top-0 w-[226px] h-[279px]">
          <h3 
            className="absolute left-0 top-0 w-[226px] h-[30px] text-[22px] leading-[30px] font-normal text-black"
            style={{ fontFamily: "'Gerbil', 'Syne', sans-serif" }}
          >
            Terms & Policies
          </h3>
          <ul className="absolute left-0 top-[69px] w-[170px] h-[210px] space-y-[10px]">
            {footerContent.columns[1].links.map((link, i) => (
              <li key={i}>
                <a
                  href="#"
                  className="text-[20px] leading-[30px] font-normal text-black hover:text-black/70 transition-colors whitespace-nowrap"
                  style={{ fontFamily: "'Satoshi', sans-serif" }}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 (Follow Us) / Group 329 */}
        <div className="absolute left-[1108px] top-0 w-[130px] h-[279px]">
          <h3 
            className="absolute left-0 top-0 w-[130px] h-[30px] text-[22px] leading-[30px] font-normal text-black"
            style={{ fontFamily: "'Gerbil', 'Syne', sans-serif" }}
          >
            Follow Us
          </h3>
          <ul className="absolute left-0 top-[69px] w-[87px] h-[210px] space-y-[10px]">
            {footerContent.columns[2].links.map((link, i) => (
              <li key={i}>
                <a
                  href="#"
                  className="text-[20px] leading-[30px] font-normal text-black hover:text-black/70 transition-colors whitespace-nowrap"
                  style={{ fontFamily: "'Satoshi', sans-serif" }}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4 (Contact Info) / Group 330 */}
        <div className="absolute left-[1534px] top-0 w-[226px] h-[249px]">
          {/* Header area left empty per design specifications (Correct duplicate header) */}
          <div className="absolute left-0 top-[69px] w-[203px] h-[180px] space-y-[10px]">
            <p 
              className="text-[20px] leading-[30px] font-normal text-black whitespace-pre-line"
              style={{ fontFamily: "'Satoshi', sans-serif" }}
            >
              {footerContent.columns[3].address}
            </p>
            <p 
              className="text-[20px] leading-[30px] font-normal text-black"
              style={{ fontFamily: "'Satoshi', sans-serif" }}
            >
              {footerContent.columns[3].phone}
            </p>
            <p 
              className="text-[20px] leading-[30px] font-normal text-black"
              style={{ fontFamily: "'Satoshi', sans-serif" }}
            >
              {footerContent.columns[3].email}
            </p>
          </div>
        </div>

        {/* Copyright Text */}
        <p 
          className="absolute left-[812px] top-[479px] w-[303px] h-[30px] text-[18px] leading-[30px] font-normal text-black text-center"
          style={{ fontFamily: "'Satoshi', sans-serif" }}
        >
          {footerContent.copyright}
        </p>
      </div>

      {/* Responsive Layout (< 1280px) */}
      <div className="xl:hidden bg-[#D7EEDD] pt-12 pb-8 border-t border-black/10">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {footerContent.columns.map((col, index) => (
              <div key={index}>
                {col.title && index !== 3 && (
                  <h3 className="text-sm font-semibold text-text-primary mb-4">
                    {col.title}
                  </h3>
                )}
                {col.isContact ? (
                  <div className="space-y-2 text-sm text-text-secondary pt-8 md:pt-0">
                    <p className="whitespace-pre-line">{col.address}</p>
                    <p>{col.phone}</p>
                    <p>{col.email}</p>
                  </div>
                ) : (
                  <ul className="space-y-2">
                    {col.links.map((link, i) => (
                      <li key={i}>
                        <a href="#" className="text-sm text-text-secondary hover:text-text-primary transition-colors">
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
          <div className="border-t border-black/10 pt-6 text-center text-xs text-text-secondary">
            {footerContent.copyright}
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
