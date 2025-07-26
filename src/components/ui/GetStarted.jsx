import React from "react";

const GetStarted = () => {
  return (
    <div className="flex flex-col gap-10 py-24 items-center justify-center bg-gray-100 p-6">
      <h1 className="font-bold text-3xl text-center">
        Оставьте заявку — поможем провести валютный платеж
      </h1>

      <div className=" rounded-3xl bg-white flex flex-col md:flex-row justify-between items-center shadow-lg p-6 w-full max-w-sm lg:max-w-[90%] 2xl:max-w-7xl">
        <div className="w-full md:w-1/2 pr-0 md:pr-8">
          
          <form>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full bg-gray-100 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email Address*"
                className="w-full p-3 bg-gray-100  border rounded-lg focus:outline-none focus:ring-2 focus:blue-orange-400"
              />
            </div>
            <button
              type="button"
              className="bg-gradient-to-l  w-36 text-center my-2 from-[#0273DE] to-[#10B0EB] text-white px-2 py-4 rounded-full hover:scale-105 transition duration-300 font-medium"
            >
              Submit
            </button>
            <div className="mt-4 text-sm text-gray-600">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />I agree to the terms
                of service, privacy policy, and receiving occasional emails
              </label>
              <label className="flex items-center mt-2">
                <input type="checkbox" className="mr-2" />I agree to the terms
                of service and receiving marketing emails
              </label>
            </div>
          </form>
        </div>

        <div className="w-full md:w-1/2 mt-6 md:mt-0 flex justify-center">
          <img
            src="/order.png"
            alt="Order Illustration"
            className="w-[80%] h-[80%] rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
