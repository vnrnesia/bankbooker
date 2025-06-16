import { useState, useEffect } from "react";
import { FiChevronUp } from "react-icons/fi";
import { Link } from "react-router-dom";
import Logo from "@/assets/logo.png";
import icon1 from "@/assets/LeftPanel/icon1.png";
import icon2 from "@/assets/LeftPanel/icon2.png";
import icon3 from "@/assets/LeftPanel/icon3.png";
import icon4 from "@/assets/LeftPanel/icon4.png";

const Footer = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const pageHeight = document.documentElement.scrollHeight;
      const scrollThreshold = pageHeight * 0.9;

      setVisible(scrollPosition >= scrollThreshold);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Main Footer Area */}
      <footer className="w-full min-h-[550px] bg-gray-100 text-gray-800 font-manrope">
        <div className="w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 md:pb-12">
            <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-12">
              {/* Left Area */}
              <div className="max-w-xl py-8 md:py-16">
                <div className="flex items-center gap-2 mb-4">
                  <Link to="/" className="flex items-center gap-2 mb-4">
                    <img
                      src={Logo}
                      alt="Bankbooker Logo"
                      className="h-12 w-auto object-contain"
                    />
                  </Link>
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium leading-tight mb-3">
                  Ready to Take Control Of <br className="hidden sm:block" /> Your Finances?
                </h2>
                <p className="text-gray-400 font-sans font-light mb-5">
                  We look forward to learning about your financial goals.
                </p>
                <div className="pt-8 md:pt-16">
                  <button className="bg-[#047EDF] hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-full transition-colors duration-300">
                    Free Consultation
                  </button>
                </div>
              </div>

              {/* Right Area */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-16 text-sm pt-8 md:pt-36 text-gray-600">
                <div className="space-y-4">
                  <h4 className="text-base font-semibold text-gray-800 tracking-wide mb-4">
                    CONTACT US
                  </h4>
                  <div>
                    <p className="text-base md:text-lg font-medium text-gray-700">Our Phone</p>
                    <p className="text-base md:text-lg text-gray-600">+7 (917) 889 94–54</p>
                  </div>
                  <div>
                    <p className="text-base md:text-lg font-medium text-gray-700">Our Email</p>
                    <p className="text-base md:text-lg text-gray-600">info@bankbooker.com</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="text-base md:text-lg font-medium text-gray-700">Mon– Fri:</p>
                    <p className="text-base md:text-lg text-gray-600">8:30am – 5:30pm</p>
                  </div>
                  <div>
                    <p className="text-base md:text-lg font-medium text-gray-700">Moscow:</p>
                    <p className="text-base md:text-lg text-gray-600">
                      1140 Kremlin St, RU 13131
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Menu Area */}
      <div className="w-full border-t border-gray-300 bg-white mb-10 md:mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-[142px] text-gray-600 text-sm font-semibold text-center">
            <a href="#" className="hover:text-blue-600 transition-colors">Services</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Who We Are</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Insights</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Careers</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Team</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Contact Us</a>
          </div>
        </div>

        {/* Divider */}
        <div className="hidden md:block w-full max-w-[1270px] mx-auto border-t border-gray-300" />

        {/* Bottom Info Area */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <div className="text-gray-600 flex flex-wrap items-center justify-center gap-4">
              <span>2025 Bankbooker. All right reserved.</span>
              <div className="flex gap-4">
                <a href="#" className="hover:text-blue-600 transition-colors">Terms & Conditions</a>
                <a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex gap-6">
              <a href="#" className="hover:opacity-75 transition-opacity">
                <img src={icon1} alt="X" className="w-5 h-5 md:w-6 md:h-6" />
              </a>
              <a href="#" className="hover:opacity-75 transition-opacity">
                <img src={icon2} alt="LinkedIn" className="w-5 h-5 md:w-6 md:h-6" />
              </a>
              <a href="#" className="hover:opacity-75 transition-opacity">
                <img src={icon3} alt="Facebook" className="w-5 h-5 md:w-6 md:h-6" />
              </a>
              <a href="#" className="hover:opacity-75 transition-opacity">
                <img src={icon4} alt="Instagram" className="w-5 h-5 md:w-6 md:h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        aria-label="Back to top"
        className={`fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50
          bg-blue-600 hover:bg-blue-700
          text-white p-3 rounded-full
          shadow-lg
          flex items-center justify-center
          w-10 h-10
          pointer-events-auto
          transition-all duration-300 ease-in-out
          ${visible ? "opacity-100 scale-100" : "opacity-0 scale-75 pointer-events-none"}
        `}
        style={{ willChange: "opacity, transform" }}
      >
        <FiChevronUp size={24} />
      </button>
    </>
  );
};

export default Footer;
