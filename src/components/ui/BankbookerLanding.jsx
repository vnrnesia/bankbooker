import logo from "@/assets/logo.png";
import icon1 from "@/assets/LeftPanel/icon1.png";
import icon2 from "@/assets/LeftPanel/icon2.png";
import icon3 from "@/assets/LeftPanel/icon3.png";
import icon4 from "@/assets/LeftPanel/icon4.png";
import telegram from "@/assets/telegram.png";
import avatar1 from "@/assets/Avatar/avatar1.png";
import avatar2 from "@/assets/Avatar/avatar2.png";
import avatar3 from "@/assets/Avatar/avatar3.png";
import avatar4 from "@/assets/Avatar/avatar4.png";
import { Link } from "react-router-dom";
import Logo from "@/assets/logo.png";
import { useState } from "react";
import { useLocation } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faStarHalfAlt,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";

const BankbookerLanding = () => {
    const [showServices, setShowServices] = useState(false);

  return (
    <div className="pt-24 md:pt-16 font-[Manrope] mt-6 md:mt-10 min-h-screen flex flex-col lg:flex-row bg-white lg:pl-0">
      {/* Left Panel */}
      <div className="hidden lg:flex min-w-[550px] w-[40px] h-[770px] bg-gradient-to-b from-[#BEC0C4] to-[#DFE2E7] p-4 2xl:flex flex-col justify-between rounded-xl overflow-hidden lg:-ml-24">
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex justify-center items-center w-full">
            <img
              src={logo}
              alt="Bankbooker Logo"
              className="h-16 md:h-20 w-auto object-contain"
            />
          </div>

          {/* Telegram Info */}
          <div className="mt-[120px] text-center">
            <div className="text-gray-400 text-sm">Community</div>
            <div className="text-2xl lg:text-3xl font-medium text-gray-800 mt-1">
              Join To Telegram Channel
            </div>
            <div className="flex justify-center items-center gap-2 mt-2">
              <img src={telegram} alt="Telegram Icon" className="w-5" />
              <span className="text-black text-sm font-sans">
                t.me/bankbooker
              </span>
            </div>
          </div>

          {/* Tags */}
          <div className="mt-12 flex flex-wrap justify-center gap-2 font-[Manrope]">
            {[
              "Оплата инвойсов",
              "Аутсорсинг Бухгалтерии",
              "Юридический департамент",
              "Налоговый консалтинг",
            ].map((item, idx) => (
              <span
                key={idx}
                className="font-[Manrope] bg-gradient-to-b from-[#0FA9E9] to-[#0786E2] text-white px-4 py-1.5 rounded text-sm whitespace-nowrap"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-4 mt-4">
          <img src={icon1} alt="X" className="w-5 h-5" />
          <img src={icon2} alt="LinkedIn" className="w-5 h-5" />
          <img src={icon3} alt="Facebook" className="w-5 h-5" />
          <img src={icon4} alt="Instagram" className="w-5 h-5" />
        </div>
      </div>

      {/* Right Panel */}
      <div className="flex-1 pt-0 px-4 sm:px-6 lg:px-10 pb-10">
        {/* Nav */}
        <nav className="pt-12 md:pt-0 px-5">
        <div className="flex justify-end items-center">
         

          <div className="hidden font-[Manrope] md:flex items-center gap-4 lg:gap-6 text-sm text-[#333]">
            <a href="#" className="hover:text-blue-600 transition-colors">
              О сервисе
            </a>
            {/* Accordion Start */}
            <div className="relative">
              <button
                onClick={() => setShowServices(!showServices)}
                className="hover:text-blue-600 transition-colors focus:outline-none flex items-center gap-1"
              >
                Услуги
                {/* SVG Arrow Icon */}
                <svg
                  className={`w-4 h-4 transform transition-transform duration-300 ${
                    showServices ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {showServices && (
                <div className="text-center absolute top-full mt-2 w-56 bg-white border border-gray-200 rounded-2xl shadow-md z-50 overflow-hidden transition-all duration-300 animate-fade-in-down">
                  {[
                    { name: "Оплата инвойсов", path: "/payment" },
                    { name: "Аутсорсинг Бухгалтерии", path: "/accounting" },
                    { name: "Юридический департамент", path: "/legal" },
                    { name: "Налоговый консалтинг", path: "/consulting" },
                    { name: "Банковские Продукты", path: "/products" },
                  ].map((item, idx) => (
                    <Link
                      key={idx}
                      to={item.path}
                      className="block px-4 py-2 text-sm bg-white hover:from-sky-500 hover:to-blue-600 hover:text-white transition duration-300 cursor-pointer bg-gradient-to-r"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <a href="#" className="hover:text-blue-600 transition-colors">
              Партнеры
            </a>
            <a href="#" className="hover:text-blue-600 transition-colors">
              Контакты
            </a>
            <button className="border border-gray-300 rounded-full px-4 py-1 text-sm font-medium hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-colors">
              Let's Talk
            </button>
          </div>
        </div>
      </nav>

        {/* Hero Text */}
        <div className="mt-6 md:mt-10">
          <div className="text-sm font-medium text-gray-700">
            Welcome To Bankbooker
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight mt-2 font-medium">
            International Payment Solutions
            <br className="hidden sm:block" />
            and Complex Services for Businesses
          </h1>
          <p className="text-sm font-[Manrope] text-gray-600 mt-4 max-w-[500px]">
            At Bankbooker, we embrace innovation as the driving force behind
            every solution. Our commitment to staying ahead of industry trends
            ensures that your business.
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <button className="bg-gradient-to-b from-[#0FA9E9] to-[#0786E2] text-white font-medium px-6 py-2 rounded hover:from-[#0786E2] hover:to-[#0FA9E9] transition-all duration-300">
              Get Started
            </button>
            <button className="border border-gray-300 px-6 py-2 rounded font-medium text-gray-700 hover:bg-gradient-to-r hover:from-sky-500 hover:to-blue-600 hover:text-white cursor-pointer transition duration-300">
              Our Services
            </button>
          </div>
        <div className="block md:hidden pt-6">
            <div className="  w-auto  bg-gradient-to-b from-[#BEC0C4] to-[#DFE2E7] p-4   rounded-xl">
            <div className="flex flex-col">
              {/* Logo */}
              <div className="flex justify-center items-center w-full">
              
              </div>

              {/* Telegram Info */}
              <div className="hidden md:block mt-[12px] text-center">
                <div className="text-gray-400 text-sm">Community</div>
                <div className="text-2xl lg:text-3xl font-medium text-gray-800 mt-1">
                  Join To Telegram Channel
                </div>
                <div className="flex justify-center items-center gap-2 mt-2">
                  <img src={telegram} alt="Telegram Icon" className="w-5" />
                  <span className="text-black text-sm font-sans">
                    t.me/bankbooker
                  </span>
                </div>
              </div>

              <div>
                <div className="block md:hidden pt-6 text-2xl lg:text-3xl font-medium text-gray-800 mt-1">
                  Join To Telegram Channel
                </div>
              </div>

              {/* Tags */}
              <div className="mt-12 flex flex-wrap justify-center gap-2 font-[Manrope]">
                {[
                  "Оплата инвойсов",
                  "Аутсорсинг Бухгалтерии",
                  "Юридический департамент",
                  "Налоговый консалтинг",
                ].map((item, idx) => (
                  <span
                    key={idx}
                    className="font-[Manrope] bg-gradient-to-b from-[#0FA9E9] to-[#0786E2] text-white px-1 py-1.5 rounded text-xs whitespace-nowrap"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center gap-4 mt-4">
              <img src={icon1} alt="X" className="w-5 h-5" />
              <img src={icon2} alt="LinkedIn" className="w-5 h-5" />
              <img src={icon3} alt="Facebook" className="w-5 h-5" />
              <img src={icon4} alt="Instagram" className="w-5 h-5" />
            </div>
          </div>
        </div>
        </div>

        {/* Info Boxes */}
        <div className="flex flex-col lg:flex-row gap-4 mt-4 md:mt-[82px]">
          {/* Box 1 */}
          <div className="bg-[#0D7ECF] rounded-xl p-4 sm:p-6 w-full lg:w-[400px] h-auto lg:h-[300px] text-white flex flex-col justify-between">
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-4 text-center">
                <div className="text-3xl sm:text-4xl font-sans">120+</div>
                <div className="text-sm leading-snug max-w-[220px] text-left">
                  Grow Smarter, Faster With Bankbooker Financial Solutions
                </div>
              </div>
              <div className="h-[1px] w-full bg-gray-300 mt-2" />
            </div>

            <div className="mt-4 flex items-center justify-center gap-4">
              {/* Avatars */}
              <div className="flex -space-x-2">
                {[avatar1, avatar2, avatar3, avatar4].map((avatar, i) => (
                  <img
                    key={i}
                    src={avatar}
                    alt={`Avatar ${i + 1}`}
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white"
                  />
                ))}
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2">
                <div className="flex gap-1">
                  {[...Array(4)].map((_, i) => (
                    <FontAwesomeIcon
                      key={i}
                      icon={faStar}
                      className="text-yellow-400"
                    />
                  ))}
                  <FontAwesomeIcon
                    icon={faStarHalfAlt}
                    className="text-yellow-400"
                  />
                </div>
                <span className="text-white text-sm font-medium opacity-70">
                  4.9/5 Rating
                </span>
              </div>
            </div>
          </div>

          {/* Box 2 */}
          <div className="bg-gradient-to-b from-[#0FA9E9] to-[#0786E2] rounded-xl p-4 sm:p-6 w-full lg:w-[393px] h-auto lg:h-[300px] text-white flex flex-col justify-between">
            <div>
              <div className="font-medium text-lg">
                Proven Business & Financial Expertise
              </div>
              <div className="text-sm mt-1 leading-snug py-4">
                Bankbooker Reliable seeds for business & financial growth. Our
                consultants are the Best Today
              </div>
              <button className="border mt-4 border-gray-300 px-5 py-2 rounded-lg text-xs text-white hover:bg-white hover:text-black transition duration-300">
                Learn More
              </button>
            </div>
            <div className="mt-6">
              <div className="flex items-center gap-2 mt-3 text-white">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white text-[#00A3FF] flex items-center justify-center">
                  <FontAwesomeIcon icon={faPlay} className="text-md" />
                </div>
                <span className="text-sm">
                  How does it work?
                  <br />
                  <span className="text-[13px] text-white/80">Play video</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankbookerLanding;
