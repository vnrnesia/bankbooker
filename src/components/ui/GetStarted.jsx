import React from 'react';

const GetStarted = () => {
    return (
        <div className="flex flex-col rounded-2xl border border-t-1 bg-gray-50 mt-4 items-center justify-center shadow-md p-4">
            <form>
                <div className="flex flex-col md:flex-row gap-4 items-center">
                    <input
                        type="text"
                        placeholder="Name"
                        className="p-3 border rounded-lg focus:outline-none "
                    />
                    <input
                        type="email"
                        placeholder="Email Address"
                        className="p-3 border rounded-lg focus:outline-none "
                    />

                   
                    <div className="hidden md:block h-10 w-px bg-gray-400"></div>

                    <button
                        type="button"
                        className="px-6 py-3 w-full md:w-[150px]  bg-gradient-to-l from-[#0273DE] to-[#10B0EB] text-white rounded-lg hover:bg-blue-700 transition"
                    >
                        Get Started
                    </button>
                </div>
            </form>
        </div>
    );
};

export default GetStarted;
