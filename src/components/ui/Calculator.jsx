import React, { useState } from "react";

const Calculator = () => {
  const [currency, setCurrency] = useState("USD");
  const [country, setCountry] = useState("Russia");
  const [amount, setAmount] = useState("0");

  const handleSliderChange = (e) => {
    setAmount(e.target.value);
  };

  return (
    <div className="max-w-7xl">
      <div>
        <h2 className="text-base text-center font text-gray-500">Calculate</h2>
        <h3 className="text-4xl text-center font-bold text-gray-900 mt-2">
          Calculate the cost of the transfer
        </h3>
      </div>

      <div className="flex items-center justify-center py-10">
        <div className="bg-gray-100 rounded-2xl shadow-md max-w-6xl w-full p-8 md:p-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Transfer Calculator
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Left Form Section */}
            <div className="space-y-4 max-w-sm">
              <div>
                <label htmlFor="currency" className="block text-gray-600 mb-1">
                  Select Currency
                </label>
                <select
                  id="currency"
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
                  className="bg-white rounded-lg px-4 py-3 text-gray-800 w-full"
                >
                  <option value="USD">USD</option>
                  <option value="RUB">RUB</option>
                  <option value="GBP">GBP</option>
                  <option value="TRY">TRY</option>
                </select>
              </div>

              <div>
                <label htmlFor="country" className="block text-gray-600 mb-1">
                  Recipient Country
                </label>
                <select
                  id="country"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="bg-white rounded-lg px-4 py-3 text-gray-800 w-full"
                >
                  <option value="Russia">Russia</option>
                  <option value="China">China</option>
                  <option value="Türkiye">Türkiye</option>
                  <option value="Germany">Germany</option>
                </select>
              </div>

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
                Conversion based on the Central Bank exchange rate.
              </p>
            </div>

            {/* Right Result & Contact Section */}
            <div className="space-y-6 max-w-xsm">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col items-center">
                  <p className="text-gray-500 text-sm">Total Cost</p>
                  <p className="text-3xl font-bold text-blue-500">
                    7,891,290 ₽
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <p className="text-gray-500 text-sm">Service Fee*</p>
                  <p className="text-3xl font-semibold text-gray-900">
                    60,000 ₽
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="flex-1 px-1 py-3 rounded-lg bg-white placeholder-gray-500 focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="flex-1 px-1 py-3 rounded-lg bg-white placeholder-gray-500 focus:outline-none"
                />
              </div>

              <div>
                <button className="mcursor-pointer bg-gradient-to-l from-[#0273DE] to-[#10B0EB] text-white px-6 py-4 rounded-full hover:scale-105 transition duration-300 font-medium inline-block">
                  Submit Request
                </button>
              </div>

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
      </div>
    </div>
  );
};

export default Calculator;
