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
import DynamicTitle from "@/components/ui/DynamicTitle.jsx";
import ToolbarMobile from "@/components/layout/ToolbarMobile.jsx";
import icon1 from "@/assets/Services/icon1.png";
import icon2 from "@/assets/Services/icon2.png";
import icon3 from "@/assets/Services/icon3.png";
import icon4 from "@/assets/Services/icon4.png";
import icon5 from "@/assets/Services/icon5.png";

const homeServices = [
  {
    icon: icon1,
    title: "Оплата инвойсов",
    description: "Производим оплату в любую точку мира",
  },
  {
    icon: icon2,
    title: "Банковские продукты",
    description: "",
  },
  {
    icon: icon3,
    title: "Аутсоринг Бухгалтерии",
    description: "Персонализированная система управленческого учета",
  },
  {
    icon: icon4,
    title: "Налоговый консалтинг",
    description: "Сопровождение налоговых проверок",
  },
  {
    icon: icon5,
    title: "Юридический департамент",
    description: "Арбитраж, управляемое банкротство",
  },
];

function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <DynamicTitle />

          
          <div className="mb-8 md:mb-12">
            <Bankbooker />
          </div>
          <div className="mb-8 md:mb-16">
            <Brands />
          </div>
          <div className="mb-16 md:mb-24">
            <Services
              title="Financial Consulting Services"
              subtitle="Our Services"
              description="Discover service excellence. We craft tailored solutions to meet your unique needs and fuel success"
              services={homeServices}
            />
          </div>
          <div className="mb-16 md:mb-24">
            <Info />
          </div>
        </div>

        <div className="w-full bg-gray-50">
          <Steps />
        </div>

        <div className="mb-16 md:mb-24">
          <CtaCard />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <OffersGrid />
          <Pricing />
          <Comments />
          <Contact />
        </div>
      </main>
    </div>
  );
}

export default Home;
