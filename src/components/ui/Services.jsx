import icon1 from "@/assets/Services/icon1.png";
import icon2 from "@/assets/Services/icon2.png";
import icon3 from "@/assets/Services/icon3.png";
import icon4 from "@/assets/Services/icon4.png";
import icon5 from "@/assets/Services/icon5.png";

const services = [
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

const Services = () => {
  return (
    <div className="pt-20 px-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-10 text-center md:text-left">
        <div>
          <h3 className="text-md text-gray-500 font-medium mb-1">
            Our Services
          </h3>
          <h2 className="text-3xl md:text-4xl font-semibold text-neutral-900">
            Financial Consulting Services
          </h2>
        </div>
        <p className="text-gray-500 max-w-md mt-4 md:mt-0">
          Discover service excellence. We craft tailored solutions to meet your
          unique needs and fuel success
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* İlk 3 kart */}
        {services.slice(0, 3).map((service, index) => (
          <div
            key={index}
            className="font-[Manrope] group border border-gray-200 rounded-2xl p-6 transition bg-white hover:bg-blue-600 hover:text-white flex flex-col justify-between"
          >
            <img
              src={service.icon}
              alt={`icon-${index + 1}`}
              className="h-10 w-10 mb-4 transition group-hover:brightness-0 group-hover:invert"
            />
            <h4 className="text-xl font-sans mb-1">{service.title}</h4>
            <p className="text-gray-500 transition group-hover:brightness-0 group-hover:invert">{service.description}</p>
          </div>
        ))}

        {/* Sonraki 2 kartı 2 sütuna yayıp ortalayalım */}
        <div className="col-span-1 md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6 font-[Manrope]">
          {services.slice(3).map((service, index) => (
            <div
              key={index + 3}
              className="group border border-gray-200 rounded-2xl p-6 transition bg-white hover:bg-blue-600 hover:text-white flex flex-col justify-between"
            >
              <img
                src={service.icon}
                alt={`icon-${index + 1}`}
                className="h-10 w-10 mb-4 transition group-hover:brightness-0 group-hover:invert"
              />
              <h4 className="text-xl font-sans mb-1">{service.title}</h4>
              <p className="transition group-hover:brightness-0 group-hover:invert text-gray-500">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
