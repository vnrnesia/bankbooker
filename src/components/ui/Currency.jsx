import React from 'react';

const Currency = () => {
    const rates = [
        { currency: 'USD', rate: 77.8855 },
        { currency: 'EUR', rate: 91.1201 },
        { currency: 'CNY', rate: 10.8435 },
        { currency: 'GBP', rate: 98.1234 },
        { currency: 'JPY', rate: 0.5678 },
    ];

    return (
        <div className="mx-auto ">
            <div className="flex w-full fixed">
                {rates.map((rate, index) => (
                    <div key={index} className="flex-1 bg-gray-100 p-2 text-center ">
                        <div className="flex justify-center gap-1">
                            <p className="text-blue-600 font-semibold">{rate.currency}</p>
                            <p className="text-gray-700 text-[10px] my-auto">ЦБ</p>
                             <p className="text-sm hidden md:block">{rate.rate}</p>
                        </div>
                         <p className="text-sm block md:hidden">{rate.rate}</p>
                       
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Currency;
