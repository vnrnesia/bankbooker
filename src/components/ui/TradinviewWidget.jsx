import { useEffect, useRef } from "react";

const TradingViewWidget = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    containerRef.current.innerHTML = ""; // temizle

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
    script.async = true;
    script.type = "text/javascript";

    // Embed config JSON'u script'in textContent olarak eklenmeli
    script.text = JSON.stringify({
      symbols: [
        { proName: "FX_IDC:USDTRY", title: "USD/TRY" },
        { proName: "FX_IDC:EURTRY", title: "EUR/TRY" },
        { proName: "FX_IDC:CNYTRY", title: "CNY/TRY" },
        { proName: "FX_IDC:AEDTRY", title: "AED/TRY" },
        { proName: "FX_IDC:RUBTRY", title: "RUB/TRY" }
      ],
      colorTheme: "light",
      isTransparent: false,
      displayMode: "regular",
      showSymbolLogo: false,
      hideSymbolVolume: true,
      locale: "tr"
    });

    containerRef.current.appendChild(script);
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full md:w-[300px] md:overflow-x-auto md:rounded-full"
      
    />
  );
};

export default TradingViewWidget;
