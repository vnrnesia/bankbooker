import HeroSection from "@/components/ui/BankbookerLanding.jsx";
import Pricing from "@/components/ui/Pricing.jsx";
import Brands from "@/components/ui/Brands.jsx";
import ServicesMain from "@/components/ui/ServicesMain.jsx";
import Info from "@/components/ui/Info.jsx";
import Steps from "@/components/ui/Steps.jsx";
import Comments from "@/components/ui/Comments.jsx";
import Contact from "@/components/ui/Contact.jsx";
import CtaCard from "@/components/ui/CtaCard.jsx";
import MobileHeader from "@/components/layout/MobileHeader.jsx";
import OffersGrid from "@/components/ui/OffersGrid.jsx";
import icon1 from "@/assets/Services/icon1.png";
import icon2 from "@/assets/Services/icon2.png";
import icon3 from "@/assets/Services/icon3.png";
import icon4 from "@/assets/Services/icon4.png";
import icon5 from "@/assets/Services/icon5.png";
import Calculator from "../components/ui/Calculator";
import Currency from "../components/ui/Currency";


const homeServices = [
  {
    icon: icon1,
    title: "Оплата инвойсов",
    description: "Производим оплату в любую точку мира",
    path: "/payment",
  },
  {
    icon: icon2,
    title: "Банковские продукты",
    description: "",
    path: "/products",
  },
  {
    icon: icon3,
    title: "Аутсоринг Бухгалтерии",
    description: "Персонализированная система управленческого учета",
    path: "/accounting",
  },
  {
    icon: icon4,
    title: "Налоговый консалтинг",
    description: "Сопровождение налоговых проверок",
    path: "/consulting",
  },
  {
    icon: icon5,
    title: "Юридический департамент",
    description: "Арбитраж, управляемое банкротство",
    path: "/legal",
  },
];

function Home() {
  return (
    <>
      <div className="pt-[140px] md:pt-[124px]">
        <Currency />
      </div>

      <div className="min-h-screen  flex flex-col md:max-w-[100%] mx-auto">
        <main className="flex-grow">
          <div className="container mx-auto  max-w-7xl">



            <div className="mb-8 pt-10 md:pt-0  max-w-sm md:max-w-[100%] mx-auto md:mb-12">
              <HeroSection />
            </div>
            <div className="mx-auto px-4 md:px-0 max-w-sm md:max-w-[100%] mb-8 md:mb-16">
              <Brands />
            </div>
            <div className="mb-16 md:mb-24">
              <div className="max-w-sm px-4 md:px-0 mx-auto md:max-w-5xl ">
                <Calculator />
              </div>
              <div className="max-w-sm px-4 md:px-0 mx-auto md:max-w-[100%]">
                <OffersGrid />
              </div>
            </div>
            <div className="mb-16 md:mb-24">

            </div>
          </div>

          <div className="w-full bg-gray-50">
            <Steps />
          </div>

          <div className="mb-16 md:mb-24">
            <CtaCard />
          </div>

          <div className="max-w-sm px-4 md:px-0 md:max-w-[100%] container mx-auto ">
            <Info />
            <Comments />
            <Contact />
          </div>
        </main>
      </div>
    </>
  );
}

export default Home;
