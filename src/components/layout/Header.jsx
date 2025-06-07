import { useEffect, useState } from "react";
import icon1 from "@/assets/HeaderIcon/icon1.png";
import icon2 from "@/assets/HeaderIcon/icon2.png";
import icon3 from "@/assets/HeaderIcon/icon3.png";
import icon4 from "@/assets/HeaderIcon/icon4.png";

export default function Header() {
  const [showHeader, setShowHeader] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowHeader(window.scrollY < 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`hidden md:flex fixed top-0 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 
        ${showHeader ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}
        bg-white top-4 shadow-md border border-gray-200 rounded-full px-4 py-4 h-[64px] w-[78%] 
        items-center justify-between text-sm text-[#333] font-sans`}
    >
      <div className="flex items-center space-x-8">
        <div className="flex items-center space-x-2">
          <img src={icon1} alt="" />
          <span className="text-black font-medium">info@bankbooker.com</span>
        </div>
        <div className="h-[1px] w-12 bg-gray-300"></div>
        <div className="flex items-center space-x-2">
          <img src={icon2} alt="" />
          <span className="text-black font-medium">+7 (917) 889–94–57</span>
        </div>
      </div>

      <div className="text-gray-400 whitespace-nowrap">
        Bankbooker - for all{" "}
        <span className="text-black font-medium">your business</span>
        <span className="text-gray-400"> endeavors</span>
      </div>

      <div className="flex items-center space-x-8">
        <div className="flex items-center space-x-2">
          <img src={icon3} alt="" />
          <span>English</span>
        </div>
        <div className="h-[1px] w-12 bg-gray-300"></div>
        <div className="flex items-center space-x-2">
          <img src={icon4} alt="" />
          <span>10:00am – 06.00pm</span>
        </div>
      </div>
    </div>
  );
}
