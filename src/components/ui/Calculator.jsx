import React, { useState } from "react";

const Calculator = () => {
    const [currency, setCurrency] = useState("USD");
    const [country, setCountry] = useState("Russia");
    const [amount, setAmount] = useState("");

    return (
        <div>
            <div>
                <h2 className="text-base font text-gray-500">Calculate</h2>
                <h3 className="text-4xl font-bold text-gray-900 mt-2">
                    Calculate the cost of the transfer
                </h3>
            </div>
            <div className="flex items-center justify-center py-10">
                <div className="max-w-7xl w-full flex flex-col md:flex-row gap-6">
                    {/* Left Panel */}
                    <div className="bg-gray-100 rounded-2xl shadow-md md:w-1/3 p-6 md:p-10">
                        <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-6">
                            Calculate the Transfer Amount
                        </h2>

                        <div className="space-y-4">
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
                            </div>
                        </div>

                        <p className="text-[13px] text-gray-400 mt-6 leading-snug">
                            *Service fee is 0.36% including VAT, but not less than 60,000 ₽.
                            Conversion based on the Central Bank exchange rate.
                        </p>
                    </div>

                    {/* Right Panel */}
                    <div className="bg-gray-100 rounded-2xl shadow-md md:w-2/3 p-6 md:p-10">
                        <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-6">
                            Calculation Result
                        </h2>

                        {/* Total Cost & Service Fee side by side */}
                        <div className="flex justify-between mb-6 max-w-md">
                            <div className="flex flex-col items-center">
                                <p className="text-gray-500 text-sm">Total Cost</p>
                                {/* You can later replace this with calculation based on input */}
                                <p className="text-3xl font-bold text-blue-500">7,891,290 ₽</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <p className="text-gray-500 text-sm">Service Fee*</p>
                                <p className="text-3xl font-semibold text-gray-900">60,000 ₽</p>
                            </div>
                        </div>

                        {/* Name and Phone Number side by side */}
                        <div className="flex gap-4 mb-4 max-w-md">
                            <input
                                type="text"
                                placeholder="Name"
                                className="flex-1 px-4 py-3 rounded-lg bg-white placeholder-gray-500 focus:outline-none"
                            />
                            <input
                                type="text"
                                placeholder="Phone Number"
                                className="flex-1 px-4 py-3 rounded-lg bg-white placeholder-gray-500 focus:outline-none"
                            />
                        </div>

                        {/* Submit button aligned left, size based on content */}
                        <div>
                            <button className="mt-10 bg-blue-400 hover:bg-blue-500 transition text-white font-semibold py-3 px-8 rounded-full">
                                Submit Request
                            </button>
                        </div>

                        {/* Consent checkboxes aligned left */}
                        <div className="space-y-2 text-sm mt-12 max-w-md">
                            <label className="flex items-start space-x-2">
                                <input type="checkbox" className="mt-1" />
                                <span>
                                    I give my <span className="text-blue-500">consent</span> for the processing, storage, and transfer of personal data
                                </span>
                            </label>
                            <label className="flex items-start space-x-2">
                                <input type="checkbox" className="mt-1" />
                                <span>I agree to receive informational and promotional emails</span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Calculator;
