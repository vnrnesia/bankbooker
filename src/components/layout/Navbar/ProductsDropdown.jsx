"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProductsItem from "./ProductsItem";
import { MoveRight, ChevronDown } from "lucide-react";
import Currency from "../../ui/Currency";

const dropdownVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
};

const ProductsDropdown = ({ bannerOpen }) => {
  const [isOpen, setIsOpen] = useState(false);
  const closeTimeout = useRef(null);
  const dropdownRef = useRef(null);
  const triggerRef = useRef(null);

  const handleMouseEnter = () => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
      closeTimeout.current = null;
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeout.current = setTimeout(() => {
      setIsOpen(false);
    }, 0);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      const target = event.target;
      if (
        isOpen &&
        dropdownRef.current &&
        triggerRef.current &&
        !dropdownRef.current.contains(target) &&
        !triggerRef.current.contains(target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const SectionHeader = ({ title }) => (
    <div className="flex items-center justify-between my-4">
      <span className="text-lg font-medium">{title}</span>
      <a
        href="#"
        className="font-medium flex items-center gap-2 text-sm text-blue-600 group"
      >
        View All
        <MoveRight
          width={15}
          className="transition-transform duration-200 ease-in-out group-hover:translate-x-1"
        />
      </a>
    </div>
  );

  const Divider = () => <div className="border-b border-gray-200 mb-4" />;

  return (
    <div
      className="relative inline-block"
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
    >
      <button
        ref={triggerRef}
        className="flex items-center font-medium text-black cursor-pointer select-none transition-colors duration-300 group"
        type="button"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        Products
        <ChevronDown
          size={20}
          className={`ml-1 transition-transform duration-300 ease-in-out ${
            isOpen ? "rotate-180 text-blue-700" : ""
          }`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <div className="fixed inset-0 z-30" aria-hidden="true" />

            <motion.div
              ref={dropdownRef}
              className={`fixed left-0 w-screen ${
                bannerOpen ? "top-[77px]" : "top-[75px]"
              } bg-white shadow-lg rounded pt-6 z-40`}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              variants={dropdownVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.25, ease: "easeInOut" }}
            >
              <div className="mx-auto w-full max-w-[90%] xl:max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Products Column */}
                <div>
                  <SectionHeader title="Products" />
                  <Divider />
                  {[
                    {
                      href: "/products/invoice",
                      imageSrc: "/productsdropdown/invoice.png",
                      title: "Оплата инвойсов",
                      description: "Pay vendors faster and safer",
                      imageWidth: 30,
                      imageHeight: 30,
                      imageClassName: "object-contain mr-1",
                    },
                    {
                      href: "/products/banking",
                      imageSrc: "/productsdropdown/banking.png",
                      title: "Возврат валютной выручки",
                      description: "Bank smarter with up to 4.36%",
                      imageWidth: 30,
                      imageHeight: 36,
                      imageClassName: "object-contain",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="transition-all duration-300 hover:scale-[1.03] hover:-translate-y-[2px] ease-in-out"
                    >
                      <ProductsItem {...item} />
                    </div>
                  ))}
                </div>

                {/* Connect with Bankbooker Column */}
                <div>
                  <SectionHeader title="Connect Bankbooker" />
                  <Divider />
                  {[
                    {
                      href: "/contact/agent",
                      imageSrc: "/productsdropdown/talk.png",
                      title: "Talk with agent",
                      description: "Get free consultancy",
                      imageWidth: 30,
                      imageHeight: 30,
                      imageClassName: "object-contain",
                    },
                    {
                      href: "/contact/chat",
                      imageSrc: "/productsdropdown/chat.png",
                      title: "Chat with us",
                      description: "Connect with support team",
                      imageWidth: 30,
                      imageHeight: 30,
                    },
                    {
                      href: "/contact/telegram",
                      imageSrc: "/productsdropdown/telegram.png",
                      title: "Telegram Community",
                      description: "Benefit from privileges",
                      imageWidth: 30,
                      imageHeight: 30,
                      imageClassName: "mr-1",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="transition-all duration-300 hover:scale-[1.03] hover:-translate-y-[2px] ease-in-out"
                    >
                      <ProductsItem {...item} />
                    </div>
                  ))}
                </div>

                {/* Resource Center Column */}
                <div>
                  <SectionHeader title="Resource Center" />
                  <Divider />
                  {[
                    {
                      href: "/resources/blog",
                      imageSrc: "/productsdropdown/blog.png",
                      title: "Blog",
                      description: "Get news and insights",
                      imageWidth: 30,
                      imageHeight: 30,
                    },
                    {
                      href: "/resources/reports",
                      imageSrc: "/productsdropdown/report.png",
                      title: "Exclusive reports",
                      description: "Unlock research and guides",
                      imageWidth: 30,
                      imageHeight: 30,
                    },
                    {
                      href: "/resources/customers",
                      imageSrc: "/productsdropdown/customer.png",
                      title: "Customer stories",
                      description: "Learn from the best",
                      imageWidth: 30,
                      imageHeight: 30,
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="transition-all duration-300 hover:scale-[1.03] hover:-translate-y-[2px] ease-in-out"
                    >
                      <ProductsItem {...item} />
                    </div>
                  ))}
                </div>

                {/* Best Offer Column */}
                <div className="bg-gray-100 rounded-lg py-4 px-2 flex justify-center items-center">
                  <div className="text-lg font-medium text-center">
                    Best Offer
                  </div>
                </div>
              </div>
              <div className="pt-4">
                <Currency />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProductsDropdown;
