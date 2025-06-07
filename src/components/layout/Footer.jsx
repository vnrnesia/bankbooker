import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { PiXLogoBold } from "react-icons/pi";
import Logo from "@/assets/logo.png";
import icon1 from "@/assets/LeftPanel/icon1.png";
import icon2 from "@/assets/LeftPanel/icon2.png";
import icon3 from "@/assets/LeftPanel/icon3.png";
import icon4 from "@/assets/LeftPanel/icon4.png";

const Footer = () => {
  return (
    <>
      {/* Üst Alan */}
      <footer className="w-full h-[550px] bg-gray-100 text-gray-800 font-manrope">
        <div className="w-full">
          <div className="max-w-7xl mx-auto px-6 pb-12 flex flex-col md:flex-row justify-between">
            {/* Sol Alan */}
            <div className="max-w-xl py-16">
              <div className="flex items-center gap-2 mb-4 py">
                <img
                  src={Logo}
                  alt="Bankbooker Logo"
                  className="object-contain"
                />
              </div>
              <h2 className="text-5xl font-medium leading-tight mb-3">
                Ready to Take Control Of <br /> Your Finances?
              </h2>
              <p className="text-gray-400 font-sans font-light mb-5">
                We look forward to learning about your financial goals.
              </p>
              <div className="pt-16">
                <button className="bg-[#047EDF] hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-full transition">
                  Free Consultation
                </button>
              </div>
            </div>

            {/* Sağ Alan */}
            <div className="hidden md:grid grid-cols-2 gap-16 text-sm pt-36 text-gray-600">
              <div className="space-y-4">
                <h4 className="text-base font-semibold text-gray-800 tracking-wide mb-4">
                  CONTACT US
                </h4>
                <div>
                  <p className="text-lg font-medium text-gray-700">Our Phone</p>
                  <p className="text-lg text-gray-600">+7 (917) 889 94–54</p>
                </div>
                <div>
                  <p className="text-lg font-medium text-gray-700">Our Email</p>
                  <p className="text-lg text-gray-600">info@bankbooker.com</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="pt-0 md:pt-10">
                  <p className="text-lg font-medium text-gray-700">Mon– Fri:</p>
                  <p className="text-lg text-gray-600">8:30am – 5:30pm</p>
                </div>
                <div>
                  <p className="text-lg font-medium text-gray-700">Moscow:</p>
                  <p className="text-lg text-gray-600">
                    1140 Kremlin St, RU 13131
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Menü Alanı */}
      <div className="w-full border-t border-gray-300 bg-white mb-20">
        <div className="max-w-8xl mx-auto px-4 md:px-6 py-6">
          <div className="flex flex-wrap justify-center gap-8 md:gap-24 lg:gap-[142px] text-gray-600 text-sm font-semibold text-center">
            <a href="#">Services</a>
            <a href="#">Who We Are</a>
            <a href="#">Insights</a>
            <a href="#">Careers</a>
            <a href="#">Team</a>
            <a href="#">Contact Us</a>
            <a href="#">FAQ</a>
          </div>
        </div>

        {/* Ayırıcı çizgi */}
        <div className="hidden md:block w-full max-w-[1270px] mx-auto border-t border-gray-300" />

        {/* Alt bilgi alanı */}
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          {/* Sol: Telif ve Politikalar */}
          <div className="text-gray-600 flex flex-wrap items-center justify-center gap-4 mb-4 md:mb-0">
            <span>2025 Bankbooker. All right reserved.</span>
            <a href="#">Terms & Conditions</a>
            <a href="#">Privacy Policy</a>
          </div>

          {/* Sağ: Sosyal Medya */}
          <div className="flex gap-6">
            <img src={icon1} alt="X" className="w-6 h-6" />
            <img src={icon2} alt="LinkedIn" className="w-6 h-6" />
            <img src={icon3} alt="Facebook" className="w-6 h-6" />
            <img src={icon4} alt="Instagram" className="w-6 h-6" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
