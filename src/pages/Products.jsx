import Landing from "@/components/subpageui/Landing.jsx";
import Services from "@/components/ui/Services.jsx";
import Steps from "@/components/ui/Steps.jsx";
import Pricing from "@/components/ui/Pricing.jsx";
import Comments from "@/components/ui/Comments.jsx";
import Info from "@/components/ui/Info.jsx";
import Contact from "@/components/ui/Contact.jsx";
import icon1 from "@/assets/Services/icon1.png";
import icon2 from "@/assets/Services/icon2.png";
import icon3 from "@/assets/Services/icon3.png";
import icon4 from "@/assets/Services/icon4.png";
import icon5 from "@/assets/Services/icon5.png";

const homeServices = [
  {
    icon: icon1,
    title: "Кредиты",
    description: "Наши специалисты изучат финансовое положение вашей компании и помогут распланировать бухучет наперед.",
  },
  {
    icon: icon2,
    title: "Банковские гарантии",
    description: "Приведение в порядок всех финансовых документов, для того чтобы они соответствовали требованиям законодательства.",
  },
  {
    icon: icon3,
    title: "Расчетно-кассовое обслуживание",
    description: "Выявим и устраним ошибкив существующей системе, повысим эффективность бизнес-процессов и сократим затраты.",
  },
  {
    icon: icon4,
    title: "Эквайринг",
    description: "Компания «BankBooking» предлагает услуги по сдаче нулевой отчётности с соблюдением всех необходимых норм.",
  },
  {
    icon: icon5,
    title: "Факторинг",
    description: "Планируем, оптимизируем, консультируем.  Проведем экспресс-оценку налоговых рисков.",
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
    </div>
  );
}
