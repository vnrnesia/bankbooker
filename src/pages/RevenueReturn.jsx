"use client";

import React from "react";
import Footer from "@/components/layout/Footer.jsx";
import Steps from "@/components/ui/Steps.jsx";
import Comments from "@/components/ui/Comments.jsx";
import GetStarted from "@/components/ui/GetStarted.jsx";

const RevenuePayment = () => {
  return (
    <section className="bg-gradient-to-r pt-10 flex flex-col items-center justify-start overflow-hidden relative">
      <div className="w-full py-16 max-w-sm mx-auto  md:max-w-7xl flex flex-col md:flex-row justify-between items-start gap-10 ">
        {/* Sağ taraf */}
        <div className="w-full md:w-1/2 flex order-1 md:h-[380px] ">
          <div className="rounded-xl w-full  bg-gradient-to-l from-[#0273DE] to-[#10B0EB] shadow-md hover:scale-105 transform duration-300 flex flex-col items-center justify-center p-11 text-center">
            <div className="w-[250px] h-[250px] rounded-full overflow-hidden mb-4">
              <img
                src="/earnings.png"
                alt="Profile"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>

        {/* Sol taraf */}
        <div className="w-full md:w-1/2">
          <h1 className="text-4xl md:text-5xl text-gray-800 pb-6">
            Возврат валютной выручки без лишних комиссий и задержек
          </h1>
          <h3 className="text-gray-700 pb-10">
            Предоставляем сервис по возврату вашей валютной выручки из-за
            рубежа. Подписываем контракт с вашим покупателем зарубежом и как ваш
            агент принимаем валютную выручку по вашим контрактам — конвертируем
            по выгодному курсу и вы получаете выручку в российском рубле ко
            курсу ЦБ на день перевода, минуя скрытые комиссии и долгие
            трансграничные переводы.
          </h3>

          <div className="flex w-full lg:w-[400px] mt-2 bg-gray-100 rounded-md overflow-hidden shadow-sm cursor-pointer mb-10">
            <div className="flex-grow py-3  px-1 text-sm bg-gray-100">
              Стать Партнерем
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
      </div>
   

      <div className="w-full">
        <div className="w-full bg-gray-50">
          <Steps />
        </div>

        <div>
          <GetStarted />
        </div>
        <div className="max-w-sm md:max-w-[90%] 3xl:max-w-7xl mx-auto">
          <Comments />
        </div>
      </div>
    </section>
  );
};

export default RevenuePayment;
