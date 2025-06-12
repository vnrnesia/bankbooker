import Logo from "@/assets/logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/subpageui/Navbar.jsx";

export default function Contact() {
  const [showServices, setShowServices] = useState(false);

  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-16 pb-64 px-5 font-[Manrope]">
        <div className="flex flex-col md:flex-row justify-between gap-10 items-start">
          {/* Left: Form */}
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-3xl font-semibold text-gray-900">
              Talk To Our Friendly Sales Team
            </h2>
            <p className="text-gray-600">
              We’ll help you to find the perfect plan, no matter your business
              size.
            </p>

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
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
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
                  className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition"
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
              <ul className="space-y-1 mt-2">
                <li>
                  <a href="#" className="text-black underline">
                    Start a live chat
                  </a>
                </li>
                <li>
                  <a href="#" className="text-black  underline">
                    Shoot us an email
                  </a>
                </li>
                <li>
                  <a href="#" className="text-black  underline">
                    Message us on Telegram
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold">Call Us</h3>
              <p>Call our team Mon–Fri from 8am to 5pm.</p>
              <div className="mt-2">
                <a
                  href="tel:+79178899457"
                  className="block text-black underline"
                >
                  +7 (917) 889–94–57
                </a>
                <a
                  href="tel:+79178899457"
                  className="block text-black underline"
                >
                  +7 (917) 889–94–57
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-semibold">Trusted By 550+ Companies</h3>
              <p className="mb-3">
                Here are some of the companies that have been
              </p>
              <div className="grid grid-cols-3 gap-4">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div
                    key={i}
                    className="w-full h-8 flex items-center justify-center"
                  >
                    <img
                      src={`/assets/BrandIcon/brand${i + 1}.png`}
                      alt={`Company Logo ${i + 1}`}
                      className="h-8 object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold">Follow Us</h3>
              <div className="flex space-x-4 mt-2 text-gray-600 text-base">
                <a href="#" className="hover:text-black">
                  X
                </a>
                <a href="#" className="hover:text-black">
                  L
                </a>
                <a href="#" className="hover:text-black">
                  face
                </a>
                <a href="#" className="hover:text-black">
                  insta
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
