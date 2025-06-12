import Logo from "@/assets/logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";

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
              <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-2xl shadow-md z-50 overflow-hidden">
                {[
                  { name: "Оплата инвойсов", path: "/payment" },
                  { name: "Аутсорсинг Бухгалтерии", path: "/accounting" },
                  { name: "Юридический департамент", path: "/legal" },
                  { name: "Налоговый консалтинг", path: "/consulting" },
                  { name: "Банковские Продукты", path: "/products" },
                ].map((item, idx) => (
                  <Link
                    key={idx}
                    to={item.path}
                    className="block px-4 py-2 text-sm hover:bg-blue-50 transition"
                  >
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
