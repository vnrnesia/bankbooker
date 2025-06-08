import Bankbooker from "@/components/ui/BankbookerLanding.jsx";
import Header from "@/components/layout/Header.jsx";
import Pricing from "@/components/ui/Pricing.jsx";
import Brands from "@/components/ui/Brands.jsx";
import Services from "@/components/ui/Services.jsx";
import Info from "@/components/ui/Info.jsx";
import Steps from "@/components/ui/Steps.jsx";
import Comments from "@/components/ui/Comments.jsx";
import Footer from "@/components/layout/Footer.jsx";
import Contact from "@/components/ui/Contact.jsx";
import CtaCard from "@/components/ui/CtaCard.jsx";
import MobileHeader from "@/components/layout/MobileHeader.jsx";
import OffersGrid from "@/components/ui/OffersGrid.jsx";
import DynamicTitle from "@/components/ui/DynamicTitle.jsx"
import ToolbarMobile from "@/components/layout/ToolbarMobile.jsx"

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <DynamicTitle/>
          <div className="mb-6 md:mb-10">
            <Header />
          </div>
          <div className="md:hidden">
            <MobileHeader />
          </div>
          <div className="mb-8 md:mb-12">
            <Bankbooker />
          </div>
          <div className="mb-8 md:mb-16">
            <Brands />
          </div>
          <div className="mb-16 md:mb-24">
            <Services />
          </div>
          <div className="mb-16 md:mb-24">
            <Info />
          </div>
        </div>

        {/* Steps Section */}
        <div className="w-full bg-gray-50">
          <div className="">
            <Steps />
          </div>
        </div>

        {/* CTA Section */}
        <div className="">
          <div className="my-16 md:my-24">
            <CtaCard />
          </div>
        </div>

        {/* Offers and Pricing Section */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="mb-16 md:mb-24">
            <OffersGrid />
            <Pricing />
          </div>
          <div className="mb-12 md:mb-16">
            <Comments />
          </div>
          <div className="mb-10 md:mb-16">
            <Contact />
          </div>
        </div>
      </main>

      <Footer />
      <ToolbarMobile />
    </div>
  );
}

export default App;
