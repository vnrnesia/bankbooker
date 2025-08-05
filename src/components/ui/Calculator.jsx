import React, { useState } from "react";
import InputMask from "react-input-mask";

const Calculator = () => {
  const [currency, setCurrency] = useState("USD");
  const [contactMethod, setContactMethod] = useState("WhatsApp");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [amount, setAmount] = useState("0");
  const [error, setError] = useState("");
  const [openDropdown, setOpenDropdown] = useState("");

  const handleSliderChange = (e) => setAmount(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (contactMethod === "Email") {
      if (!email) {
        setError("Please enter a valid email address.");
        return;
      }
      setError("");
      console.log("Submitting Email:", email);
    } else {
      const rawPhone = phone.replace(/\D/g, "");
      if (!rawPhone.startsWith("7") || rawPhone.length !== 11) {
        setError("Phone number must be 11 digits and start with 7.");
        return;
      }
      setError("");
      console.log("Submitting Phone:", phone);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mt-10">
        <h2 className="text-base font-medium text-gray-500">Calculate</h2>
        <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
          Calculate the cost of the transfer
        </h3>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex items-center justify-center py-10"
      >
        <div className="bg-gray-100 rounded-2xl shadow-md w-full p-6 sm:p-10 md:p-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Transfer Calculator
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Form Section */}
            <div className="space-y-5">
              {/* Currency Select */}
              <div className="relative">
                <label htmlFor="currency" className="block text-gray-600 mb-1">
                  Select Currency
                </label>
                <div
                  className="relative"
                  onClick={() =>
                    setOpenDropdown((prev) =>
                      prev === "currency" ? "" : "currency"
                    )
                  }
                >
                  <select
                    id="currency"
                    value={currency}
                    onChange={(e) => {
                      setCurrency(e.target.value);
                      setOpenDropdown("");
                    }}
                    className="w-full appearance-none border bg-white rounded-md p-3 pr-10 text-sm"
                  >
                    <option value="USD">USD</option>
                    <option value="RUB">RUB</option>
                    <option value="GBP">GBP</option>
                    <option value="TRY">TRY</option>
                  </select>
                  <svg
                    className={`absolute right-3 top-1/2 transform -translate-y-1/2 transition-transform duration-300 ${
                      openDropdown === "currency"
                        ? "rotate-180 text-blue-500"
                        : "rotate-0 text-gray-400"
                    }`}
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

              {/* Contact Method Select */}
              <div className="relative">
                <label className="block text-gray-600 mb-1">
                  Preferred Contact
                </label>
                <div
                  className="relative"
                  onClick={() =>
                    setOpenDropdown((prev) =>
                      prev === "contact" ? "" : "contact"
                    )
                  }
                >
                  <select
                    value={contactMethod}
                    onChange={(e) => {
                      setContactMethod(e.target.value);
                      setError("");
                      setOpenDropdown("");
                    }}
                    className="w-full appearance-none border bg-white rounded-md p-3 pr-10 text-sm"
                  >
                    <option>WhatsApp</option>
                    <option>Telegram</option>
                    <option>Email</option>
                    <option>Phone</option>
                  </select>
                  <svg
                    className={`absolute right-3 top-1/2 transform -translate-y-1/2 transition-transform duration-300 ${
                      openDropdown === "contact"
                        ? "rotate-180 text-blue-500"
                        : "rotate-0 text-gray-400"
                    }`}
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

              {/* Amount Inputs */}
              <div>
                <label htmlFor="amount" className="block text-gray-600 mb-1">
                  Transfer Amount
                </label>
                <input
                  type="number"
                  id="amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder={`Enter amount in ${currency}`}
                  className="bg-white rounded-lg px-4 py-3 text-gray-800 w-full"
                  min={0}
                />
                <input
                  type="range"
                  min={0}
                  max={1000000}
                  step={1000}
                  value={amount}
                  onChange={handleSliderChange}
                  className="w-full mt-2 accent-blue-500"
                />
              </div>

              <p className="text-[13px] text-gray-400 mt-2 leading-snug">
                *Service fee is 0.36% including VAT, but not less than 60,000 ₽.
              </p>
            </div>

            {/* Right Section */}
            <div className="space-y-6">
              {/* Output */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col items-center">
                  <p className="text-gray-500 text-sm">Total Cost</p>
                  <p className="text-xl sm:text-3xl font-bold text-blue-500">
                    7,891,290 ₽
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <p className="text-gray-500 text-sm">Service Fee*</p>
                  <p className="text-xl sm:text-3xl font-semibold text-gray-900">
                    60,000 ₽
                  </p>
                </div>
              </div>

              {/* Contact Inputs */}
              <div className="flex flex-col sm:flex-row gap-4 scale-x-95">
                <input
                  type="text"
                  placeholder="Name"
                  className="px-3 py-3 rounded-lg bg-white placeholder-gray-500 focus:outline-none w-full sm:w-1/2"
                />
                {contactMethod === "Email" ? (
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email Address"
                    className="px-3 py-3 rounded-lg bg-white placeholder-gray-500 focus:outline-none w-full sm:w-1/2"
                  />
                ) : (
                  <InputMask
                    mask="+7 (999) 999-99-99"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  >
                    {(inputProps) => (
                      <input
                        {...inputProps}
                        type="tel"
                        placeholder="Phone Number"
                        className="px-3 py-3 rounded-lg bg-white placeholder-gray-500 focus:outline-none w-full sm:w-1/2"
                      />
                    )}
                  </InputMask>
                )}
              </div>
              {error && <p className="text-red-500 text-sm">{error}</p>}

              {/* Submit Button */}
              <button
                type="submit"
                className="cursor-pointer w-full sm:w-fit bg-gradient-to-l from-[#0273DE] to-[#10B0EB] text-white px-6 py-4 rounded-md hover:scale-105 transition duration-300 font-medium"
              >
                See a Demo
              </button>

              {/* Consent */}
              <div className="space-y-2 text-sm">
                <label className="flex items-start space-x-2">
                  <input type="checkbox" className="mt-1" />
                  <span>
                    I give my <span className="text-blue-500">consent</span> for
                    the processing, storage, and transfer of personal data
                  </span>
                </label>
                <label className="flex items-start space-x-2">
                  <input type="checkbox" className="mt-1" />
                  <span>
                    I agree to receive informational and promotional emails
                  </span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Calculator;
