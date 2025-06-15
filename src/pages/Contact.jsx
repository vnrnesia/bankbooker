import Logo from "@/assets/logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/subpageui/Navbar.jsx";
import Socialicon1 from "@/assets/LeftPanel/icon1.png";
import Socialicon2 from "@/assets/LeftPanel/icon2.png";
import Socialicon3 from "@/assets/LeftPanel/icon3.png";
import Socialicon4 from "@/assets/LeftPanel/icon4.png";
import icon1 from "@/assets/ContactIcon/icon1.png";
import icon2 from "@/assets/ContactIcon/icon2.png";
import icon3 from "@/assets/ContactIcon/icon3.png";
import icon4 from "@/assets/ContactIcon/icon4.png";
import brand1 from "@/assets/ContactIcon/brand1.png";
import brand2 from "@/assets/ContactIcon/brand2.png";
import brand3 from "@/assets/ContactIcon/brand3.png";
import brand4 from "@/assets/ContactIcon/brand4.png";
import brand5 from "@/assets/ContactIcon/brand5.png";
import brand6 from "@/assets/ContactIcon/brand6.png";
import brand7 from "@/assets/ContactIcon/brand7.png";
import brand8 from "@/assets/ContactIcon/brand8.png";

export default function Contact() {
  const [showServices, setShowServices] = useState(false);

  const brandIcons = [
    brand1,
    brand2,
    brand3,
    brand4,
    brand5,
    brand6,
    brand7,
    brand8,
  ];

  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="justify-center items-center text-center mt-24 mb-12 font-[Manrope]">
        <h2 className="text-5xl font-medium text-gray-600 pb-4 px-4">
          Talk To Our Friendly Sales Team
        </h2>
        <p className="text-gray-600">
          We’ll help you to find the perfect plan, no matter your business size.
        </p>
      </div>

      <div className="max-w-7xl mx-auto py-16 md:pb-64 px-5 font-[Manrope]">
        <div className="flex flex-col md:flex-row justify-between gap-10 items-start">
          {/* Left: Form */}
          <div className="w-full md:w-auto md:min-w-[525px] space-y-6">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="mt-1 w-full border rounded-md p-2"
                  placeholder="First Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="mt-1 w-full border rounded-md p-2"
                  placeholder="Last Name"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  className="mt-1 w-full border rounded-md p-2"
                  placeholder="you@company.com"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  className="mt-1 w-full border rounded-md p-2"
                  placeholder="+7 917 889 94 57"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  className="mt-1 w-full border rounded-md p-2"
                  rows={4}
                  placeholder="Leave us a message..."
                />
              </div>

              <div className="md:col-span-2 space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Services <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    "банковские продукты",
                    "налоговый консалтинг",
                    "аутсорсинг бухгалтерия",
                    "юридический отдел",
                    "оплата инвойсов",
                    "другой",
                  ].map((service, i) => (
                    <label
                      key={i}
                      className="flex items-center space-x-2 text-sm font-[Manrope]"
                    >
                      <input type="checkbox" className="form-checkbox" />
                      <span>{service}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="w-full border-gray-300 border-2 text-black hover:bg-gradient-to-r hover:from-sky-500 hover:to-blue-600 hover:text-white cursor-pointer duration-300 py-2 rounded-md transition"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Right: Info */}
          <div className="w-full md:w-1/3 space-y-8 text-gray-700 text-sm">
            <div>
              <h3 className="font-semibold">Chat With Us</h3>
              <ul className="space-y-3 mt-2">
                <li className="flex items-center space-x-2">
                  <img src={icon1} alt="Chat Icon" className="w-5 h-5" />
                  <a href="#" className="text-black underline">
                    Start a live chat
                  </a>
                </li>
                <li className="flex items-center space-x-2">
                  <img src={icon2} alt="Email Icon" className="w-5 h-5" />
                  <a href="#" className="text-black underline">
                    Shoot us an email
                  </a>
                </li>
                <li className="flex items-center space-x-2">
                  <img src={icon3} alt="Telegram Icon" className="w-5 h-5" />
                  <a href="#" className="text-black underline">
                    Message us on Telegram
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold">Call Us</h3>
              <p>Call our team Mon–Fri from 8am to 5pm.</p>
              <div className="mt-2 space-y-2">
                <div className="flex items-center space-x-2">
                  <img src={icon4} alt="Phone Icon" className="w-5 h-5" />
                  <a href="tel:+79178899457" className="text-black underline">
                    +7 (917) 889–94–57
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <img src={icon4} alt="Phone Icon" className="w-5 h-5" />
                  <a href="tel:+79178899457" className="text-black underline">
                    +7 (917) 889–94–57
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold">Trusted By 550+ Companies</h3>
              <p className="mb-3">
                Here are some of the companies that have been
              </p>
              <div className="grid grid-cols-4 gap-4">
                {brandIcons.map((brand, i) => (
                  <div
                    key={i}
                    className="w-full h-4 flex items-center justify-center"
                  >
                    <img
                      src={brand}
                      alt={`Company Logo ${i + 1}`}
                      className="h-5 w-auto object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold">Follow Us</h3>
               <div className="flex  gap-4 mt-4">
                        <img src={Socialicon1} alt="X" className="w-5 h-5" />
                        <img src={Socialicon2} alt="LinkedIn" className="w-5 h-5" />
                        <img src={Socialicon3} alt="Facebook" className="w-5 h-5" />
                        <img src={Socialicon4} alt="Instagram" className="w-5 h-5" />
                      </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
