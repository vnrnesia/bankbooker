import React from "react";

const Currency = () => {
  const rates = [
    {
      currency: "USD",
      rate: 77.8855,
      icon: "/flags/usa.png",
      iconWidth: 14,
      iconHeight: 20,
    },
    {
      currency: "EUR",
      rate: 91.1201,
      icon: "/flags/eu.png",
      iconWidth: 14,
      iconHeight: 20,
    },
    {
      currency: "CNY",
      rate: 10.8435,
      icon: "/flags/china.png",
      iconWidth: 14,
      iconHeight: 20,
    },
    {
      currency: "AED",
      rate: 98.1234,
      icon: "/flags/uae.png",
      iconWidth: 14,
      iconHeight: 20,
    },
    {
      currency: "TRY",
      rate: 0.5678,
      icon: "/flags/turkey.png",
      iconWidth: 14,
      iconHeight: 20,
    },
  ];

  return (
    <div className="mx-auto">
      <div className="flex fixed w-full z-40">
        {rates.map((rate, index) => (
          <div
            key={index}
            className="flex-1 bg-gray-100 p-2 text-center flex items-center justify-center"
          >
            <img
              src={rate.icon}
              alt={rate.currency}
              style={{
                width: `${rate.iconWidth}px`,
                height: `${rate.iconHeight}px`,
              }}
              className="object-contain shrink-0 mb-3 md:mb-0 "
            />
            <div className="flex flex-col items-start md:flex-row md:items-center md:gap-2">
              <div className="flex items-center gap-1">
                <p className="text-blue-600 text-[10px] md:text-base ml-[8px] font-semibold">{rate.currency}</p>
                <p className="text-gray-700 text-[10px] hidden md:block">ЦБ</p>
              </div>
              <p className="text-[10px]">{rate.rate}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Currency;
