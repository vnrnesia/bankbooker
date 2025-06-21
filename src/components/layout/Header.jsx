import { useEffect, useState } from "react";
import icon1 from "@/assets/HeaderIcon/icon1.png";
import icon2 from "@/assets/HeaderIcon/icon2.png";
import icon3 from "@/assets/HeaderIcon/icon3.png";
import icon4 from "@/assets/HeaderIcon/icon4.png";
import { Menu, ChevronDown, X } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "@/assets/logo.png";
import navbarIcon1 from "@/assets/Services/icon1.png";
import navbarIcon2 from "@/assets/Services/icon2.png";
import navbarIcon3 from "@/assets/Services/icon3.png";
import navbarIcon4 from "@/assets/Services/icon4.png";
import navbarIcon5 from "@/assets/Services/icon5.png";
import rus from "@/assets/russia.png";
import tur from "@/assets/turkey.png";
import ger from "@/assets/germany.png";
import eng from "@/assets/uk.png";
import TradingviewWidget from "@/components/ui/TradinviewWidget.jsx";

export default function Header() {
  const [isShrunk, setIsShrunk] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [language, setLanguage] = useState("en");
  const [showLangDropdown, setShowLangDropdown] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showWidget, setShowWidget] = useState(false);

  // Handle scroll for header shrink/expand
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setIsShrunk(currentScrollPos > 50 && currentScrollPos > prevScrollPos);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  // Toggle TradingviewWidget visibility every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setShowWidget((prev) => !prev);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

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
        className={`hidden mt-5 md:flex fixed top-0 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 bg-white shadow-md border border-gray-200 rounded-full h-[64px] items-center justify-between text-sm text-[#333] font-sans
          ${isShrunk ? "w-[350px] px-4 py-4 opacity-90" : "w-[90vw] xl:w-[90vw] 2xl:w-[1180px] 3xl:w-[62vw] max-w-screen-xl px-4 py-4"}`}
      >
        <div
          className={`flex items-center space-x-8 transition-all duration-500 ease-in-out transform ${
            isShrunk
              ? "-translate-x-48 opacity-0 w-0 overflow-hidden delay-0"
              : "translate-x-0 opacity-100 w-auto delay-0"
          }`}
        >
          <div
            className={`flex items-center space-x-2 transition-all duration-500 ease-in-out transform ${
              isShrunk
                ? "-translate-x-32 opacity-0 w-0 overflow-hidden delay-0"
                : "translate-x-0 opacity-100 w-auto delay-200"
            }`}
          >
            <img src={icon1} alt="" className="w-6 h-5" />
            <span className="text-[clamp(0.8rem,4vw,0.9rem)]">
              info@bankbooker.com
            </span>
          </div>
          <div className="h-[1px] w-12 bg-gray-800 hidden lg:block"></div>
          <div
            className={`flex items-center space-x-2 transition-all duration-500 ease-in-out transform ${
              isShrunk
                ? "-translate-x-24 opacity-0 w-0 overflow-hidden delay-200"
                : "translate-x-0 opacity-100 w-auto delay-0"
            }`}
          >
            <img src={icon2} alt="" className="w-5 h-5" />
            <span className="text-[clamp(0.8rem,4vw,0.9rem)] whitespace-nowrap">
              +7 (917) 755–94–57
            </span>
          </div>
        </div>

        <div className="flex flex-col items-center relative min-h-[24px]">
          <div
            className={`absolute top-0 left-1/2 -translate-x-1/2 transition-all duration-600 ease-in-out ${
              showWidget
                ? "opacity-100 translate-y-[-13px]"
                : "opacity-0 -translate-y-2 h-2"
            }`}
          >
            <TradingviewWidget />
          </div>
          <div
            className={`text-gray-400 whitespace-nowrap lg:block transition-all duration-700 ease-in-out ${
              showWidget ? "opacity-0 translate-y-6" : "opacity-100 translate-y-[3px]"
            }`}
          >
            Bankbooker - for all{" "}
            <span className="text-black font-medium">your business</span>
            <span className="text-gray-400"> endeavors</span>
          </div>
        </div>

        <div
          className={`flex items-center space-x-8 transition-all duration-500 ease-in-out transform relative ${
            isShrunk
              ? "translate-x-48 opacity-0 w-0 overflow-hidden delay-200"
              : "translate-x-0 opacity-100 w-auto delay-200"
          }`}
        >
          <div
            className={`relative flex flex-col items-center transition-all duration-500 ease-in-out transform ${
              isShrunk
                ? "translate-x-24 opacity-0 w-0 overflow-hidden delay-200"
                : "translate-x-0 opacity-100 w-auto delay-0"
            }`}
          >
            <div
              className="flex items-center space-x-2 cursor-pointer select-none"
              onClick={toggleLanguage}
            >
              <img src={icon3} alt="" className="w-5 h-5" />
              <span className="text-[clamp(0.8rem,4vw,0.9rem)] whitespace-nowrap">
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
          <div
            className={`flex items-center space-x-2 transition-all duration-500 ease-in-out transform ${
              isShrunk
                ? "translate-x-32 opacity-0 w-0 overflow-hidden delay-0"
                : "translate-x-0 opacity-100 w-auto delay-200"
            }`}
          >
            <img src={icon4} alt="" className="w-5 h-5" />
            <span className="text-[clamp(0.8rem,4vw,0.9rem)] whitespace-nowrap">
              10:00am – 06.00pm
            </span>
          </div>
        </div>
      </div>

      {/* Scroll Buttons */}
      <div
        className={`fixed top-4 right-4 z-40 hidden md:flex items-center space-x-6 transition-all duration-500 ease-in-out ${
          isShrunk
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-6 pointer-events-none"
        }`}
      >
        <div className="flex items-center gap-1">
          <button className="bg-gradient-to-b from-[#0FA9E9] to-[#0786E2] text-white px-5 py-[18px] rounded-full text-sm font-medium shadow-lg hover:bg-[#0668b6] transition-all duration-300">
            Contact Us
          </button>
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="bg-white px-4 py-[18px] rounded-full shadow-md border border-gray-200 hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
          >
            <Menu className="w-5 h-5 text-gray-800" />
          </button>
        </div>
      </div>

      {/* Sidebar Menü */}
      <div
        className={`fixed top-0 right-0 h-full rounded-xl bg-white shadow-lg border-l border-gray-200 z-50 transition-transform duration-300 ease-in-out text-left ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } w-[220px]`}
      >
        <div className="flex items-center justify-between px-4 py-4 border-b">
          <img
            src={Logo}
            alt="Bankbooker Logo"
            className="h-12 w-auto object-contain"
          />
          <button onClick={() => setIsSidebarOpen(false)}>
            <X className="w-5 h-5 text-gray-600 hover:text-red-500" />
          </button>
        </div>

        <div className="flex flex-col space-y-3 px-4 pt-6 text-sm font-medium text-gray-600 font-[Manrope]">
          {[
            { name: "Оплата инвойсов", path: "/payment", icon: navbarIcon1 },
            {
              name: "Аутсорсинг Бухгалтерии",
              path: "/accounting",
              icon: navbarIcon3,
            },
            {
              name: "Юридический департамент",
              path: "/legal",
              icon: navbarIcon5,
            },
            {
              name: "Налоговый консалтинг",
              path: "/consulting",
              icon: navbarIcon4,
            },
            {
              name: "Банковские Продукты",
              path: "/products",
              icon: navbarIcon2,
            },
          ].map((item, idx) => (
            <Link
              key={idx}
              to={item.path}
              onClick={() => setIsSidebarOpen(false)}
              className="group flex items-center gap-3 rounded-2xl py-2 px-3 hover:bg-gradient-to-b from-[#0FA9E9] to-[#0786E2] hover:text-white transition duration-300"
            >
              <img
                src={item.icon}
                alt=""
                className="w-4 h-4 object-contain transition duration-300 group-hover:invert group-hover:brightness-0"
              />
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}