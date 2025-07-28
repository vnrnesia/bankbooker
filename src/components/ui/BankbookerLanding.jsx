import React from "react";
import ToGetStarted from "./ToGetStarted";

const HeroSection = ({ onGetStartedClick }) => {
  return (
    <div className="px-4 md:px-0 w-full pb-24 bg-white max-w-7xl">
      <div className="mx-auto ">
        <nav className="md:pt-0">
          <div className="flex justify-end items-center py-4"></div>
        </nav>

        <div className="md:mt-10 flex flex-col lg:flex-row gap-8  h-full">
          <div className="flex-1">
            <div>
              <div className="text-sm font-medium text-gray-700">
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

            <button onClick={onGetStartedClick}>
              <ToGetStarted text="See a demo" />
            </button>
            <button className="hidden md:block fixed bottom-5 right-[85px]" onClick={onGetStartedClick}>
              <ToGetStarted text="Reach us!" />
            </button>

            {/* Diğer içerik */}
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
