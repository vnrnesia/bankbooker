import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faStarHalfAlt,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import GetStarted from "./GetStarted";

const HeroSection = ({ onGetStartedClick }) => {
  return (
    <div className="px-4 md:px-0 w-full pb-24 bg-white max-w-7xl">
      <div className="mx-auto ">
        <nav className="md:pt-0">
          <div className="flex justify-end items-center py-4"></div>
        </nav>

        <div className="mt-20 flex flex-col lg:flex-row gap-8  h-full">
          <div className="flex-1">
            <div>
              <div className="text-sm  font-medium text-gray-700">
                Welcome To Bankbooker
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight mt-2 font-medium">
                Международные платежи в любую точку мира с комиссией от 1%
                <br className="hidden sm:block" />
              </h1>
              <p className="text-sm text-gray-600 mt-4 max-w-[500px]">
                At Bankbooker, we embrace innovation as the driving force behind
                every solution. Our commitment to staying ahead of industry
                trends ensures that your business.
              </p>
            </div>

            <div className="pt-4">
              <div className="pt-2 md:w-[400px]">
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
              <div className=" bg-gradient-to-b from-[#0FA9E9] to-[#0786E2] rounded-xl p-4 sm:p-6 w-full lg:w-[393px] h-auto lg:h-[300px] text-white flex flex-col justify-between transform transition duration-300 hover:scale-105">
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
                      How does it work?
                      <br />
                      <span className="text-[13px] text-white/80">
                        Play video
                      </span>
                    </span>
                  </div>
                </div>
                <img
                  src="/illustration.png"
                  alt="illustration"
                  className=" mt-[-60px] ml-24 md:ml-32 w-[75%] md:w-[70%]"
                />
              </div>
            </div>
          </div>

          <div className="hidden lg:block flex-1 bg-gray-200 rounded-xl max-w-2xl p-6">
            <p className="text-gray-700">Content</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
