import HeroSection from "@/components/ui/BankbookerLanding.jsx";
import Pricing from "@/components/ui/Pricing.jsx";
import Brands from "@/components/ui/Brands.jsx";
import ServicesMain from "@/components/ui/ServicesMain.jsx";
import Info from "@/components/ui/Info.jsx";
import Steps from "@/components/ui/Steps.jsx";
import Comments from "@/components/ui/Comments.jsx";
import Contact from "@/components/ui/Contact.jsx";
import CtaCard from "@/components/ui/CtaCard.jsx";
import OffersGrid from "@/components/ui/OffersGrid.jsx";
import Calculator from "../components/ui/Calculator";
import AccordionMenu from "../components/ui/AcordionMenu";
import GetStarted from "../components/ui/GetStarted";
import React, { useRef } from "react";

function Home() {
  const getStartedRef = useRef(null);

  const scrollToGetStarted = () => {
    getStartedRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="min-h-screen  flex flex-col md:max-w-[90%] 3xl:max-w-[100%] mx-auto">
        <main className="flex-grow">
          <div className="container mx-auto  max-w-7xl">
            <div className="mb-8 pt-10 md:pt-0  max-w-sm md:max-w-[100%] mx-auto md:mb-12">
              <HeroSection onGetStartedClick={scrollToGetStarted} />{" "}
            </div>

            <div className="max-w-sm px-4 md:px-0 mx-auto md:max-w-[100%]">
                <OffersGrid />
              </div>
            
            <div className="mb-16 md:mb-24">
              <div className="max-w-sm px-4 md:px-0 mx-auto md:max-w-5xl ">
                <Calculator />
              </div>
              
            </div>
            <div className="mb-16 md:mb-24"></div>
          </div>
          </main>

          </div>

          <div className="w-full bg-gray-50">
            <Steps />
          </div>

          <div className="mb-16 md:mb-24">
            <CtaCard />
            <div className="mx-auto px-4 md:px-0 max-w-sm md:max-w-[67%] pt-24 mb-8 md:mb-16">
              <Brands />
            </div>
            <div ref={getStartedRef} className="scroll-mt-[250px]">
              <GetStarted />
            </div>
          </div>

          <div className="max-w-sm px-4 md:px-0 md:max-w-[90%] 3xl:max-w-[100%] container mx-auto ">
            <Info />
            <Comments />
            <div className="py-16">
              <AccordionMenu />
            </div>
            <Contact />
          </div>
        
      
    </>
  );
}

export default Home;
