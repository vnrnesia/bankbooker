import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ivan from "@/assets/ivan.png";
import icon1 from "@/assets/LeftPanel/icon1.png";
import icon2 from "@/assets/LeftPanel/icon2.png";
import icon3 from "@/assets/LeftPanel/icon3.png";
import icon4 from "@/assets/LeftPanel/icon4.png";
import Comments from "../components/ui/Comments";
import Info from "../components/ui/Info";
import Brands from "../components/ui/Brands";

import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";

export default function Partner() {
  return (
    <>
      <section className="flex flex-col max-w-xs justify-center items-center md:flex-row  md:max-w-7xl mx-auto pt-24 md:pt-36 md:pb-24  gap-x-8">
        {/* Sol taraf */}
        <div className="md:w-1/2  flex max-w-l flex-col justify-between h-full">
          <div>
            <h1 className="text-5xl text-gray-800 pb-10">
              Присоединяйся к партнерсукой программе
            </h1>
            <h3 className="text-gray-700 pb-10">
              Узнайте за 1 минуту, подходит ли вам наша партнёрская программа и
              сколько вы можете зарабатывать!
            </h3>

            {/* Buton */}
            {/* Buton */}
            <div className="flex w-full lg:w-[400px] bg-gray-100 rounded-md overflow-hidden shadow-sm cursor-pointer mb-10">
              <div className="flex-grow py-3 px-1 text-sm bg-gray-100">
                Стать Партнерем{" "}
              </div>
              <div className="flex items-center justify-center px-4 bg-gradient-to-l from-[#0273DE] to-[#10B0EB] hover:scale-110 transition-transform duration-300">
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

          {/* Kart */}
          <div className="bg-[#0D7ECF] rounded-xl p-4 sm:p-6 w-full lg:w-[400px] text-white flex flex-col justify-between transform transition duration-300 hover:scale-105 h-[200px]">
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-4 text-center">
                <div className="text-3xl sm:text-4xl font-sans">120+</div>
                <div className="text-sm leading-snug max-w-[220px] text-left">
                  Агентов и Брокеров оплачивают инвойсы своих клиентов через наш
                  сервис
                </div>
              </div>
              <div className="h-[1px] w-full bg-gray-300 mt-2" />
            </div>

            <div className="mt-4 flex sm:flex-col xl:flex-row items-center justify-center gap-4">
              <div className="flex -space-x-2">
                {["avatar1", "avatar2", "avatar3", "avatar4"].map((name, i) => (
                  <img
                    key={i}
                    src={`/avatar/${name}.png`}
                    alt={`Avatar ${i + 1}`}
                    width={40}
                    height={40}
                    className="rounded-full border-2 border-white"
                  />
                ))}
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
        </div>

        {/* Sağ taraf */}
        <div className="md:w-1/2 py-10 md:py-0 flex h-full">
          <div className="rounded-xl w-[360px] md:w-1/2 flex-1 h-[508px]  bg-gray-200 shadow-md hover:scale-105 transform duration-300 flex flex-col items-center justify-center p-8 text-center ">
            <p className="text-gray-700 font-medium text-md text-center mb-2">
              Финансовые консалтинг и услуги международных переводов для B2B
            </p>
            <div className="w-[220px] h-[220px] rounded-full overflow-hidden ">
              <img
                src={ivan}
                alt="Profile"
                className="w-full h-full omin-h-screen bject-cover object-center"
              />
            </div>

            <h3 className="text-xl font-semibold mt-4">Ivan Marochkin</h3>
            <p className="text-sm text-gray-500 mb-2">CEO</p>

            <div className="flex justify-center gap-3 mb-6">
              <img src={icon1} alt="X" className="w-4 h-4" />
              <img src={icon2} alt="LinkedIn" className="w-4 h-4" />
              <img src={icon3} alt="Facebook" className="w-4 h-4" />
              <img src={icon4} alt="Instagram" className="w-4 h-4" />
            </div>

            <a
              href="https://t.me/bankbooker"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto text-blue-600 text-sm flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M9.47 14.81l-.39 4.23c.56 0 .8-.24 1.09-.52l2.62-2.46 5.45 3.98c1 .55 1.72.26 1.97-.92l3.58-16.74h.01c.32-1.49-.54-2.08-1.5-1.76L1.44 9.67c-1.47.54-1.46 1.32-.25 1.67l4.62 1.44 10.73-6.77c.51-.31.98-.14.6.2L9.47 14.81z" />
              </svg>
              t.me/bankbooker
            </a>
          </div>
        </div>
      </section>
      <div className=" max-w-sm px-2 md:px-0 md:max-w-7xl mx-auto">
        <div className="pt-10"><Brands /></div>
        <Comments />
      </div>
      <div className=" pb-16 max-w-sm  md:px-0 md:max-w-7xl mx-auto">
        <Info />
      </div>
    </>
  );
}
