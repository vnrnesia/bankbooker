import { useEffect, useState } from "react";
import icon1 from "@/assets/HeaderIcon/icon1.png";
import icon2 from "@/assets/HeaderIcon/icon2.png";
import icon3 from "@/assets/HeaderIcon/icon3.png";
import icon4 from "@/assets/HeaderIcon/icon4.png";
import { Menu, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";


import rus from "@/assets/russia.png";
import tur from "@/assets/turkey.png";
import ger from "@/assets/germany.png";
import eng from "@/assets/uk.png";

export default function Header() {
  const [showHeader, setShowHeader] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [language, setLanguage] = useState("en"); // "en" | "ru" | "de"
  const [showLangDropdown, setShowLangDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setShowHeader(currentScrollPos < 50 || currentScrollPos < prevScrollPos);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  const toggleLanguage = () => setShowLangDropdown((prev) => !prev);
  const changeLanguage = (lang) => {
    setLanguage(lang);
    setShowLangDropdown(false);
  };

  const languageLabels = {
    en: "English",
    ru: "Русский",
    de: "Deutsch",
    tr: "Türkçe",
  };

  const languageFlags = {
    en: eng,
    ru: rus,
    de: ger,
    tr: tur,
  };

  const otherLanguages = Object.keys(languageLabels).filter(
    (lang) => lang !== language
  );

  return (
    <>
      {/* Desktop Header */}
      <div
        className={`hidden gap-4 md:flex fixed top-0 left-1/2 -translate-x-1/2 z-50 transition-all duration-500
         ${
           showHeader
             ? "opacity-100 translate-y-0"
             : "opacity-0 -translate-y-10"
         }
         bg-white top-4 shadow-md border border-gray-200 rounded-full px-4 py-4 h-[64px] w-[74%]
         items-center justify-between text-sm text-[#333] font-sans`}
      >
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-2">
            <img src={icon1} alt="" className="w-6 h-5" />
            <span className="text-gray-700 font-medium hidden 2xl:inline">
              info@bankbooker.com
            </span>
          </div>
          <div className="h-[1px] w-12 bg-gray-300 hidden lg:block"></div>
          <div className="flex items-center space-x-2">
            <img src={icon2} alt="" className="w-5 h-5" />
            <span className="text-gray-800 font- hidden 2xl:inline">
              +7 (917) 889–94–57
            </span>
          </div>
        </div>

        <div className="text-gray-400 whitespace-nowrap lg:block">
          Bankbooker - for all{" "}
          <span className="text-black font-medium">your business</span>
          <span className="text-gray-400"> endeavors</span>
        </div>

        <div className="flex items-center space-x-8 relative">
          {/* Language Switcher */}
          <div className="relative flex flex-col items-center">
            <div
              className="flex items-center space-x-2 cursor-pointer select-none"
              onClick={toggleLanguage}
            >
              <img src={icon3} alt="" className="w-5 h-5" />
              <span className="hidden 2xl:inline">
                {languageLabels[language]}
              </span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${
                  showLangDropdown ? "rotate-180" : "rotate-0"
                }`}
              />
            </div>

            {showLangDropdown && (
              <div className="absolute top-full mt-3 left-1/2 -translate-x-1/2 bg-white border rounded-3xl shadow-lg py-2 px-4 z-50 w-44 text-center space-y-2">
                {otherLanguages.map((lang) => (
                  <button
                    key={lang}
                    onClick={() => changeLanguage(lang)}
                    className="w-full flex items-center justify-start gap-2 px-3 py-2 bg-gray-100 rounded-full hover:bg-blue-100 transition-all duration-300"
                  >
                    <div className="flex items-center justify-center w-6 h-4">
                      <img
                        src={languageFlags[lang]}
                        alt={lang}
                        className="max-h-full rounded-full w-auto object-contain"
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-800">
                      {languageLabels[lang]}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="h-[1px] w-12 bg-gray-300 hidden lg:block"></div>
          <div className="flex items-center space-x-2">
            <img src={icon4} alt="" className="w-5 h-5" />
            <span className="hidden 2xl:inline">10:00am – 06.00pm</span>
          </div>
        </div>
      </div>

      {/* Scroll Buttons */}
      <div
        className={`fixed top-4 right-4 z-40 hidden md:flex items-center space-x-6 transition-all duration-500 ease-in-out
         ${
           showHeader
             ? "opacity-0 -translate-y-6 pointer-events-none"
             : "opacity-100 translate-y-0"
         }`}
      >
        <div className="flex items-center gap-1">
          <button className="bg-gradient-to-b from-[#0FA9E9] to-[#0786E2] text-white px-5 py-[18px] rounded-full text-sm font-medium shadow-lg hover:bg-[#0668b6] transition-all duration-300">
            Contact Us
          </button>
          <button className="bg-white px-4 py-[18px] rounded-full shadow-md border border-gray-200 hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
            <Menu className="w-5 h-5 text-gray-800" />
          </button>
        </div>
      </div>
    </>
  );
}
