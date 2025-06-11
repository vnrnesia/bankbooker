import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

export default function MobileHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showServices, setShowServices] = useState(false);

  return (
    <header className="md:hidden fixed top-0 left-0 w-full z-50">
      {/* Üst Bar */}
      <div className="bg-white px-4 py-6 shadow flex items-center justify-between relative z-50">
        <Link to="/">
          <img src={logo} alt="Logo" className="h-auto w-[200px]" />
        </Link>

        {/* Hamburger / X */}
        <button
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
            setShowServices(false);
          }}
          className="hamburger-button relative w-12 h-12 flex items-center justify-center"
        >
          <div className="relative w-8 h-8">
            <span
              className={`absolute top-0 left-0 w-8 h-[3px] bg-black transition-transform duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-3.5" : ""
              }`}
            ></span>
            <span
              className={`absolute top-1/2 left-0 w-8 h-[3px] bg-black transition-opacity duration-300 transform -translate-y-1/2 ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`absolute bottom-0 left-0 w-8 h-[3px] bg-black transition-transform duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-3.5" : ""
              }`}
            ></span>
          </div>
        </button>
      </div>

      {/* Menü Ekranı */}
      <div
        className={`fixed inset-0 bg-white flex flex-col items-start pt-36 px-6 space-y-6 text-gray-600 font-[Manrope] text-xl font-light transition-transform duration-300 z-40 overflow-y-auto ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <a href="#about" onClick={() => setIsMenuOpen(false)} className="w-full">
          О сервисе
        </a>

        {/* Услуги ve alt menü */}
        <div className="w-full">
          <button
            onClick={() => setShowServices(!showServices)}
            className="w-full pt-2 flex items-start hover:text-blue-600 transition-colors focus:outline-none"
          >
            <span className="flex items-center gap-2">
              Услуги
              <svg
                className={`w-4 h-4 transform transition-transform duration-300 ${
                  showServices ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </span>
          </button>

          {/* Alt Menü */}
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out flex flex-col space-y-3 pl-4 mt-2 text-base ${
              showServices ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <Link
              to="/payment"
              onClick={() => {
                setIsMenuOpen(false);
                setShowServices(false);
              }}
            >
              Оплата инвойсов
            </Link>
            <Link
              to="/accounting"
              onClick={() => {
                setIsMenuOpen(false);
                setShowServices(false);
              }}
            >
              Аутсорсинг Бухгалтерии
            </Link>
            <Link
              to="/legal"
              onClick={() => {
                setIsMenuOpen(false);
                setShowServices(false);
              }}
            >
              Юридический департамент
            </Link>
            <Link
              to="/consulting"
              onClick={() => {
                setIsMenuOpen(false);
                setShowServices(false);
              }}
            >
              Налоговый консалтинг
            </Link>
          </div>
        </div>

        <a href="#partners" onClick={() => setIsMenuOpen(false)} className="w-full ">
          Партнеры
        </a>
        <a href="#contact" onClick={() => setIsMenuOpen(false)} className="w-full pt-2">
          Контакты
        </a>
      </div>
    </header>
  );
}
