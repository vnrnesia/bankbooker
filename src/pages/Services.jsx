import React, { useState } from "react";
import Info from "../components/ui/Info";
import Comments from "../components/ui/Comments";
import AccordionMenu from "../components/ui/AcordionMenu";
import Footer from "@/components/layout/Footer.jsx";


const Services = () => {
  const [showDetails, setShowDetails] = useState(false);

  const handleCardClick = () => {
    setShowDetails(true);
    const scrollY = window.scrollY;
    setTimeout(() => {
      window.scrollTo({
        top: scrollY + 900, 
        behavior: "smooth",
      });
    }, 100);
  };

  return (
    <section className="bg-gradient-to-r md:pt-10 flex flex-col items-center justify-start overflow-hidden">
      <div className="flex w-full max-w-md md:max-w-7xl">
        <div
          onClick={handleCardClick}
          className="h-[700px] flex-1 bg-gray-100 group rounded-2xl m-4 p-6 flex flex-col items-center justify-center text-center transition duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-sky-500 hover:to-blue-600 hover:text-white cursor-pointer gap-8"
        >
          <img
            src="/productsdropdown/invoice.png"
            alt="Payment Logo"
            className="w-24 md:w-36 transition duration-300 transform group-hover:scale-110 group-hover:filter group-hover:brightness-0 group-hover:invert"
          />
          <p className="text-3xl md:text-5xl font-semibold">Оплата инвойсов</p>
        </div>

       
        <div className="h-[700px] flex-1 bg-gray-100 group rounded-2xl m-4 p-6 flex flex-col items-center justify-center text-center transition duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-sky-500 hover:to-blue-600 hover:text-white cursor-pointer gap-8">
          <img
            src="/productsdropdown/banking.png"
            alt="Services Logo"
            className="w-24 md:w-36 transition duration-300 transform group-hover:scale-110 group-hover:filter group-hover:brightness-0 group-hover:invert"
          />
          <p className="text-3xl md:text-5xl font-semibold">
            Возврат валютной выручки
          </p>
        </div>
      </div>

      
      {showDetails && (
        <div className="w-full mt-24">
          <div className="max-w-sm px-4 md:px-0 md:max-w-[90%] 3xl:max-w-[100%] container mx-auto">
            <div className="md:pb-24">
              <Info />
            </div>
            <div className="max-w-7xl mx-auto">
              <Comments />
            </div>
            <div className="mb-16 md:pb-0 md:pt-24 md:py-16">
              <AccordionMenu />
            </div>
          </div>
          <Footer />
        </div>
        
      )}
    </section>
  );
};

export default Services;
