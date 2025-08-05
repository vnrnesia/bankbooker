import React from "react";

const Currency = () => {
  const rates = [
    {
      currency: "USD",
      rate: 77.8855,
      icon: "/currency/dollar.svg",
      iconWidth: 20,
      iconHeight: 20,
    },
    {
      currency: "EUR",
      rate: 91.1201,
      icon: "/currency/euro.svg",
      iconWidth: 14,
      iconHeight: 20,
    },
    {
      currency: "CNY",
      rate: 10.8435,
      icon: "/currency/yuan.svg",
      iconWidth: 14,
      iconHeight: 20,
    },
    {
      currency: "AED",
      rate: 98.1234,
      icon: "/currency/dirham.png",
      iconWidth: 12,
      iconHeight: 18,
    },
    {
      currency: "TRY",
      rate: 0.5678,
      icon: "/currency/tl.svg",
      iconWidth: 12,
      iconHeight: 19,
    },
  ];

  return (
    <div className="mx-auto">
      <div className="flex fixed w-full z-40">
        {rates.map((rate, index) => (
          <div
            key={index}
            className="flex-1 bg-gray-100 p-2 text-center flex items-center justify-center gap-2"
          >
            <img
              src={rate.icon}
              alt={rate.currency}
              style={{
                width: `${rate.iconWidth}px`,
                height: `${rate.iconHeight}px`,
              }}
              className="object-contain shrink-0"
            />
            <div className="flex flex-col items-start md:flex-row md:items-center gap-1">
              <div className="flex items-center gap-1">
                <p className="text-blue-600 font-semibold">{rate.currency}</p>
                <p className="text-gray-700 text-[10px]">ЦБ</p>
              </div>
              <p className="text-sm">{rate.rate}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Currency;
