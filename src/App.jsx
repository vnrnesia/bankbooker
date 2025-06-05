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

function App() {
  return (
    <>
      <div className="mx-52">
        <Header />
        <Bankbooker />
        <Brands />
        <Services />
        <Info />
        <Steps />
        <CtaCard />
        <Pricing />
        <Comments />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
