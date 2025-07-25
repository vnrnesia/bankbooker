import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Form from "@/components/ui/Form.jsx";

export default function SlideOverForm({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.aside
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: "0%", opacity: 1 }}
          exit={{ x: "100%", opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed top-0 right-0 h-full w-full md:w-[50%] bg-gradient-to-r from-[#006FDC] to-[#11B4EC] shadow-2xl z-50"
        >
          <div className="relative w-full h-full flex items-center justify-center px-6 py-12">
            <button
              onClick={() => {
                console.log("closed");
                onClose();
              }}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            >
              <X className="w-16 h-16" />
            </button>

            <div className="w-full max-w-md">
              <Form />
              <div className="flex pt-10 justify-center gap-2">
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
                  >
                    <rect width="512" height="512" rx="15%" fill="#37aee2" />
                    <path
                      fill="#c8daea"
                      d="M199 404c-11 0-10-4-13-14l-32-105 245-144"
                    />
                    <path
                      fill="#a9c9dd"
                      d="M199 404c7 0 11-4 16-8l45-43-56-34"
                    />
                    <path
                      fill="#f6fbfe"
                      d="M204 319l135 99c14 9 26 4 30-14l55-258c5-22-9-32-24-25L79 245c-21 8-21 21-4 26l83 26 190-121c9-5 17-3 11 4"
                    />
                  </svg>
                </a>

                <a
                  href="mailto:zinter@zinter.com"
                  className="w-12 h-12 flex items-center justify-center shadow-lg transform transition-all hover:scale-110 hover:shadow-xl"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-12 h-12 rounded-md"
                  >
                    <path
                      d="M2 11.9556C2 8.47078 2 6.7284 2.67818 5.39739C3.27473 4.22661 4.22661 3.27473 5.39739 2.67818C6.7284 2 8.47078 2 11.9556 2H20.0444C23.5292 2 25.2716 2 26.6026 2.67818C27.7734 3.27473 28.7253 4.22661 29.3218 5.39739C30 6.7284 30 8.47078 30 11.9556V20.0444C30 23.5292 30 25.2716 29.3218 26.6026C28.7253 27.7734 27.7734 28.7253 26.6026 29.3218C25.2716 30 23.5292 30 20.0444 30H11.9556C8.47078 30 6.7284 30 5.39739 29.3218C4.22661 28.7253 3.27473 27.7734 2.67818 26.6026C2 25.2716 2 23.5292 2 20.0444V11.9556Z"
                      fill="white"
                    />
                    <path
                      d="M22.0515 8.52295L16.0644 13.1954L9.94043 8.52295V8.52421L9.94783 8.53053V15.0732L15.9954 19.8466L22.0515 15.2575V8.52295Z"
                      fill="#EA4335"
                    />
                    <path
                      d="M23.6231 7.38639L22.0508 8.52292V15.2575L26.9983 11.459V9.17074C26.9983 9.17074 26.3978 5.90258 23.6231 7.38639Z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M22.0508 15.2575V23.9924H25.8428C25.8428 23.9924 26.9219 23.8813 26.9995 22.6513V11.459L22.0508 15.2575Z"
                      fill="#34A853"
                    />
                    <path
                      d="M9.94811 24.0001V15.0732L9.94043 15.0669L9.94811 24.0001Z"
                      fill="#C5221F"
                    />
                    <path
                      d="M9.94014 8.52404L8.37646 7.39382C5.60179 5.91001 5 9.17692 5 9.17692V11.4651L9.94014 15.0667V8.52404Z"
                      fill="#C5221F"
                    />
                    <path
                      d="M9.94043 8.52441V15.0671L9.94811 15.0734V8.53073L9.94043 8.52441Z"
                      fill="#C5221F"
                    />
                    <path
                      d="M5 11.4668V22.6591C5.07646 23.8904 6.15673 24.0003 6.15673 24.0003H9.94877L9.94014 15.0671L5 11.4668Z"
                      fill="#4285F4"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
