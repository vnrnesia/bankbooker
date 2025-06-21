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
import Navbar from "@/components/subpageui/Navbar.jsx";


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
      <Navbar/>

      <div className="flex flex-col md:flex-row pt-24 justify-between px-4  max-w-7xl mx-auto">
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
