import React, { useRef } from "react";
import { Link } from "react-router-dom";

const offers = [
  {
    country: "Китай",
    flag: "/flags/china.png",
    course: "Инвестинг",
    duration: "3–5 Дней",
    commission: "2,5%",
    offsetClass: "left-[5px] top-[1px]",
  },
  {
    country: "ОАЭ",
    flag: "/flags/uae.png",
    course: "Инвестинг",
    duration: "3–5 Дней",
    commission: "2,5%",
    offsetClass: "left-[0px] top-[0px]",
  },
  {
    country: "Турция",
    flag: "/flags/turkey.png",
    course: "Инвестинг",
    duration: "3–5 Дней",
    commission: "2,5%",
    offsetClass: "left-[-1px] top-[1px]",
  },
];

const products = [
  {
    href: "/services?details=true",
    title: "Оплата инвойсов",
    description: "Pay vendors faster and safer",
    imageSrc: "/productsdropdown/invoice.png",
    imageWidth: 30,
    imageHeight: 30,
    imageClassName: "object-contain mr-2",
  },
  {
    href: "/services?details=true",
    title: "Возврат валютной выручки",
    description: "Bank smarter with up to 4.36%",
    imageSrc: "/productsdropdown/banking.png",
    imageWidth: 30,
    imageHeight: 36,
    imageClassName: "object-contain mr-2",
  },
];

const connectWithBankbooker = [
  {
    href: "/contact/agent",
    title: "- Связаться с агентом",
    description: "Получите бесплатную консультацию",
    imageSrc: "/productsdropdown/talk.png",
    imageWidth: 30,
    imageHeight: 30,
    imageClassName: "object-contain mr-2",
  },
  {
    href: "/contact/chat",
    title: "Чат с поддержкой",
    description: "Свяжитесь с командой поддержки",
    imageSrc: "/productsdropdown/chat.png",
    imageWidth: 30,
    imageHeight: 30,
    imageClassName: "object-contain mr-2",
  },
  {
    href: "/contact/telegram",
    title: "⁠Сообщество в Telegram",
    description: "Воспользуйтесь привилегиями",
    imageSrc: "/productsdropdown/telegram.png",
    imageWidth: 30,
    imageHeight: 30,
    imageClassName: "object-contain mr-2",
  },
];

const resourceCenter = [
  {
    href: "/resources/blog",
    title: "Blog",
    description: "Get news and insights",
    imageSrc: "/productsdropdown/blog.png",
    imageWidth: 30,
    imageHeight: 30,
    imageClassName: "object-contain mr-2",
  },
  {
    href: "/resources/reports",
    title: "Exclusive reports",
    description: "Unlock research and guides",
    imageSrc: "/productsdropdown/report.png",
    imageWidth: 30,
    imageHeight: 30,
    imageClassName: "object-contain mr-2",
  },
  {
    href: "/resources/customers",
    title: "Customer stories",
    description: "Learn from the best",
    imageSrc: "/productsdropdown/customer.png",
    imageWidth: 30,
    imageHeight: 30,
    imageClassName: "object-contain mr-2",
  },
];

const MobileDropdownProductsFull = ({ onClose }) => {
  const cardsRef = useRef([]);

  const Section = ({ title, items }) => (
    <section className="mb-6">
      {title && <h3 className="text-lg font-semibold mb-2">{title}</h3>}
      <div className="flex flex-col space-y-4">
        {items.map((item) => (
          <Link
            key={item.href}
            to={item.href}
            className="flex items-center text-black hover:text-blue-600"
            onClick={onClose}
          >
            <img
              src={item.imageSrc}
              alt={item.title}
              width={item.imageWidth}
              height={item.imageHeight}
              className={item.imageClassName}
            />
            <div>
              <div className="font-light">{item.title}</div>
              <div className="text-xs text-gray-600">{item.description}</div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );

  return (
    <div
      className="px-4 pb-6 overflow-y-auto max-h-[100vh]"
      style={{ WebkitOverflowScrolling: "touch" }}
    >
      <Section title="" items={products} />
      <Section title="Connect with Bankbooker" items={connectWithBankbooker} />
      <Section title="Resource Center" items={resourceCenter} />

      <section className="bg-gray-100 rounded p-4">
        <div className="bg-gray-100 rounded-lg py-4 px-2 text-center">
          <h3 className="text-center">Лучшие Предложения</h3>
          <div className="text-lg font-medium text-center pt-5">
            <div className="flex flex-col gap-5">
              {offers.map((offer, idx) => (
                <div
                  key={idx}
                  ref={(el) => (cardsRef.current[idx] = el)}
                  className="bg-white border border-gray-200 rounded-lg shadow-sm px-11 py-3 flex flex-col justify-between"
                >
                  <div className="flex items-center space-x-3">
                    <div className="relative w-5 h-5 shrink-0">
                      <img
                        src={offer.flag}
                        alt={offer.country}
                        className={`absolute w-full h-full object-cover rounded-full ${offer.offsetClass}`}
                      />
                    </div>
                    <h3 className="text-base font-medium text-gray-800">
                      {offer.country}
                    </h3>
                    <div>
                      <p className="text-gray-400 text-xs text-en">Курс</p>
                      <p className="text-xs">{offer.course}</p>
                    </div>
                  </div>

                  <div className="pt-2 w-full">
                    <div className="flex w-full bg-gray-100 rounded-md overflow-hidden shadow-sm cursor-pointer">
                      <div className="flex-grow py-1 px-1 text-sm bg-gray-100">
                        Оставьте заявку
                      </div>
                      <div className="flex items-center justify-center px-4 bg-gradient-to-l from-[#0273DE] to-[#10B0EB] hover:scale-125 transition-transform duration-300">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-5 h-5 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MobileDropdownProductsFull;
