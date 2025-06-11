import Landing from "@/components/subpageui/Landing.jsx";
import Services from "@/components/ui/Services.jsx";
import Steps from "@/components/ui/Steps.jsx";
import Pricing from "@/components/ui/Pricing.jsx";
import Comments from "@/components/ui/Comments.jsx";
import Info from "@/components/ui/Info.jsx";
import Contact from "@/components/ui/Contact.jsx";

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

export default function Banking() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="mb-8 md:mb-12">
            <Landing />
          </div>

          <div className="mb-16 md:mb-24">
            <Services
              title="Financial Consulting Services"
              subtitle="Our Services"
              description="Discover service excellence. We craft tailored solutions to meet your unique needs and fuel success"
              services={homeServices}
            />
          </div>
        </div>

        <div className="w-full bg-gray-50">
          <Steps />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <Pricing />
          <Comments />
          <Contact />
        </div>
      </main>

      <Footer />
      <ToolbarMobile />
    </div>
  );
}
