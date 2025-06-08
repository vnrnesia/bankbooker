import React from "react";

const packages = [
  {
    title: "Basic Package",
    price: "$48.99",
    period: "/Month",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    features: Array(5).fill("Lorem Ipsum is simply dummy text"),
    highlighted: false,
  },
  {
    title: "Standard Package",
    price: "$68.99",
    period: "/Month",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    features: Array(5).fill("Lorem Ipsum is simply dummy text"),
    highlighted: false,
  },
  {
    title: "Premium Package",
    price: "$88.99",
    period: "/Month",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    features: Array(5).fill("Lorem Ipsum is simply dummy text"),
    highlighted: false,
  },
];

const Prices = () => {
  return (
    <div className=" font-[Manrope] pt-16 px-6 ">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
        <div>
          <h2 className="text-lg font-medium text-neutral-600 tracking-wide mb-1">Pricing</h2>
          <h1 className="text-4xl font-medium text-neutral-900 leading-tight">
            Flexible Pricing That Scales<br />With Your Business
          </h1>
        </div>
        <p className="text-gray-500 font-medium font-[Manrope] max-w-md text-md leading-relaxed">
          У нас есть решения для бизнеса любого масштаба —<br />
          от стартапов до крупных компаний. Найдите тариф,<br />
          который отвечает вашим задачам и целям.
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {packages.map((pkg, index) => (
          <div
            key={index}
            className="rounded-2xl shadow-md py-2 px-2  border border-gray-200 bg-white overflow-hidden group"
          >
            {/* Üst renkli alan */}
            <div
              className={`
                rounded-xl py-10 px-4 transition-colors duration-300
                ${
                  pkg.highlighted
                    ? "bg-[#047EDF] group-hover:bg-[#0368c1]"
                    : "bg-gray-100 group-hover:bg-[#047EDF]"
                }
              `}
            >
              <h3
                className={`text-md font-medium mb-2 transition-colors duration-300 ${
                  pkg.highlighted
                    ? "text-white"
                    : "group-hover:text-white text-neutral-900"
                }`}
              >
                {pkg.title}
              </h3>
              <div
                className={`text-4xl mb-1 font transition-colors duration-300 ${
                  pkg.highlighted
                    ? "text-white"
                    : "group-hover:text-white text-neutral-900"
                }`}
              >
                {pkg.price}
                <span
                  className={`ml-1 text-base font-normal transition-colors duration-300 ${
                    pkg.highlighted
                      ? "text-white/70"
                      : "group-hover:text-white/70 text-gray-500"
                  }`}
                >
                  {pkg.period}
                </span>
              </div>
              <p
                className={`text-sm transition-colors duration-300 ${
                  pkg.highlighted
                    ? "text-white/80"
                    : "group-hover:text-white/80 text-gray-500"
                }`}
              >
                {pkg.description}
              </p>
            </div>

            {/* Özellikler ve buton */}
            <div className="p-6">
              <h4 className="font-semibold text-sm mb-2 text-neutral-900">Including:</h4>
              <ul className="space-y-2 text-sm">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✔️</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="mt-6 w-full py-2 rounded-full text-sm font-semibold transition bg-blue-600 text-white hover:bg-blue-700">
                Select Package
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Prices;
