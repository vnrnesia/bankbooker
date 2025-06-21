import { useEffect } from "react";

const TradingViewWidget = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
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
    const container = document.getElementById("tv-widget");
    container.innerHTML = ""; // önce temizle
    container.appendChild(script);
  }, []);

  return (
    <div
      id="tv-widget"
      className="  w-[300px] overflow-x-auto rounded-full "
      style={{ whiteSpace: 'nowrap', overflowX: 'auto' }}
    />
  );
};

export default TradingViewWidget;
