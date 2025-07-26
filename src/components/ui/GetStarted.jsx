import React, { useState } from "react";
import InputMask from "react-input-mask";

const GetStarted = () => {
  const [contactMethod, setContactMethod] = useState("WhatsApp");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

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
      if (!rawPhone.startsWith("7")) {
        setError("Please enter your phone number.");
        return;
      }
      if (rawPhone.length !== 11) {
        setError("Phone number must be 11 digits long.");
        return;
      }
      setError("");
      console.log("Submitting Phone:", phone);
    }

  };

  return (
    <div className="flex flex-col gap-10 py-24 items-center justify-center bg-gray-100 p-6">
      <h1 className="font-bold text-3xl text-center">
        Оставьте заявку — поможем провести валютный платеж
      </h1>

      <div className="rounded-3xl bg-white flex flex-col md:flex-row justify-between items-center shadow-lg p-6 w-full max-w-sm lg:max-w-[90%] 2xl:max-w-7xl">
        <div className="flex flex-col items-center justify-center md:w-1/2 pr-0 md:pr-8 w-full">
          <h2 className="pb-4 text-xl font-semibold">
            Начните сотрудничество с нами{" "}
          </h2>

          <form
            className="flex flex-col items-center justify-center w-full max-w-sm space-y-4"
            onSubmit={handleSubmit}
          >
            <div className="w-full">
              <label className="block mb-1 text-sm font-medium text-gray-700">
                How to Contact?
              </label>
              <div className="relative">
                <select
                  value={contactMethod}
                  onChange={(e) => {
                    setContactMethod(e.target.value);
                    setError("");
                  }}
                  className="w-full appearance-none border bg-gray-100 rounded-md p-3 pr-10 text-sm"
                >
                  <option>WhatsApp</option>
                  <option>Telegram</option>
                  <option>Email</option>
                  <option>Phone</option>
                </select>
                <svg
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none"
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

            {contactMethod === "Email" ? (
              <div className="w-full">
                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-2.5 bg-gray-100 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
            ) : (
              <div className="w-full">
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
                      className="w-full p-3 bg-gray-100 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                  )}
                </InputMask>
              </div>
            )}

            {error && (
              <div className="text-red-500 text-sm text-left w-full">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="bg-gradient-to-l w-full text-center from-[#0273DE] to-[#10B0EB] text-white py-3 rounded-full hover:scale-105 transition duration-300 font-medium text-sm"
            >
              Submit
            </button>

            <div className="mt-2 text-sm text-gray-600 space-y-2 w-full">
              <label className="flex items-start gap-2">
                <input type="checkbox" className="mt-1" />I agree to the terms
                of service, privacy policy, and receiving occasional emails
              </label>
              <label className="flex items-start gap-2">
                <input type="checkbox" className="mt-1" />I agree to the terms
                of service and receiving marketing emails
              </label>
            </div>
          </form>
        </div>

        <div className="w-full md:w-1/2 mt-6 md:mt-0 flex justify-center">
          <img
            src="/order.png"
            alt="Order Illustration"
            className="md:w-[80%] md:h-[80%] md:-mr-16"
          />
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
