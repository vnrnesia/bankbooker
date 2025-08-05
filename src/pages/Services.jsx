"use client";

import React, { useRef, useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Info from "../components/ui/Info";
import Comments from "../components/ui/Comments";
import AccordionMenu from "../components/ui/AcordionMenu";
import Footer from "@/components/layout/Footer.jsx";
import OffersGrid from "@/components/ui/OffersGrid.jsx";
import Steps from "@/components/ui/Steps.jsx";
import GetStarted from "../components/ui/GetStarted";

const Services = () => {
  const [showDetails, setShowDetails] = useState(false);
  const scrollContainerRef = useRef(null);
  const [searchParams] = useSearchParams();
  const handleCardClick = () => {
    setShowDetails(true);
    const scrollY = window.scrollY;
    setTimeout(() => {
      window.scrollTo({
        top: scrollY + 300,
        behavior: "smooth",
      });
    }, 100);
  };

  const scrollLeft = () => {
    scrollContainerRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollContainerRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  useEffect(() => {
    if (searchParams.get("details") === "true") {
      setShowDetails(true);
      setTimeout(() => {
        const section = document.getElementById("service-details");
        if (section) {
          const rect = section.getBoundingClientRect();
          const offsetTop = window.scrollY + rect.top;

          window.scrollTo({
            top: offsetTop - 100,
            behavior: "smooth",
          });
        }
      }, 300);
    }
  }, [searchParams]);

  return (
    <section className="bg-gradient-to-r pt-10 flex flex-col items-center justify-start overflow-hidden relative">
      <div className="absolute top-4 right-4 flex gap-2 md:hidden z-10">
        <button
          onClick={scrollLeft}
          className="bg-gray-200 hover:bg-gray-300 p-2 rounded-full transition"
        >
          <svg
            className="w-5 h-5 text-gray-700"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={scrollRight}
          className="bg-gray-200 hover:bg-gray-300 p-2 rounded-full transition"
        >
          <svg
            className="w-5 h-5 text-gray-700"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      <div
        ref={scrollContainerRef}
        className="flex w-full md:max-w-5xl md:flex-nowrap overflow-x-auto md:overflow-visible px-4 md:px-0 pt-14 scroll-smooth no-scrollbar"
      >
        <div
          onClick={handleCardClick}
          className="min-w-[300px] md:w-[500px] h-[300px] flex-1 bg-gray-100 group rounded-2xl m-4 p-6 flex flex-col items-center justify-center text-center transition duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-sky-500 hover:to-blue-600 hover:text-white cursor-pointer gap-8"
        >
          <img
            src="/paymentLogo.png"
            alt="Payment Logo"
            className="w-24 transition duration-300 transform group-hover:scale-110"
          />
          <p className="text-2xl md:text-2xl font-semibold">Оплата инвойсов</p>
        </div>

        <div
          onClick={handleCardClick}
          className="min-w-[300px] md:w-[500px] h-[300px] flex-1 bg-gray-100 group rounded-2xl m-4 p-6 flex flex-col items-center justify-center text-center transition duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-sky-500 hover:to-blue-600 hover:text-white cursor-pointer gap-8"
        >
          <img
            src="/productsdropdown/banking.png"
            alt="Services Logo"
            className="w-24 transition duration-300 transform group-hover:scale-110 group-hover:filter group-hover:brightness-0 group-hover:invert"
          />
          <p className="text-2xl md:text-2xl font-semibold">
            Возврат валютной выручки
          </p>
        </div>
      </div>

      {showDetails && (
        <div id="service-details" className="w-full mt-24">
          <div className=" md:mb-24 md:px-0 mx-auto md:max-w-[100%]">
            <div className=" max-w-sm md:max-w-7xl mx-auto">
              <OffersGrid />
            </div>
            <div className="w-full bg-gray-50">
              <Steps />
            </div>
            <div className="max-w-sm md:max-w-[90%] 3xl:max-w-7xl  mx-auto">
              <Comments />
            </div>
            <div>
              <GetStarted/>
            </div>
          </div>
          <Footer />
        </div>
      )}
    </section>
  );
};

export default Services;
