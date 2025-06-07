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

function App() {
  return (
    <>
      <div className="mx-4 md:mx-52">
        <div className="mb-10">
          <Header />
        </div>
        <div>
          <MobileHeader/>
        </div>
        <div className="mb-10">
          <Bankbooker />
        </div>
        <div className="mb-10">
          <Brands />
        </div>
        <div className="mb-24">
          <Services />
        </div>
        <div className="mb-24">
          <Info />
        </div>
      </div>

      <div className="px-4 md:px-0">
        <Steps />
      </div>

      <div className="mb-24 px-4 md:px-0">
        <CtaCard />
      </div>

      <div className="mx-4 md:mx-52">
        <div className="mb-24">
          <Pricing />
        </div>
        <div className="mb-36">
          <Comments />
        </div>
        <div className="mb-10">
          <Contact />
        </div>
      </div>

      <Footer />
    </>
  );
}


export default App;
