import { FaTelegramPlane } from "react-icons/fa";
import logo from "@/assets/logo.png";
import icon1 from "@/assets/LeftPanel/icon1.png";
import icon2 from "@/assets/LeftPanel/icon2.png";
import icon3 from "@/assets/LeftPanel/icon3.png";
import icon4 from "@/assets/LeftPanel/icon4.png";
import telegram from "@/assets/telegram.png";
import avatar1 from "@/assets/Avatar/avatar1.png";
import avatar2 from "@/assets/Avatar/avatar2.png";
import avatar3 from "@/assets/Avatar/avatar3.png";
import avatar4 from "@/assets/Avatar/avatar4.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faStarHalfAlt,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";

function Landing() {
  return (
   <section>
   <nav className="pt-24 px-5">
  <div className="flex justify-between items-center">
    <img src={logo} alt="Logo" className="h-10" />

    <div className="hidden font-[Manrope] md:flex items-center gap-4 lg:gap-6 text-sm text-[#333]">
      <a href="#" className="hover:text-blue-600 transition-colors">
        О сервисе
      </a>
      <a href="#" className="hover:text-blue-600 transition-colors">
        Услуги
      </a>
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

     <div className="flex flex-col md:flex-row justify-between items-center px-6  py-16 max-w-7xl mx-auto">
      {/* LEFT: Text + CTA */}

      <div className="mt-6 md:mt-10">
        
        <div className="text-sm font-medium text-gray-700">
          Welcome To Bankbooker
        </div>
        <h1 className=" font-[Manrope] text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight mt-2 font-medium">
          Налоговый Консалтинг
        </h1>
        <p className="text-sm font-[Manrope] text-gray-600 mt-4 max-w-[500px]">
          Консультация при выборе банка партнера позволит Вам грамотно подобрать
          кредитную организацию и выстроить долгосрочное взаимовыгодное
          сотрудничество.
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

      {/* RIGHT: Telegram Box */}

      <div className="hidden lg:flex min-w-[550px] w-[40px]  bg-gradient-to-b from-[#BEC0C4] to-[#DFE2E7] p-4 2xl:flex flex-col justify-between rounded-xl overflow-hidden lg:-ml-24">
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex justify-center items-center w-full"></div>

          {/* Telegram Info */}
          <div className="mt-[50px] text-center">
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

          {/* Tags */}
          <div className="mt-12 flex flex-wrap justify-center gap-2 font-[Manrope]">
            {[
              "Оплата инвойсов",
              "Аутсорсинг Бухгалтерии",
              "Юридический департамент",
              "Налоговый консалтинг",
            ].map((item, idx) => (
              <span
                key={idx}
                className="font-[Manrope] bg-gradient-to-b from-[#0FA9E9] to-[#0786E2] text-white px-4 py-1.5 rounded text-sm whitespace-nowrap"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-4 mt-4">
          <img src={icon1} alt="X" className="w-5 h-5" />
          <img src={icon2} alt="LinkedIn" className="w-5 h-5" />
          <img src={icon3} alt="Facebook" className="w-5 h-5" />
          <img src={icon4} alt="Instagram" className="w-5 h-5" />
        </div>
      </div>
    </div>
   </section>
  );
}

export default Landing;
