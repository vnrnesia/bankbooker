import Logo from "@/assets/logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import navbarIcon1 from "@/assets/Services/icon1.png";
import navbarIcon2 from "@/assets/Services/icon2.png";
import navbarIcon3 from "@/assets/Services/icon3.png";
import navbarIcon4 from "@/assets/Services/icon4.png";
import navbarIcon5 from "@/assets/Services/icon5.png";

const services = [
  { name: "Оплата инвойсов", path: "/payment", icon: navbarIcon1 },
  { name: "Аутсорсинг Бухгалтерии", path: "/accounting", icon: navbarIcon2 },
  { name: "Юридический департамент", path: "/legal", icon: navbarIcon3 },
  { name: "Налоговый консалтинг", path: "/consulting", icon: navbarIcon4 },
  { name: "Банковские Продукты", path: "/products", icon: navbarIcon5 },
];

export default function Navbar() {
  const [showServices, setShowServices] = useState(false);

  return (
    <nav className="pt-6 md:pt-24 w-full bg-white">
      <div className="max-w-7xl mx-auto px-5 py-4 flex justify-between items-center">
        {/* Left: Logo */}
        <div className="flex-shrink-0">
          <Link to="/" className="md:flex items-center gap-2 mb-4 hidden ">
            <img
              src={Logo}
              alt="Bankbooker Logo"
              className="h-12 w-auto object-contain"
            />
          </Link>
        </div>

        {/* Right: Navbar */}
        <div className="hidden font-[Manrope] md:flex items-center gap-4 lg:gap-6 text-sm text-[#333]">
          <a href="#" className="hover:text-blue-600 transition-colors">
            О сервисе
          </a>

          {/* Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowServices(!showServices)}
              className="hover:text-blue-600 transition-colors flex items-center gap-1 focus:outline-none"
            >
              Услуги
              <svg
                className={`w-4 h-4 transform transition-transform duration-300 ${
                  showServices ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {showServices && (
              <div className="absolute left-[-35px] mt-2 w-36 bg-white border border-gray-200 rounded-2xl shadow-md z-50 overflow-hidden">
                {services.map((item, idx) => (
                  <Link
                    key={idx}
                    to={item.path}
                    className="group flex items-center gap-2 px-4 py-2 text-sm hover:bg-gradient-to-b from-[#0FA9E9] to-[#0786E2] hover:text-white transition-colors"
                  >
                    <img
                      src={item.icon}
                      alt=""
                      className="w-4 h-4 transition duration-300 group-hover:filter group-hover:invert group-hover:brightness-0"
                    />
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <a href="#" className="hover:text-blue-600 transition-colors">
            Партнеры
          </a>
          <a href="#" className="hover:text-blue-600 transition-colors">
            Контакты
          </a>
          <button className="border border-gray-300 rounded-full px-4 py-1 text-sm font-medium hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-colors">
            Let's Talk
          </button>
        </div>
      </div>
    </nav>
  );
}
