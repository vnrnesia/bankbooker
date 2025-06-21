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
import { useState } from "react";
import Header from "@/components/layout/Header.jsx";
import navbarIcon1 from "@/assets/Services/icon1.png";
import navbarIcon2 from "@/assets/Services/icon2.png";
import navbarIcon3 from "@/assets/Services/icon3.png";
import navbarIcon4 from "@/assets/Services/icon4.png";
import navbarIcon5 from "@/assets/Services/icon5.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt, faPlay } from "@fortawesome/free-solid-svg-icons";


const BankbookerLanding = () => {
  const [showServices, setShowServices] = useState(false);

  const services = [
    { name: "Оплата инвойсов", path: "/payment" },
    { name: "Аутсорсинг Бухгалтерии", path: "/accounting" },
    { name: "Юридический департамент", path: "/legal" },
    { name: "Налоговый консалтинг", path: "/consulting" },
  ];

  const blueItems = services.slice(0, 2);
  const grayItems = services.slice(2);

  return (
    <div className="w-full min-h-screen bg-white">
      <div className="max-w-screen-xl mx-auto px-4">
        <Header />
        <div className="pt-[120px] md:pt-[70px] flex justify-center items-center">
          <div className="w-full flex flex-col md:flex-row gap-8">
            {/* Left Panel */}
            <div className="hidden md:flex min-w-[220px] bg-gradient-to-b from-[#BEC0C4] to-[#DFE2E7] py-4 rounded-xl flex-col justify-between lg:max-h-[770px]">
              <div className="flex flex-col h-full">
                <div className="flex justify-center items-center w-full">
                  <img
                    src={logo}
                    alt="Bankbooker Logo"
                    className="h-16 md:h-20 w-auto object-contain"
                  />
                </div>
                <div className="mt-[200px] flex flex-col items-center justify-center text-center">
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
                <div className="flex flex-col justify-end h-full">
                  <p className="mb-2 ml-4 text-[0.9rem]">
                    <span className="text-[#0FA9E9]">Bank</span>Booker - a
                    solution for your business
                  </p>
                  <div className="overflow-hidden w-full mx-auto mb-5 font-[Manrope]">
                    {/* Blue tags - scrolling left */}
                    <div className="relative w-full overflow-hidden">
                      <div
                        className="flex whitespace-nowrap gap-x-2 animate-marquee"
                        style={{ width: "max-content" }}
                      >
                        {[...blueItems, ...blueItems, ...blueItems].map(
                          (item, idx) => (
                            <Link
                              to={item.path}
                              key={`blue-${idx}`}
                              className="inline-block"
                            >
                              <span className="inline-block px-4 py-1.5 rounded text-[1.1vw] lg:text-[0.9vw] 2xl:text-[0.7vw] whitespace-nowrap bg-gradient-to-r from-[#0FA9E9] to-[#0786E2] text-white">
                                {item.name}
                              </span>
                            </Link>
                          )
                        )}
                      </div>
                    </div>
                    {/* Gray tags - scrolling right */}
                    <div className="relative w-full overflow-hidden mt-2">
                      <div
                        className="flex whitespace-nowrap gap-x-2 animate-marqueeReverse"
                        style={{ width: "max-content" }}
                      >
                        {[...grayItems, ...grayItems, ...grayItems].map(
                          (item, idx) => (
                            <Link
                              to={item.path}
                              key={`gray-${idx}`}
                              className="inline-block"
                            >
                              <span className="inline-block px-4 py-1.5 rounded text-[1.1vw] lg:text-[0.9vw] 2xl:text-[0.7vw] whitespace-nowrap bg-gradient-to-r from-[#8E8E8E] to-[#464646] text-white">
                                {item.name}
                              </span>
                            </Link>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Main Content */}
            <div className="flex-1 pt-0 pb-10">
              <nav className="md:pt-0">
                <div className="flex justify-end items-center">
                  <div className="hidden font-[Manrope] md:flex items-center gap-4 lg:gap-6 text-sm text-[#333]">
                    <Link
                      to="/about"
                      className="hover:text-blue-600 transition-colors"
                    >
                      О сервисе
                    </Link>
                    <div className="relative">
                      <button
                        onClick={() => setShowServices(!showServices)}
                        className="hover:text-blue-600 transition-colors focus-outline-none flex items-center gap-1"
                      >
                        Услуги
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
                        <div
                          className={`absolute right-[-95px] top-full mt-2 w-64 bg-white border border-gray-200 rounded-2xl shadow-md z-50 overflow-hidden transition-opacity duration-300 ${
                            showServices ? "opacity-100 animate-fadein" : "opacity-0"
                          }`}
                        >
                          <div className="flex flex-col px-4 py-4 gap-1">
                            {[
                              {
                                name: "Оплата инвойсов",
                                path: "/payment",
                                icon: navbarIcon1,
                              },
                              {
                                name: "Аутсорсинг Бухгалтерии",
                                path: "/accounting",
                                icon: navbarIcon2,
                              },
                              {
                                name: "Юридический департамент",
                                path: "/legal",
                                icon: navbarIcon3,
                              },
                              {
                                name: "Налоговый консалтинг",
                                path: "/consulting",
                                icon: navbarIcon4,
                              },
                              {
                                name: "Банковские Продукты",
                                path: "/products",
                                icon: navbarIcon5,
                              },
                            ].map((item, idx) => (
                              <Link
                                key={idx}
                                to={item.path}
                                className="group flex items-center gap-3 px-5 py-3 text-sm hover:from-sky-500 hover:to-blue-600 hover:text-white transition duration-300 cursor-pointer bg-gradient-to-r rounded-xl"
                              >
                                <img
                                  src={item.icon}
                                  alt={`${item.name} icon`}
                                  className="w-5 h-5 transition duration-300 group-hover:invert group-hover:brightness-0"
                                />
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                    <a href="#" className="hover:text-blue-600 transition-colors">
                      Партнеры
                    </a>
                    <Link
                      to="/contact"
                      className="hover:text-blue-600 transition-colors"
                    >
                      Контакты
                    </Link>
                    <button className="border border-gray-300 rounded-full px-4 py-1 text-sm font-medium hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-colors">
                      Let's Talk
                    </button>
                  </div>
                </div>
              </nav>
              <div className="md:mt-10">
                <div className="pl-0 ml-0">
                  <div className="text-sm font-medium text-gray-700">
                    Welcome To Bankbooker
                  </div>
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight mt-2 font-medium">
                    International Payment Solutions
                    <br className="hidden sm:block" />
                    and Complex Services for Businesses
                  </h1>
                 
                  <p className="text-sm font-[Manrope] text-gray-genic mt-4 max-w-[500px]">
                    At Bankbooker, we embrace innovation as the driving force
                    behind every solution. Our commitment to staying ahead of
                    industry trends ensures that your business.
                  </p>
                </div>
                <div className="mt-6 pl-0 ml-0 flex flex-wrap gap-4">
                  <button className="bg-gradient-to-b from-[#0FA9E9] to-[#0786E2] text-white font-medium px-6 py-2 rounded hover:from-[#0786E2] hover:to-[#0FA9E9] transition-all duration-300">
                    Get Started
                  </button>
                  <button className="border border-gray-300 px-6 py-2 rounded font-medium text-gray-700 hover:bg-gradient-to-r hover:from-sky-500 hover:to-blue-600 hover:text-white cursor-pointer transition duration-300">
                    Our Services
                  </button>
                </div>
                <div className="block md:hidden pt-6">
                  <div className="w-auto bg-white shadow-xl p-4 rounded-xl">
                    <div className="flex flex-col">
                      <div className="block md:hidden pt-6 text-2xl lg:text-3xl font-medium text-gray-800 mt-1">
                        Our Services
                      </div>
                      <div className="w-full mt-4 grid grid-cols-2 flex-wrap gap-2 justify-start font-[Manrope] items-start">
                        {services.map((item, idx) => (
                          <Link
                            key={idx}
                            to={item.path}
                            className="inline-block bg-gradient-to-b from-[#0FA9E9] to-[#0786E2] text-white px-2 py-1.5 rounded text-xs whitespace-nowrap hover:opacity-90 transition"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row gap-4 mt-4 md:mt-[82px]">
                <div className="bg-[#0D7ECF] rounded-xl p-4 sm:p-6 w-full lg:w-[400px] h-auto lg:h-[300px] text-white flex flex-col justify-between">
                  <div className="flex flex-col items-center gap-2">
                    <div className="flex items-center gap-4 text-center">
                      <div className="text-3xl sm:text-4xl font-sans">
                        120+
                      </div>
                      <div className="text-sm leading-snug max-w-[220px] text-left">
                        Grow Smarter, Faster With Bankbooker Financial Solutions
                      </div>
                    </div>
                    <div className="h-[1px] w-full bg-gray-300 mt-2" />
                  </div>
                  <div className="mt-4 flex sm:flex-col xl:flex-row items-center justify-center gap-4">
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
                <div className="bg-gradient-to-b from-[#0FA9E9] to-[#0786E2] rounded-xl p-4 sm:p-6 w-full lg:w-[393px] h-auto lg:h-[300px] text-white flex flex-col justify-between">
                  <div>
                    <div className="font-medium text-lg">
                      Proven Business & Financial Expertise
                    </div>
                    <div className="text-sm mt-1 leading-snug py-4">
                      Bankbooker Reliable seeds for business & financial growth.
                      Our consultants are the Best Today
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
                        <span className="text-[13px] text-white/80">
                          Play video
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankbookerLanding;