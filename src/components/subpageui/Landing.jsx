import { FaTelegramPlane } from "react-icons/fa";
import logo from "@/assets/logo.png";
import icon1 from "@/assets/LeftPanel/icon1.png";
import icon2 from "@/assets/LeftPanel/icon2.png";
import icon3 from "@/assets/LeftPanel/icon3.png";
import icon4 from "@/assets/LeftPanel/icon4.png";
import telegram from "@/assets/telegram.png";

import navbarIcon1 from "@/assets/Services/icon1.png";
import navbarIcon2 from "@/assets/Services/icon2.png";
import navbarIcon3 from "@/assets/Services/icon3.png";
import navbarIcon4 from "@/assets/Services/icon4.png";
import navbarIcon5 from "@/assets/Services/icon5.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faStarHalfAlt,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";
import Logo from "@/assets/logo.png";
import { useState, useEffect } from "react";

const pageContent = {
  "/": {
    title: "Налоговый Консалтинг",
    description:
      "Консультация при выборе банка партнера позволит Вам грамотно подобрать кредитную организацию и выстроить долгосрочное взаимовыгодное сотрудничество.",
  },
  "/products": {
    title: "Банковске Продукт",
    description:
      "Консультация при выборе банка партнера позволит Вам грамотно подобрать кредитную организацию и выстроить долгосрочное взаимовыгодное сотрудничество.",
  },
  "/consulting": {
    title: "Налоговый Консалтинг",
    description:
      "Консультация при выборе банка партнера позволит Вам грамотно подобрать кредитную организацию и выстроить долгосрочное взаимовыгодное сотрудничество.",
  },
  "/accounting": {
    title: "Аутсорсинг Бугхалтерия ",
    description:
      "Бухгалтерское обслуживание, которое включает в себя бухучет, сбор и систематизирование данных об обязательствах, имуществе предприятия дает возможность получить максимально полное представление об эффективности его работы.",
  },
  "/payment": {
    title: "Оплата Инвойсов",
    description:
      "Бухгалтерское обслуживание, которое включает в себя бухучет, сбор и систематизирование данных об обязательствах, имуществе предприятия дает возможность получить максимально полное представление об эффективности его работы.",
  },
  "/legal": {
    title: "Юридический Отдел",
    description:
      "Бухгалтерское обслуживание, которое включает в себя бухучет, сбор и систематизирование данных об обязательствах, имуществе предприятия дает возможность получить максимально полное представление об эффективности его работы.",
  },
};

const services = [
  { name: "Оплата инвойсов", path: "/payment", icon: navbarIcon1 },
  { name: "Аутсорсинг Бухгалтерии", path: "/accounting", icon: navbarIcon2 },
  { name: "Юридический департамент", path: "/legal", icon: navbarIcon3 },
  { name: "Налоговый консалтинг", path: "/consulting", icon: navbarIcon4 },
];

