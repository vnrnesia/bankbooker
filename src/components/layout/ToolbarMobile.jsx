import { Link } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import chatbubble from "@/assets/chatbubble.png";
import bankbooker from "@/assets/bankbooker.png";

const icons = {
  whatsapp: "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg",
  telegram:
    "https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg",
  gmail: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png",
  phone: "https://cdn-icons-png.flaticon.com/512/597/597177.png",
};

export default function ToolbarMobile({ scrollToGetStarted }) {
  const [showMessageMenu, setShowMessageMenu] = useState(false);

  const toggleMessageMenu = () => {
    setShowMessageMenu((prev) => !prev);
  };

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-gray-100 border-t z-50 md:hidden">
      <ul className="flex justify-evenly items-center h-16 text-sm relative">
        <li>
          <Link
            to="/"
            className="flex flex-col items-center text-gray-600 mt-[-2px]"
          >
            <img src={bankbooker} className="w-[46px] mt-[-2px]" />
            <span className="mt-[-6.6px]">Главная</span>
          </Link>
        </li>

        <li>
          <button
            onClick={scrollToGetStarted}
            className="flex pl- flex-col items-center text-gray-600"
          >
            <svg
              height="25px"
              width="25px"
              viewBox="0 0 183.667 183.667"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
            >
              <g strokeWidth="0"></g>
              <g strokeLinecap="round" strokeLinejoin="round"></g>
              <g>
                <path
                  style={{ fill: "#000002" }}
                  d="M129.8,183.667H25.087c-1.381,0-2.5-1.119-2.5-2.5V2.5c0-1.381,1.119-2.5,2.5-2.5h133.492 
        c1.381,0,2.5,1.119,2.5,2.5v149.887c0,0.663-0.264,1.299-0.732,1.768l-28.779,28.779C131.099,183.403,130.463,183.667,129.8,183.667z 
        M27.587,178.667h99.69v-26.279c0-1.381,1.119-2.5,2.5-2.5h26.302V5H27.587V178.667z M132.278,154.887v20.266l20.267-20.266H132.278z 
        M144.44,139H39.228c-1.381,0-2.5-1.119-2.5-2.5s1.119-2.5,2.5-2.5H144.44c1.381,0,2.5,1.119,2.5,2.5S145.821,139,144.44,139z 
        M144.44,124.483H39.228c-1.381,0-2.5-1.119-2.5-2.5s1.119-2.5,2.5-2.5H144.44c1.381,0,2.5,1.119,2.5,2.5S145.821,124.483,144.44,124.483z 
        M144.44,109.967H39.228c-1.381,0-2.5-1.119-2.5-2.5s1.119-2.5,2.5-2.5H144.44c1.381,0,2.5,1.119,2.5,2.5S145.821,109.967,144.44,109.967z 
        M144.44,95.45H39.228c-1.381,0-2.5-1.119-2.5-2.5s1.119-2.5,2.5-2.5H144.44c1.381,0,2.5,1.119,2.5,2.5S145.821,95.45,144.44,95.45z 
        M144.44,80.934H39.228c-1.381,0-2.5-1.119-2.5-2.5s1.119-2.5,2.5-2.5H144.44c1.381,0,2.5,1.119,2.5,2.5S145.821,80.934,144.44,80.934z 
        M144.44,66.417H39.228c-1.381,0-2.5-1.119-2.5-2.5s1.119-2.5,2.5-2.5H144.44c1.381,0,2.5,1.119,2.5,2.5S145.821,66.417,144.44,66.417z 
        M102.972,49.667H80.696c-1.381,0-2.5-1.119-2.5-2.5V35.153H75.03c-1.044,0-1.978-0.648-2.343-1.626
        c-0.364-0.979-0.083-2.08,0.706-2.763l16.804-14.553c0.939-0.813,2.334-0.813,3.273,0l16.804,14.553
        c0.789,0.683,1.07,1.785,0.706,2.763c-0.365,0.978-1.299,1.626-2.343,1.626h-3.165v12.013
        C105.472,48.547,104.353,49.667,102.972,49.667z M83.196,44.667h17.276V32.653c0-1.077,0.682-1.995,1.637-2.347l-10.275-8.899
        l-10.274,8.898c0.955,0.352,1.637,1.27,1.637,2.347V44.667z"
                />
              </g>
            </svg>
            <span className="pt-[3px]">Заявка</span>
          </button>
        </li>

        <li>
          <a
            href="tel:+79178899457"
            className="flex flex-col -mr-2 items-center text-gray-600 mt-[-4px]"
          >
            <svg
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
              width="30px"
              height="30px"
            >
              <g strokeWidth="0"></g>
              <g strokeLinecap="round" strokeLinejoin="round"></g>
              <g>
                <path
                  d="M19.308 12.467c-.4234-1.4115-.7215-2.8773-.8813-4.3843-.1571-1.4812-1.449-2.5826-2.9385-2.5826h-6.9092c-1.7767 0-3.1454 1.5345-2.989 3.3043 1.5754 17.8285 15.7771 32.0302 33.6056 33.6056 1.7698.1564 3.3043-1.2073 3.3043-2.9839v-6.1595c0-2.2488-1.1015-3.5362-2.5826-3.6932-1.507-.1598-2.9728-.4579-4.3843-.8813-1.7266-.5179-3.5957-.0304-4.8704 1.2442l-2.9566 2.9566c-5.326-2.8825-9.7164-7.2729-12.5989-12.5989l2.9566-2.9567c1.2746-1.2746 1.7621-3.1438 1.2442-4.8703Z"
                  fill="none"
                  stroke="#000000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </svg>
            <span className="mt-[3px]">Звонок</span>
          </a>
        </li>

        <li className="">
          <button
            onClick={toggleMessageMenu}
            className=" h-16 w-22 flex flex-col -ml-2 items-center justify-center text-gray-600 overflow-visible relative"
          >
            <img src={chatbubble} alt="" className="w-7 h-7" />
            <h3 className="absolute top-1 right-7 flex items-center justify-center rounded-full bg-red-600 w-4 h-4 text-white text-xs">
              1
            </h3>

            <p className="w-24 mb-[-2px]">Сообщение</p>
          </button>
        </li>

        <li className="py-2 -ml-2">
          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="flex flex-col items-center text-gray-600 "
          >
            <svg
              fill="#000000"
              height="24px"
              width="25px"
              viewBox="0 0 492.308 492.308"
              xmlns="http://www.w3.org/2000/svg"
              className=""
            >
              <g strokeWidth="0"></g>
              <g strokeLinecap="round" strokeLinejoin="round"></g>
              <g>
                <g>
                  <g>
                    <path d="M0,0v144.414h144.414V0H0z M124.721,124.721H19.692V19.692h105.029V124.721z" />
                  </g>
                </g>
                <g>
                  <g>
                    <path d="M173.952,0v144.414h144.409V0H173.952z M298.668,124.721H193.644V19.692h105.024V124.721z" />
                  </g>
                </g>
                <g>
                  <g>
                    <path d="M347.899,0v144.414h144.409V0H347.899z M472.615,124.721H367.591V19.692h105.024V124.721z" />
                  </g>
                </g>
                <g>
                  <g>
                    <path d="M0,173.952v144.404h144.414V173.952H0z M124.721,298.663H19.692V193.644h105.029V298.663z" />
                  </g>
                </g>
                <g>
                  <g>
                    <path d="M173.952,173.952v144.404h144.409V173.952H173.952z M298.668,298.663H193.644V193.644h105.024V298.663z" />
                  </g>
                </g>
                <g>
                  <g>
                    <path d="M347.899,173.952v144.404h144.409V173.952H347.899z M472.615,298.663H367.591V193.644h105.024V298.663z" />
                  </g>
                </g>
                <g>
                  <g>
                    <path d="M0,347.894v144.413h144.414V347.894H0z M124.721,472.615H19.692V367.587h105.029V472.615z" />
                  </g>
                </g>
                <g>
                  <g>
                    <path d="M173.952,347.894v144.413h144.409V347.894H173.952z M298.668,472.615H193.644V367.587h105.024V472.615z" />
                  </g>
                </g>
                <g>
                  <g>
                    <path d="M347.899,347.894v144.413h144.409V347.894H347.899z M472.615,472.615H367.591V367.587h105.024V472.615z" />
                  </g>
                </g>
              </g>
            </svg>
            <span className="mt-[4px] py-[px]">Меню</span>
          </button>
        </li>

        <AnimatePresence>
          {showMessageMenu && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-[70px] left-[61%] transform -translate-x-1/2 bg-white border rounded-xl shadow-xl p-2 z-50 flex flex-col items-center gap-3"
            >
              <a
                href="https://wa.me/79178899457"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 455.731 455.731"
                  className="w-12 h-12 rounded-md"
                >
                  <g>
                    <rect
                      x="0"
                      y="0"
                      fill="#1BD741"
                      width="455.731"
                      height="455.731"
                    />
                    <g>
                      <path
                        fill="#FFFFFF"
                        d="M68.494,387.41l22.323-79.284c-14.355-24.387-21.913-52.134-21.913-80.638
          c0-87.765,71.402-159.167,159.167-159.167s159.166,71.402,159.166,159.167c0,87.765-71.401,159.167-159.166,159.167
          c-27.347,0-54.125-7-77.814-20.292L68.494,387.41z M154.437,337.406l4.872,2.975c20.654,12.609,44.432,19.274,68.762,19.274
          c72.877,0,132.166-59.29,132.166-132.167S300.948,95.321,228.071,95.321S95.904,154.611,95.904,227.488
          c0,25.393,7.217,50.052,20.869,71.311l3.281,5.109l-12.855,45.658L154.437,337.406z"
                      />
                      <path
                        fill="#FFFFFF"
                        d="M183.359,153.407l-10.328-0.563c-3.244-0.177-6.426,0.907-8.878,3.037
          c-5.007,4.348-13.013,12.754-15.472,23.708c-3.667,16.333,2,36.333,16.667,56.333c14.667,20,42,52,90.333,65.667
          c15.575,4.404,27.827,1.435,37.28-4.612c7.487-4.789,12.648-12.476,14.508-21.166l1.649-7.702c0.524-2.448-0.719-4.932-2.993-5.98
          l-34.905-16.089c-2.266-1.044-4.953-0.384-6.477,1.591l-13.703,17.764c-1.035,1.342-2.807,1.874-4.407,1.312
          c-9.384-3.298-40.818-16.463-58.066-49.687c-0.748-1.441-0.562-3.19,0.499-4.419l13.096-15.15
          c1.338-1.547,1.676-3.722,0.872-5.602l-15.046-35.201C187.187,154.774,185.392,153.518,183.359,153.407z"
                      />
                    </g>
                  </g>
                </svg>
              </a>

              <a
                href="https://t.me/yourtelegrambot"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-12 h-12 rounded-md"
                  aria-label="Telegram"
                  role="img"
                >
                  <rect width="512" height="512" rx="15%" fill="#37aee2" />
                  <path
                    fill="#c8daea"
                    d="M199 404c-11 0-10-4-13-14l-32-105 245-144"
                  />
                  <path fill="#a9c9dd" d="M199 404c7 0 11-4 16-8l45-43-56-34" />
                  <path
                    fill="#f6fbfe"
                    d="M204 319l135 99c14 9 26 4 30-14l55-258c5-22-9-32-24-25L79 245c-21 8-21 21-4 26l83 26 190-121c9-5 17-3 11 4"
                  />
                </svg>
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </ul>
    </nav>
  );
}
