import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import Spline from "@splinetool/react-spline";
import GetStarted from "./GetStarted";

const HeroSection = ({ onGetStartedClick }) => {
  return (
    <div className="px-4 md:px-0 w-full pb-24 bg-white max-w-7xl">
      <div className="mx-auto">
        <nav className="md:pt-0">
          <div className="flex justify-end items-center py-4"></div>
        </nav>

        <div className="pt-10 md:mt-20 flex flex-col lg:flex-row gap-8 h-full">
          <div className="flex-1">
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight mt-2 font-medium">
                Международные платежи в любую точку мира с комиссией от 1%
                <br className="hidden sm:block" />
              </h1>
              <p className="text-sm text-gray-600 mt-4 max-w-[500px]">
                Ваш международный платежный агент. Профессиональный B2B сервис
                международных переводов. Оплата санкционных товаров и возврат
                валютной выручки.
              </p>
            </div>

            <div className="pt-4">
              <div className="pt-2 md:w-[398px] gap-2 flex">
                <div
                  onClick={onGetStartedClick}
                  className="flex w-full bg-gray-100 rounded-md overflow-hidden shadow-sm cursor-pointer"
                >
                  <div className="flex-grow px-4 py-2 text-base bg-gray-100">
                    Оставьте заявку
                  </div>

                  <div className="flex items-center justify-center px-4 bg-gradient-to-l from-[#0273DE] to-[#10B0EB] hover:scale-125 transition-transform duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
                <a
                  href="https://wa.me/79178899457"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 455.731 455.731"
                    className="w-12 h-12 rounded-md"
                  >
                    <g>
                      <rect
                        x="0"
                        y="0"
                        fill="#1BD741"
                        width="455.731"
                        height="455.731"
                      />
                      <g>
                        <path
                          fill="#FFFFFF"
                          d="M68.494,387.41l22.323-79.284c-14.355-24.387-21.913-52.134-21.913-80.638
          c0-87.765,71.402-159.167,159.167-159.167s159.166,71.402,159.166,159.167c0,87.765-71.401,159.167-159.166,159.167
          c-27.347,0-54.125-7-77.814-20.292L68.494,387.41z M154.437,337.406l4.872,2.975c20.654,12.609,44.432,19.274,68.762,19.274
          c72.877,0,132.166-59.29,132.166-132.167S300.948,95.321,228.071,95.321S95.904,154.611,95.904,227.488
          c0,25.393,7.217,50.052,20.869,71.311l3.281,5.109l-12.855,45.658L154.437,337.406z"
                        />
                        <path
                          fill="#FFFFFF"
                          d="M183.359,153.407l-10.328-0.563c-3.244-0.177-6.426,0.907-8.878,3.037
          c-5.007,4.348-13.013,12.754-15.472,23.708c-3.667,16.333,2,36.333,16.667,56.333c14.667,20,42,52,90.333,65.667
          c15.575,4.404,27.827,1.435,37.28-4.612c7.487-4.789,12.648-12.476,14.508-21.166l1.649-7.702c0.524-2.448-0.719-4.932-2.993-5.98
          l-34.905-16.089c-2.266-1.044-4.953-0.384-6.477,1.591l-13.703,17.764c-1.035,1.342-2.807,1.874-4.407,1.312
          c-9.384-3.298-40.818-16.463-58.066-49.687c-0.748-1.441-0.562-3.19,0.499-4.419l13.096-15.15
          c1.338-1.547,1.676-3.722,0.872-5.602l-15.046-35.201C187.187,154.774,185.392,153.518,183.359,153.407z"
                        />
                      </g>
                    </g>
                  </svg>
                </a>
                <a
                  href="https://t.me/yourtelegrambot"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-12 h-12 rounded-md"
                    aria-label="Telegram"
                    role="img"
                  >
                    <rect width="512" height="512" rx="15%" fill="#37aee2" />
                    <path
                      fill="#c8daea"
                      d="M199 404c-11 0-10-4-13-14l-32-105 245-144"
                    />
                    <path
                      fill="#a9c9dd"
                      d="M199 404c7 0 11-4 16-8l45-43-56-34"
                    />
                    <path
                      fill="#f6fbfe"
                      d="M204 319l135 99c14 9 26 4 30-14l55-258c5-22-9-32-24-25L79 245c-21 8-21 21-4 26l83 26 190-121c9-5 17-3 11 4"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-4 mt-4 md:mt-[42px]">
              {/* Card 1 */}
              <div className="bg-[#0D7ECF] rounded-xl p-4 sm:p-6 w-full lg:w-[400px] h-auto lg:h-[300px] text-white flex flex-col justify-between transform transition duration-300 hover:scale-105">
                <div className="flex flex-col items-center gap-2">
                  <div className="flex items-center gap-4 text-center">
                    <div className="text-3xl sm:text-4xl font-sans">120+</div>
                    <div className="text-sm leading-snug max-w-[220px] text-left">
                      Агентов и Брокеров оплачивают инвойсы своих клиентов через
                      наш сервис{" "}
                    </div>
                  </div>
                  <div className="h-[1px] w-full bg-gray-300 mt-2" />
                </div>
                <div className="mt-4 flex sm:flex-col xl:flex-row items-center justify-center gap-4">
                  <div className="flex -space-x-2">
                    {["avatar1", "avatar2", "avatar3", "avatar4"].map(
                      (name, i) => (
                        <img
                          key={i}
                          src={`/avatar/${name}.png`}
                          alt={`Avatar ${i + 1}`}
                          width={40}
                          height={40}
                          className="rounded-full border-2 border-white"
                        />
                      )
                    )}
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                      {[...Array(4)].map((_, i) => (
                        <FontAwesomeIcon
                          key={i}
                          icon={faStar}
                          className="text-yellow-400 w-4 h-4"
                        />
                      ))}
                      <FontAwesomeIcon
                        icon={faStarHalfAlt}
                        className="text-yellow-400 w-4 h-4"
                      />
                    </div>
                    <span className="text-white text-sm font-medium opacity-70">
                      4.9/5 Rating
                    </span>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-gradient-to-b from-[#0FA9E9] to-[#0786E2] rounded-xl p-4 sm:p-6 w-full lg:w-[393px] h-auto lg:h-[300px] text-white flex flex-col justify-between transform transition duration-300 hover:scale-105">
                <div className="">
                  <div className="font-medium text-lg">
                    Лучшие условия по оплате инвойсов
                  </div>
                  <div className="text-sm mt-1 leading-snug py-4">
                    оплата за один день ЕС, Китай, США
                  </div>
                  <div className="flex gap-4">
                    <button className="border mt-4 border-gray-300 px-5 py-2 rounded-lg text-xs text-white hover:bg-white hover:text-black transition duration-300">
                      Свзтся с нами
                    </button>
                    <h2 className="pt-4  my-auto">от 1.5%</h2>
                  </div>
                </div>
                <div className="flex flex-row">
                  <div className="flex items-center mr-2 justify-center gap-2 mt-6 text-white">
                    <div className="w-8 h-8 p sm:w-10 sm:h-10 rounded-full bg-white text-[#00A3FF] flex items-center justify-center">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                    <span className="text-sm">
                      Как это работает?
                      <br />
                      <span className="text-[13px] text-white/80">
                        Смотреть видео
                      </span>
                    </span>
                  </div>
                </div>
                <img
                  src="/illustration.png"
                  alt="illustration"
                  className="mt-[-60px] ml-24 md:ml-32 w-[75%] md:w-[70%]"
                />
              </div>
            </div>
          </div>

          {/* Spline Viewer Section */}
          <div className="hidden lg:block flex-1 bg-gray-200 rounded-xl max-w-2xl p-6">
            <Spline scene="https://prod.spline.design/UYGWGYvSosl8f0H8/scene.splinecode" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