function Landing() {
  const location = useLocation();
  const [pageData, setPageData] = useState(
    pageContent[location.pathname] || pageContent["/"]
  );
  const [showServices, setShowServices] = useState(false);

  useEffect(() => {
    setPageData(pageContent[location.pathname] || pageContent["/"]);
  }, [location.pathname]);

  const { title, description } = pageData;

  return (
    <section>
      <nav className="pt-12 md:pt-20 px-5">
        <div className="flex justify-between items-center">
          <Link to="/" className="md:flex items-center gap-2 mb-4 hidden">
            <img
              src={Logo}
              alt="Bankbooker Logo"
              className="h-12 w-auto object-contain"
            />
          </Link>

          <div className="hidden font-[Manrope] md:flex items-center gap-4 lg:gap-6 text-sm text-[#333]">
            <a href="#" className="hover:text-blue-600 transition-colors">
              О сервисе
            </a>
            <div className="relative flex items-center">
              <button
                onClick={() => setShowServices(!showServices)}
                className="hover:text-blue-600 transition-colors focus:outline-none flex items-center gap-1"
              >
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
              </button>

              {showServices && (
                <div className="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 w-36 bg-white border border-gray-200 rounded-2xl shadow-md z-50 overflow-hidden transition-all duration-300">
                  {services.map((item, idx) => (
                    <Link
                      key={idx}
                      to={item.path}
                      className="group flex items-center gap-2 px-4 py-2 text-xs bg-white hover:from-sky-500 hover:to-blue-600 hover:text-white transition duration-300 cursor-pointer bg-gradient-to-r"
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
            <Link
              to="/contact"
              className="hover:text-blue-600 transition-colors"
            >
              Контакты
            </Link>

            <button className="border border-gray-300 rounded-full px-4 py-1 text-sm font-medium hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-colors">
              Let's Talk
            </button>
          </div>
        </div>
      </nav>

      <div className="flex flex-col md:flex-row justify-between items-center px-4  pt-16 md:py-16 max-w-7xl mx-auto">
        <div className="mt-6 md:mt-10">
          <div className="text-sm font-medium text-gray-700">
            Welcome To Bankbooker
          </div>
          <h1 className="font-[Manrope] text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight mt-2 font-medium">
            {title}
          </h1>
          <p className="text-sm font-[Manrope] text-gray-600 mt-4 max-w-[500px]">
            {description}
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <button className="bg-gradient-to-b from-[#0FA9E9] to-[#0786E2] text-white font-medium px-6 py-2 rounded hover:from-[#0786E2] hover:to-[#0FA9E9] transition-all duration-300">
              Get Started
            </button>
            <div className="items-center justify-center flex">
              <div className="flex items-center gap-2 mt-3 text-black">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-[#00A3FF] border-4 bg-white text-[#112e3f] flex items-center justify-center">
                  <FontAwesomeIcon icon={faPlay} className="text-md" />
                </div>
                <span className="text-sm text-black">
                  How does it work?
                  <br />
                  <span className="text-[13px] text-black/80">Play video</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden mt-10 px-4 lg:flex min-w-[550px] w-[40px] bg-gradient-to-b from-[#BEC0C4] to-[#DFE2E7] p-4 2xl:flex flex-col justify-between rounded-xl overflow-hidden lg:-ml-24">
          <div className="md:flex flex-col h-full">
            <div className="mt-[50px] text-center">
              <div className="hidden md:block mt-[12px] text-center">
                <div className="text-gray-400 text-sm">Community</div>
                <div className="text-2xl lg:text-3xl font-medium text-gray-800 mt-1">
                  Join To Telegram Channel
                </div>
                <div className="flex justify-center items-center gap-2 mt-2">
                  <img src={telegram} alt="Telegram Icon" className="w-5" />
                  <span className="text-black text-sm font-sans">
                    t.me/bankbooker
                  </span>
                </div>
              </div>

              <div>
                <div className="block md:hidden text-2xl lg:text-3xl font-medium text-gray-800 mt-1">
                  Our Services
                </div>
              </div>
            </div>

            <div className="mt-12 flex flex-wrap justify-center gap-2 font-[Manrope]">
              {services.map((s, i) => (
                <Link
                  key={i}
                  to={s.path}
                  className="font-[Manrope] bg-gradient-to-b from-[#0FA9E9] to-[#0786E2] text-white px-4 py-1.5 rounded text-sm whitespace-nowrap hover:opacity-90 transition"
                >
                  {s.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-4">
            <img src={icon1} alt="X" className="w-5 h-5" />
            <img src={icon2} alt="LinkedIn" className="w-5 h-5" />
            <img src={icon3} alt="Facebook" className="w-5 h-5" />
            <img src={icon4} alt="Instagram" className="w-5 h-5" />
          </div>
        </div>
      </div>

      <div className="block md:hidden">
        <div className="w-auto bg-white shadow-xl md:bg-gradient-to-b from-[#BEC0C4] to-[#DFE2E7] p-4 rounded-xl">
          <div className="flex flex-col">
            <div className="hidden md:block mt-[12px] text-center">
              <div className="text-gray-400 text-sm">Community</div>
              <div className="text-2xl lg:text-3xl font-medium text-gray-800 mt-1">
                Join To Telegram Channel
              </div>
              <div className="flex justify-center items-center gap-2 mt-2">
                <img src={telegram} alt="Telegram Icon" className="w-5" />
                <span className="text-black text-sm font-sans">
                  t.me/bankbooker
                </span>
              </div>
            </div>

            <div className="block md:hidden pt-6 text-2xl lg:text-3xl font-medium text-gray-800 mt-1">
              Our Services
            </div>

            <div className="w-full mt-4 grid grid-cols-2 gap-2 justify-start font-[Manrope] items-start">
              {services.map((item, idx) => (
                <Link
                  key={idx}
                  to={item.path}
                  className="inline-block bg-gradient-to-b from-[#0FA9E9] to-[#0786E2] text-white px-2 py-1.5 rounded text-xs whitespace-nowrap hover:opacity-90 transition"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Landing;
