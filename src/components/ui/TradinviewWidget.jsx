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
    { proName: "FX_IDC:USDRUB", title: "USD/RUB" },
  { proName: "FX_IDC:EURRUB", title: "EUR/RUB" },
  { proName: "FX_IDC:CNYRUB", title: "CNY/RUB" }, // May not be available; verify with TradingView
  { proName: "FX_IDC:AEDRUB", title: "AED/RUB" }, // May not be available; verify with TradingView
  { proName: "FX_IDC:TRYRUB", title: "TRY/RUB" }  // Represents TRY value in RUB
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
