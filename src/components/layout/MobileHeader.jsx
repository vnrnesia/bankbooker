import React, { useState } from "react";
import logo from "@/assets/logo.png";

export default function MobileHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="md:hidden fixed top-0 left-0 w-full z-50">
      {/* Üst Bar */}
      <div className="bg-white px-4 py-6 shadow flex items-center justify-between relative z-50">
        <img src={logo} alt="Logo" className="h-auto w-[200px]" />

        {/* Hamburger / X */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
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
        className={`fixed inset-0 bg-white flex flex-col items-center pt-36 pl-4 space-y-12 text-gray-600 font-[Manrope] text-xl font-light transition-transform duration-300 z-40 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <a href="#about" onClick={() => setIsMenuOpen(false)}>
          О сервисе
        </a>
        <a href="#services" onClick={() => setIsMenuOpen(false)}>
          Услуги
        </a>
        <a href="#partners" onClick={() => setIsMenuOpen(false)}>
          Партнеры
        </a>
        <a href="#contact" onClick={() => setIsMenuOpen(false)}>
          Контакты
        </a>
      </div>
    </header>
  );
}
