import { Link } from "react-router-dom";

const services = [
  {
    icon: "/icons/legal.svg",
    title: "Legal Advisory",
    description: "Navigate regulations with confidence.",
    path: "/legal",
  },
  {
    icon: "/icons/accounting.svg",
    title: "Accounting",
    description: "Stay financially transparent and accurate.",
    path: "/accounting",
  },
  {
    icon: "/icons/consulting.svg",
    title: "Consulting",
    description: "Get expert business advice and insights.",
    path: "/consulting",
  },
  {
    icon: "/icons/payment.svg",
    title: "Payment Services",
    description: "Simplify your transactions securely.",
    path: "/payment",
  },
  {
    icon: "/icons/products.svg",
    title: "Financial Products",
    description: "Explore tools tailored to your growth.",
    path: "/products",
  },
];


const ServicesMain = ({
  title = "Financial Consulting Services",
  subtitle = "Our Services",
  description = "Discover service excellence. We craft tailored solutions to meet your unique needs and fuel success",
  services = [],
}) => {
  return (
    <div className="pt-12 sm:pt-16 md:pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-8 md:mb-10 text-center md:text-left">
        <div>
          <h3 className="text-sm sm:text-md text-gray-500 font-medium mb-1">
            {subtitle}
          </h3>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-neutral-900">
            {title}
          </h2>
        </div>
        <p className="text-sm sm:text-base text-gray-500 max-w-md mt-4 md:mt-0">
          {description}
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {services.slice(0, 3).map((service, index) => (
          <Link
            key={index}
            to={service.path || "#"}
            className="group border border-gray-200 rounded-2xl p-4 sm:p-6 transition bg-white hover:bg-gradient-to-b from-[#0FA9E9] to-[#0786E2] hover:text-white flex flex-col justify-between h-full no-underline"
          >
            <img
              src={service.icon}
              alt={`icon-${index + 1}`}
              className="h-8 w-8 sm:h-10 sm:w-10 mb-3 sm:mb-4 transition group-hover:brightness-0 group-hover:invert"
            />
            <h4 className="text-lg sm:text-xl font-sans mb-1">{service.title}</h4>
            <p className="text-sm sm:text-base text-gray-500 transition group-hover:text-white">{service.description}</p>
          </Link>
        ))}

        {/* Last 2 cards */}
        {services.length > 3 && (
          <div className="col-span-1 sm:col-span-2 lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 font-[Manrope]">
            {services.slice(3).map((service, index) => (
              <Link
                key={index + 3}
                to={service.path || "#"}
                className="group border border-gray-200 rounded-2xl p-4 sm:p-6 transition bg-white hover:bg-gradient-to-b from-[#0FA9E9] to-[#0786E2] hover:text-white flex flex-col justify-between h-full no-underline"
              >
                <img
                  src={service.icon}
                  alt={`icon-${index + 4}`}
                  className="h-8 w-8 sm:h-10 sm:w-10 mb-3 sm:mb-4 transition group-hover:brightness-0 group-hover:invert"
                />
                <h4 className="text-lg sm:text-xl font-sans mb-1">{service.title}</h4>
                <p className="text-sm sm:text-base text-gray-500 transition group-hover:text-white">{service.description}</p>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ServicesMain;
