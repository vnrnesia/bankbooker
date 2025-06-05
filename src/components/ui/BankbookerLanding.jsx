import logo from "@/assets/logo.png";
import icon1 from "@/assets/LeftPanel/icon1.png";
import icon2 from "@/assets/LeftPanel/icon2.png";
import icon3 from "@/assets/LeftPanel/icon3.png";
import icon4 from "@/assets/LeftPanel/icon4.png";
import telegram from "@/assets/telegram.png";

const BankbookerLanding = () => {
  return (
    <div className="min-h-screen flex bg-white">
      {/* Left Panel */}
      <div className="w-[550px] h-[645px] bg-gradient-to-b from-[#BEC0C4] to-[#DFE2E7] p-8 flex flex-col justify-between rounded-xl">
        <div>
          <div className="flex justify-center items-start">
            <img src={logo} alt="Bankbooker Logo" />
          </div>

          <div className="mt-20 justify-center items-center text-center">
            <div className="text-gray-400 text-sm">Community</div>
            <div className="text-lg font-medium text-gray-800 mt-1">
              Join To Telegram Channel
            </div>
            <div className="flex items-center gap-2 mt-2 text-[#1DA1F2]">
              <div className="w-5 items-center text-center justify-center">
                <img src={telegram} alt="" />
              </div>
              <span className="text-black text-sm">t.me/bankbooker</span>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap gap-2">
            {[
              "Оплата инвойсов",
              "Аутсорсинг Бухгалтерии",
              "Юридический департамент",
              "Налоговый консалтинг",
            ].map((item, idx) => (
              <span
                key={idx}
                className="bg-[#3c3c3c] text-white px-3 py-1 rounded text-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="w-[20px] flex justify-center items-center gap-3 mt-8">
          <img src={icon1} alt="icon1" />
          <img src={icon2} alt="icon2" />
          <img src={icon3} alt="icon3" />
          <img src={icon4} alt="icon4" />
        </div>
      </div>

      {/* Right Panel */}
      <div className="flex-1 p-10">
        {/* Nav */}
        <div className="flex justify-end items-center gap-8 text-sm text-[#333]">
          <a href="#">О сервисе</a>
          <a href="#">Услуги</a>
          <a href="#">Партнеры</a>
          <a href="#">Контакты</a>
          <button className="border border-gray-300 rounded-full px-4 py-1 text-sm font-medium">
            Let's Talk
          </button>
        </div>

        {/* Hero Text */}
        <div className="mt-10">
          <div className="text-sm font-medium text-gray-700">Welcome To Bankbooker</div>
          <h1 className="text-4xl text- leading-tight mt-2 font-medium">
            International Payment Solutions
            <br />
            and Complex Services for Businesses
          </h1>
          <p className="text-sm text-gray-600 mt-4 max-w-[500px]">
            At Bankbooker, we embrace innovation as the driving force behind
            every solution. Our commitment to staying ahead of industry trends
            ensures that your business.
          </p>

          <div className="mt-6 flex gap-4">
            <button className="bg-gradient-to-b from-[#0FA9E9] to-[#0786E2] text-white font-medium px-6 py-2 rounded">
              Get Started
            </button>
            <button className="border border-gray-300 px-6 py-2 rounded font-medium text-gray-700">
              Our Services
            </button>
          </div>
        </div>

        {/* Info Boxes */}
        <div className="flex gap-4 mt-10 flex-wrap">
          {/* Box 1 */}
          <div className="bg-[#0073e6] rounded-xl p-6 w-[240px] text-white flex flex-col justify-between">
            <div>
              <div className="text-2xl font-semibold">120+</div>
              <div className="mt-2 text-sm leading-snug">
                Grow Smarter, Faster With Bankbooker Financial Solutions
              </div>
            </div>
            <div className="mt-6 flex items-center gap-2">
              <div className="flex -space-x-2">
                <img
                 
                  className="w-8 h-8 rounded-full border-2 border-white"
                  alt=""
                />
                <img
                
                  className="w-8 h-8 rounded-full border-2 border-white"
                  alt=""
                />
                <img
                  
                  className="w-8 h-8 rounded-full border-2 border-white"
                  alt=""
                />
              </div>
              <div className="flex items-center text-sm gap-1 ml-2">
                {[...Array(4)].map((_, i) => (
                  <i key={i} className="fas fa-star text-yellow-400"></i>
                ))}
                <i className="fas fa-star-half-alt text-yellow-400"></i>
                <span className="ml-2">4.9/5 Rating</span>
              </div>
            </div>
          </div>

          {/* Box 2 */}
          <div className="bg-gradient-to-b from-[#0FA9E9] to-[#0786E2] rounded-xl p-6 w-[240px] text-white flex flex-col justify-between">
            <div>
              <div className="text-sm font-medium">
                Proven Business & Financial Expertise
              </div>
              <div className="text-xs mt-1 leading-snug">
                Bankbooker Reliable seeds for business & financial growth. Our
                consultants are the Best Today
              </div>
            </div>
            <div className="mt-6">
              <button className="text-white underline text-sm">
                Learn More
              </button>
              <div className="flex items-center gap-2 mt-3 text-white">
                <div className="w-6 h-6 rounded-full bg-white text-[#00A3FF] flex items-center justify-center">
                  <i className="fas fa-play text-xs"></i>
                </div>
                <span className="text-xs">
                  How does it work?
                  <br />
                  <span className="text-[10px] text-white/80">Play video</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankbookerLanding;
