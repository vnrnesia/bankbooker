"use client";

import React, { useRef, useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Footer from "@/components/layout/Footer.jsx";
import OffersGrid from "@/components/ui/OffersGrid.jsx";
import Steps from "@/components/ui/Steps.jsx";
import Comments from "../components/ui/Comments";
import GetStarted from "../components/ui/GetStarted";

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const scrollContainerRef = useRef(null);
  const [searchParams] = useSearchParams();

  const services = [
    {
      id: "invoice",
      title: "Оплата инвойсов",
      img: "/paymentLogo.png",
    },
    {
      id: "currency-return",
      title: "Возврат валютной выручки",
      img: "/earnings.png",
      desc: "Предоставляем сервис по возврату вашей валютной выручки из-за рубежа. Подписываем контракт с вашим покупателем зарубежом и как ваш агент принимаем валютную выручку по вашим контрактам - конвертируем по выгодному курсу и вы получаете выручку в российском рубле ко курсу ЦБ на день перевода минуя скрытые комиссии и долгие трансграничные переводы.",
    },
  ];

  const handleCardClick = (serviceId) => {
    setSelectedService(serviceId);
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
    const detailsParam = searchParams.get("details");
    if (detailsParam) {
      setSelectedService(detailsParam);
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
      {/* Mobile scroll buttons */}
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
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
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
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Services list */}
      <div
        ref={scrollContainerRef}
        className="flex w-full md:max-w-5xl md:flex-nowrap overflow-x-auto md:overflow-visible px-4 md:px-0 pt-14 scroll-smooth no-scrollbar"
      >
        {services.map((service) => (
          <div
            key={service.id}
            onClick={() => handleCardClick(service.id)}
            className={`min-w-[300px] md:w-[500px] h-[300px] flex-1 rounded-2xl m-4 p-6 flex flex-col items-center justify-center text-center transition duration-300 cursor-pointer gap-8 
              ${
                selectedService === service.id
                  ? "scale-105 bg-gradient-to-r from-sky-500 to-blue-600 text-white"
                  : "bg-gray-100 group hover:scale-105 hover:bg-gradient-to-r hover:from-sky-500 hover:to-blue-600 hover:text-white"
              }`}
          >
            <img
              src={service.img}
              alt={service.title}
              className={`w-24 transition duration-300 transform ${
                selectedService === service.id
                  ? "scale-110"
                  : "group-hover:scale-110"
              }`}
            />
            <p className="text-2xl md:text-2xl font-semibold">{service.title}</p>
          </div>
        ))}
      </div>

      {/* Service details */}
      {selectedService && (
        <div id="service-details" className="w-full mt-24">
          <div className="md:mb-24 md:px-0 mx-auto md:max-w-[100%]">
            <div className="max-w-sm md:max-w-7xl mx-auto">
              {selectedService === "currency-return" && (
                <div className="text-center mb-12 px-4">
                  <h2 className="text-3xl font-bold mb-4">
                    Возврат валютной выручки без лишних комиссий и задержек
                  </h2>
                  <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                    Предоставляем сервис по возврату вашей валютной выручки из-за рубежа.
                    Подписываем контракт с вашим покупателем зарубежом и как ваш агент
                    принимаем валютную выручку по вашим контрактам — конвертируем по
                    выгодному курсу и вы получаете выручку в российском рубле ко курсу ЦБ
                    на день перевода, минуя скрытые комиссии и долгие трансграничные
                    переводы.
                  </p>
                  <button
                    onClick={() => {
                      const scrollAmount = window.innerWidth <= 768 ? 1500 : 2500;
                      window.scrollTo({
                        top: window.scrollY + scrollAmount,
                        behavior: "smooth",
                      });
                    }}
                    className="mt-6 bg-gradient-to-l hover:scale-105 transition duration-300 from-[#0273DE] to-[#10B0EB] text-white px-6 py-3 rounded-lg font-medium"
                  >
                    Бесплатная консультация
                  </button>
                </div>
              )}

              {/* Render OffersGrid only if service is not "currency-return" */}
              {selectedService !== "currency-return" && <OffersGrid />}
            </div>
            <div className="w-full bg-gray-50">
              <Steps />
            </div>
            <div className="max-w-sm md:max-w-[90%] 3xl:max-w-7xl mx-auto">
              <Comments />
            </div>
            <div>
              <GetStarted />
            </div>
          </div>
          <Footer />
        </div>
      )}
    </section>
  );
};

export default Services;
