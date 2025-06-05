import icon1 from "@/assets/HeaderIcon/icon1.png";
import icon2 from "@/assets/HeaderIcon/icon2.png";
import icon3 from "@/assets/HeaderIcon/icon3.png";
import icon4 from "@/assets/HeaderIcon/icon4.png";

export default function Header() {
  return (
    <div className=" py-10 h-[64px] mx-auto flex items-center justify-between text-sm text-[#333] font-sans">
      <div className="flex items-center space-x-8">
        <div className="flex items-center space-x-2">
          <img src={icon1} alt="" />
          <span className="text-black font-medium">info@bankbooker.com</span>
        </div>
        <div className="h-[1px] w-12 bg-gray-300"></div>
        <div className="flex items-center space-x-2">
          <i className="fas fa-phone-alt text-gray-400"></i>
          <img src={icon2} alt="" />
          <span className="text-black font-medium">+7 (917) 889–94–57</span>
        </div>
      </div>

      <div className="text-gray-400">
        Bankbooker - for all{" "}
        <span className="text-black font-medium">your business</span>
        <span className="text-gray-400"> endeavors</span>
      </div>

      <div className="flex items-center space-x-8">
        <div className="flex items-center space-x-2">
          <i className="fas fa-globe text-gray-500"></i>
          <img src={icon3} alt="" />
          <span>English</span>
        </div>
        <div className="h-[1px] w-12 bg-gray-300"></div>
        <div className="flex items-center space-x-2">
          <i className="fas fa-clock text-gray-500"></i>
          <img src={icon4} alt="" />
          <span>10:00am – 06.00pm</span>
        </div>
      </div>
    </div>
  );
}
