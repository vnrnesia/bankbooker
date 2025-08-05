import { useState, useEffect } from "react";
import { FiChevronUp } from "react-icons/fi";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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

    const animateFromTop = (target, fromY) => {
      gsap.fromTo(
        target,
        { opacity: 1, y: fromY },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "none",
          scrollTrigger: {
            trigger: "footer",
            start: "top bottom",
            end: "top 50%",
            scrub: 1,
          },
        }
      );
    };

    animateFromTop(".footer-left", -300);
    animateFromTop(".footer-right", 300);
    animateFromTop(".footer-bottom", -300);

    gsap.fromTo(
      ".footer-menu a",
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "none",
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".footer-menu",
          start: "top bottom",
          end: "top 80%",
          scrub: 1,
        },
      }
    );

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer className="w-full min-h-[610px] bg-gradient-to-r from-[#B4B7BD] to-[#E3E7EB] text-gray-800 font-manrope overflow-hidden">
        <div className="w-full">
          <div className="px-4 md:px-0 max-w-sm md:max-w-[90%] 3xl:max-w-7xl mx-auto pb-8 md:pb-12">
            <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-12">
              <div className="footer-left max-w-xl py-8 md:py-24">
                <Link to="/" className="flex items-center gap-2 mb-4">
                  <img
                    src="/bankbooker.png"
                    alt="Bankbooker Logo"
                    className="h-12 w-auto object-contain"
                  />
                </Link>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium leading-tight mb-3">
                  Готовы взять контроль над своими финансами?{" "}
                  <br className="hidden sm:block" /> своими финансами?
                </h2>
                <p className="text-gray-600 font-sans font-light mb-5">
                  Нам интересно узнать о ваших финансовых планах и предложить
                  лучшее решение.
                </p>
                <div className="pt-4 md:pt-16">
                  <button className="bg-gradient-to-l from-[#0273DE] to-[#10B0EB] text-white font-medium px-6 py-4 rounded-md transition-colors duration-300">
                    Бесплатная консультация
                  </button>
                </div>
              </div>

              <div className="footer-right grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-16 text-sm md:pt-48 text-gray-600">
                <div className="space-y-4">
                  <h4 className="text-base font-semibold text-gray-800 tracking-wide mb-4">
                    Контакты
                  </h4>
                  <div>
                    <p className="text-base md:text-lg font-medium text-gray-700">
                      Номер Телефона
                    </p>
                    <p className="text-base md:text-lg text-gray-600">
                      +7 (917) 889 94–54
                    </p>
                  </div>
                  <div>
                    <p className="text-base md:text-lg font-medium text-gray-700">
                      Почту
                    </p>
                    <p className="text-base md:text-lg text-gray-600">
                      info@bankbooker.com
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="text-base md:text-lg font-medium text-gray-700">
                      Mon– Fri:
                    </p>
                    <p className="text-base md:text-lg text-gray-600">
                      8:30am – 5:30pm
                    </p>
                  </div>
                  <div>
                    <p className="text-base md:text-lg font-medium text-gray-700">
                      Подписывайтесь на наш Telegram-канал
                    </p>
                    <p className="text-base md:text-lg text-gray-600">
                      t.me/bankbooker
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="w-full border-t border-gray-300 bg-white mb-1 ">
        <div className="hidden md:block w-full max-w-[1270px] mx-auto border-t border-gray-300" />

        <div className="footer-bottom max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 pt-4 md:py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <div className="text-gray-600 flex flex-wrap items-center justify-center gap-4">
              <span>2025 Bankbooker. All rights reserved.</span>
              <div className="flex gap-4">
                <Link to="#">Terms & Conditions</Link>
                <Link to="#">Privacy Policy</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToTop}
        aria-label="Back to top"
        className={`fixed bottom-0 left-1/2 z-50
    bg-blue-600 hover:bg-blue-700
    text-white p-3 rounded-full
    shadow-lg
    flex items-center justify-center
    w-10 h-10
    pointer-events-auto
    transition-all duration-300 ease-in-out
    ${
      visible
        ? "opacity-100 scale-100"
        : "opacity-0 scale-75 pointer-events-none"
    }
    transform -translate-x-1/2 -translate-y-1/2
  `}
        style={{ willChange: "opacity, transform" }}
      >
        <FiChevronUp size={24} />
      </button>
    </>
  );
};

export default Footer;
