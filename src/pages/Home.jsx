import React from "react";
import HeroSection from "@/components/ui/BankbookerLanding.jsx";
import Brands from "@/components/ui/Brands.jsx";
import Steps from "@/components/ui/Steps.jsx";
import Comments from "@/components/ui/Comments.jsx";
import Contact from "@/components/ui/Contact.jsx";
import CtaCard from "@/components/ui/CtaCard.jsx";
import OffersGrid from "@/components/ui/OffersGrid.jsx";
import Calculator from "../components/ui/Calculator";
import AccordionMenu from "../components/ui/AcordionMenu";
import GetStarted from "../components/ui/GetStarted";
import Info from "../components/ui/Info";

function Home({ getStartedRef, onGetStartedClick }) {
  return (
    <>
      <div className="min-h-screen flex flex-col md:max-w-[90%] 3xl:max-w-[100%] mx-auto">
        <main className="flex-grow">
          <div className="container mx-auto max-w-7xl">
            <div className="md:pt-8 max-w-sm md:max-w-[100%] mx-auto md:mb-12">
              <HeroSection onGetStartedClick={onGetStartedClick} />
            </div>

            <div className="max-w-sm px-4 md:mb-24 md:px-0 mx-auto md:max-w-[100%]">
              <OffersGrid onGetStartedClick={onGetStartedClick} />
            </div>

            <div className="mb-16 md:mb-36">
              <div className="max-w-sm px-4 md:px-0 mx-auto md:max-w-5xl ">
                <Calculator />
              </div>
            </div>
          </div>
        </main>
      </div>

      <div className="w-full bg-gray-50">
        <Steps />
      </div>

      <div className="mb-16 md:mb-24">
        <CtaCard />
        <div className="mx-auto px-4 md:px-0 max-w-sm lg:max-w-[90%] 2xl:max-w-7xl pt-24 md:pt-36 md:mb-8 md:pb-3">
          <Brands />
        </div>
        <div ref={getStartedRef} className="scroll-mt-[250px]">
          <GetStarted />
        </div>
      </div>

      <div className="max-w-sm px-4 md:px-0 md:max-w-[90%] 3xl:max-w-[100%] container mx-auto ">
        <div className="md:pb-24">
          <Info />
        </div>
        <div className="max-w-7xl mx-auto">
          <Comments />
        </div>
        <div className="mb-16 md:pb-0 md:pt-24 md:py-16">
          <AccordionMenu />
        </div>
        <Contact />
      </div>
    </>
  );
}

export default Home;
