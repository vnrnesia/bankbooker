import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Banner from "./Banner";
import ProductsDropdown from "./ProductsDropdown";
import MobileDropdownProductsFull from "./MobileProductsDropdown";
import Currency from "../../ui/Currency";

const Navbar = ({ onLearnMoreClick }) => {
  const [bannerOpen, setBannerOpen] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [desktopProductsOpen, setDesktopProductsOpen] = useState(false);

  const desktopProductsRef = useRef(null);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((v) => !v);
    if (mobileProductsOpen) setMobileProductsOpen(false);
  };

  const toggleMobileProducts = () => {
    setMobileProductsOpen((v) => !v);
  };

  useEffect(() => {
    const handlePointerOver = (e) => {
      if (desktopProductsRef.current?.contains(e.target)) {
        setDesktopProductsOpen(true);
      } else {
        setDesktopProductsOpen(false);
      }
    };

    document.addEventListener("pointermove", handlePointerOver);
    return () => {
      document.removeEventListener("pointermove", handlePointerOver);
    };
  }, []);

  useEffect(() => {
    if (mobileMenuOpen || desktopProductsOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }
    if (!mobileMenuOpen) setMobileProductsOpen(false);
  }, [mobileMenuOpen, desktopProductsOpen]);

  const closeAllMenus = () => {
    setDesktopProductsOpen(false);
    setMobileMenuOpen(false);
    setMobileProductsOpen(false);
  };

  const isBackdropVisible =
    mobileMenuOpen || mobileProductsOpen || desktopProductsOpen;

  const currencyPaddingClass = bannerOpen
    ? "pt-[140px] md:pt-[122px]"
    : "pt-[95px] md:pt-[78px]";

  const scrollToDemo = () => {
    window.scrollTo({ top: 4450, behavior: "smooth" });
  };

  return (
    <>
      {bannerOpen && (
        <Banner
          onClose={() => setBannerOpen(false)}
          onLearnMoreClick={onLearnMoreClick}
        />
      )}

      <div
        className="fixed top-0 left-0 w-full h-full z-40 transition-none"
        style={{
          opacity: isBackdropVisible ? 1 : 0,
          pointerEvents: isBackdropVisible ? "auto" : "none",
          transition: "none",
        }}
        onClick={closeAllMenus}
        aria-hidden={!isBackdropVisible}
      />

      <nav
        className={`fixed w-full bg-white/70 backdrop-blur-sm shadow-sm z-50 transition-all duration-300 ease-in-out ${
          bannerOpen ? "top-11" : "top-0"
        }`}
      >
        <div className="mx-auto max-w-sm md:px-0 md:max-w-[90%] xl:max-w-[90%] 2xl:max-w-7xl flex items-center justify-between py-4 px-4">
          <div className="flex items-center">
            <Link to="/">
              <img
                src="/bankbooker.png"
                alt="BankBooker Logo"
                width={190}
                height={50}
              />
            </Link>
          </div>

          <div className="hidden md:flex space-x-8 items-center">
            <div ref={desktopProductsRef}>
              <ProductsDropdown bannerOpen={bannerOpen} />
            </div>
            <Link to="/solutions" className="text-black font-medium">
              ⁠О Компания
            </Link>
            <Link to="/partner" className="text-black font-medium">
              ⁠Партнеры
            </Link>
            <Link to="/contact" className="text-black font-medium">
              ⁠Контакт
            </Link>
          </div>

          <div className="hidden md:flex space-x-4 items-center">
            <button
              onClick={scrollToDemo}
              className="bg-gradient-to-l from-[#0273DE] to-[#10B0EB] text-white px-4 py-2 rounded font-medium"
            >
              Оставить заявку
            </button>
          </div>

          <button
            aria-label="Toggle menu"
            className="bg-gray-100 rounded-lg md:hidden flex flex-col justify-center items-center w-14 h-14 mt-2 space-y-1 overflow-hidden focus:outline-none z-50"
            onClick={toggleMobileMenu}
          >
            <span
              className={`block h-0.5 w-7 bg-black rounded transform transition duration-300 ease-in-out origin-center ${
                mobileMenuOpen ? "rotate-45 translate-y-[6px]" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-7 bg-black rounded transition duration-300 ease-in-out ${
                mobileMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-0.5 w-7 bg-black rounded transform transition duration-300 ease-in-out origin-center ${
                mobileMenuOpen ? "-rotate-45 -translate-y-[6px]" : ""
              }`}
            />
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="fixed left-0 top-[80px] w-full bg-white shadow-md z-40 md:hidden max-h-[calc(100vh-80px)] overflow-y-auto">
            <div className="pt-4 pb-6 space-y-6">
              <nav className="flex flex-col space-y-4 font-medium text-lg px-6">
                <button
                  onClick={toggleMobileProducts}
                  className="flex items-center w-full text-left"
                  aria-expanded={mobileProductsOpen}
                  aria-controls="mobile-products-menu"
                >
                  Наши Услуги
                  <svg
                    className={`w-5 h-5 ml-2 transition-transform duration-300 ${
                      mobileProductsOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {mobileProductsOpen && (
                  <div
                    id="mobile-products-menu"
                    className="pl-4 border-l border-gray-300"
                  >
                    <MobileDropdownProductsFull
                      onClose={() => setMobileMenuOpen(false)}
                    />
                  </div>
                )}

                <Link
                  to="/solutions"
                  className="block text-black hover:text-blue-600"
                  onClick={closeAllMenus}
                >
                  ⁠О Компания
                </Link>
                <Link
                  to="/partner"
                  className="block text-black hover:text-blue-600"
                  onClick={closeAllMenus}
                >
                  Партнеры
                </Link>
                <Link
                  to="/contact"
                  className="block text-black hover:text-blue-600"
                  onClick={closeAllMenus}
                >
                  Контакт
                </Link>

                <div className="pt-6 space-y-4 border-t border-gray-200">
                  <button
                    onClick={() => {
                      scrollToDemo();
                      closeAllMenus();
                    }}
                    className="block text-center bg-gradient-to-l from-[#0273DE] to-[#10B0EB] text-white px-6 py-3 rounded font-medium w-full"
                  >
                    See a demo
                  </button>
                </div>
              </nav>
            </div>
          </div>
        )}
      </nav>

      <div className={currencyPaddingClass}>
        <Currency />
      </div>
    </>
  );
};

export default Navbar;
