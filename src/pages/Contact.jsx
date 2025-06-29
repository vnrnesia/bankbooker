import { useState } from "react";
import Navbar from "@/components/subpageui/Navbar.jsx";

import Socialicon1 from "@/assets/LeftPanel/icon1.png";
import Socialicon2 from "@/assets/LeftPanel/icon2.png";
import Socialicon3 from "@/assets/LeftPanel/icon3.png";
import Socialicon4 from "@/assets/LeftPanel/icon4.png";

import contactIcon1 from "@/assets/ContactImg/icon1.png";
import contactIcon2 from "@/assets/ContactImg/icon2.png";
import contactIcon3 from "@/assets/ContactImg/icon3.png";
import contactIcon4 from "@/assets/ContactImg/icon4.png";
import contactIcon5 from "@/assets/ContactImg/icon5.png";

const services = [
  { id: 1, label: "Оплата инвойсов" },
  { id: 2, label: "Аутсорсинг Бухгалтерии" },
  { id: 3, label: "Юридический департамент" },
  { id: 4, label: "Налоговый консалтинг" },
];

const contactBenefits = [
  { icon: contactIcon1, text: "Secure payments through reliable partners" },
  { icon: contactIcon2, text: "Fast transfers" },
  { icon: contactIcon3, text: "Fair commissions" },
  { icon: contactIcon4, text: "Best available rates" },
  { icon: contactIcon5, text: "Convenience" },
];

const socialIcons = [Socialicon1, Socialicon2, Socialicon3, Socialicon4];

const Label = ({ children }) => (
  <label className="block text-sm font-medium text-gray-700">{children}</label>
);

const Input = ({ type = "text", placeholder }) => (
  <input
    type={type}
    placeholder={placeholder}
    className="w-full border rounded-md p-2 mt-1"
  />
);

export default function Contact() {
  const [selectedService, setSelectedService] = useState(null);
  const [contactMethod, setContactMethod] = useState("WhatsApp");

  return (
    <>
      <Navbar />
      <div className="flex gap-10 justify-center flex-col md:flex-row font-[Manrope] max-w-6xl mx-auto py-12 px-4 md:px-8">
        {/* Left Form */}
        <div className="w-full md:w-[470px] space-y-6">
          <h2 className="text-3xl font-semibold text-gray-800">
            Talk To Our Friendly Sales Team
          </h2>
          <p className="text-gray-500">
            We’ll help you to find the perfect plan, no matter your business
            size.
          </p>

          <form className="space-y-4">
            <div>
              <Label>
                Full Name <span className="text-red-500">*</span>
              </Label>
              <Input placeholder="Your Name" />
            </div>

            <div>
              <Label>How to Contact?</Label>
              <div className="relative">
                <select
                  value={contactMethod}
                  onChange={(e) => setContactMethod(e.target.value)}
                  className="w-full appearance-none border rounded-md p-2 mt-1 pr-10"
                >
                  <option>WhatsApp</option>
                  <option>Telegram</option>
                  <option>Email</option>
                  <option>Phone</option>
                </select>
                <svg
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none transition-transform duration-300"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  width={16}
                  height={16}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>

            <div>
              <Label>
                Phone Number <span className="text-red-500">*</span>
              </Label>
              <Input type="tel" placeholder="+7 (917) 889-94-57" />
            </div>

            <div>
              <Label>Select Service</Label>
              <div className="flex flex-wrap gap-2 mt-1">
                {services.map(({ id, label }) => (
                  <button
                    key={id}
                    type="button"
                    onClick={() => setSelectedService(id)}
                    className={`inline-block border rounded-lg px-3 py-2 text-sm transition ${
                      selectedService === id
                        ? "border-green-500 text-green-700 bg-green-100"
                        : "bg-white border-gray-300 text-gray-700"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
              {selectedService && (
                <button
                  type="button"
                  onClick={() => setSelectedService(null)}
                  className="text-sm text-red-500 underline mt-2"
                >
                  Clear selection
                </button>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-gray-900 text-white py-2 rounded-md hover:opacity-90 transition"
            >
              Continue
            </button>
          </form>
        </div>

        {/* Right Info */}
        <div className="rounded-sm bg-gray-100 shadow-md w-full md:w-1/2 mt-10 md:mt-0 px-6 md:px-8 py-8 text-gray-700 flex flex-col gap-10 justify-between">
          <div>
            <h3 className="text-2xl font-extrabold text-gray-800 leading-snug pb-10">
              International Payment Solutions <br />
              and Complex Services for Businesses
            </h3>
            <ul className="mt-6 space-y-4 text-gray-600">
              {contactBenefits.map(({ icon, text }, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <img className="w-6 h-6" src={icon} alt="" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="py-7">
            <h4 className="font-semibold text-gray-800">Follow Us</h4>
            <p className="text-gray-400 text-sm mb-2"> Stay connected for our latest updates.</p>
            <div className="flex items-center space-x-4">
              {socialIcons.map((icon, idx) => (
                <img
                  key={idx}
                  src={icon}
                  alt={`social-${idx}`}
                  className="w-5 h-5"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
//update2