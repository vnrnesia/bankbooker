import React, { useEffect, useState } from "react";

const currencyIDs = {
  USD: "R01235",
  EUR: "R01239",
  CNY: "R01375",
  AED: "R01335",
  TRY: "R01700",
};

const defaultRates = [
  { currency: "USD", rate: 77.8855, icon: "/flags/usa.png", iconWidth: 36, iconHeight: 26 },
  { currency: "EUR", rate: 91.1201, icon: "/flags/eu.png", iconWidth: 36, iconHeight: 26 },
  { currency: "CNY", rate: 10.8435, icon: "/flags/china.png", iconWidth: 36, iconHeight: 26 },
  { currency: "AED", rate: 98.1234, icon: "/flags/uae.png", iconWidth: 36, iconHeight: 26 },
  { currency: "TRY", rate: 0.5678, icon: "/flags/turkey.png", iconWidth: 36, iconHeight: 26 },
];

const icons = {
  USD: "/flags/usa.png",
  EUR: "/flags/eu.png",
  CNY: "/flags/china.png",
  AED: "/flags/uae.png",
  TRY: "/flags/turkey.png",
};

const Currency = () => {
  const [rates, setRates] = useState(defaultRates);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await fetch("https://www.cbr.ru/scripts/XML_daily.asp");
        const xmlText = await response.text();
        const parser = new DOMParser();
        const xml = parser.parseFromString(xmlText, "text/xml");

        const newRates = Object.entries(currencyIDs).map(([code, id]) => {
          const valute = xml.querySelector(`Valute[ID="${id}"]`);
          if (!valute) return null;

          let value = valute.querySelector("Value").textContent.replace(",", ".");
          const nominal = valute.querySelector("Nominal").textContent;

          const rate = parseFloat(value) / parseInt(nominal);

          return {
            currency: code,
            rate: +rate.toFixed(4),
            icon: icons[code],
            iconWidth: 36,
            iconHeight: 26,
          };
        }).filter(Boolean);

        setRates(newRates);
      } catch (error) {
        console.error("CBR API fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRates();
  }, []);

  return (
    <div className="mx-auto">
      <div className="flex fixed w-full z-40 bg-white shadow-md">
        {loading && (
          <div className="flex-1 text-center p-2 text-gray-500 text-sm">
            Döviz kurları yükleniyor...
          </div>
        )}
        {!loading &&
          rates.map((rate, index) => (
            <div
              key={index}
              className="flex-1 flex-row bg-gray-100 p-2 text-center flex items-center justify-center"
            >
              <img
                src={rate.icon}
                alt={rate.currency}
                style={{
                  width: `${rate.iconWidth}px`,
                  height: `${rate.iconHeight}px`,
                }}
                className="object-contain shrink-0 md:mb-0"
              />
              <div className="flex flex-col items-start md:flex-row md:items-center md:gap-2 ml-2">
                <div className="flex items-center gap-1">
                  <p className="text-blue-600 text-[10px] md:text-base font-semibold">
                    {rate.currency}
                  </p>
                  <p className="text-gray-700 text-[10px] hidden md:block">ЦБ</p>
                </div>
                <p className="text-[10px] md:text-sm">{rate.rate}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Currency;
