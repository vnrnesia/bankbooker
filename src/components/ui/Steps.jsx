import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const steps = [
  {
    id: "01",
    title: "Initial Consultation",
    description:
      "We begin by understanding your business, industry challenges, and financial goals.",
  },
  {
    id: "02",
    title: "Strategic Planning",
    description:
      "We develop a personalized strategy to meet your specific business objectives.",
  },
  {
    id: "03",
    title: "Execution",
    description:
      "Our team implements the strategies with attention to detail and efficiency.",
  },
  {
    id: "04",
    title: "Review & Support",
    description:
      "We monitor progress and provide ongoing support to ensure continued success.",
  },
];

const Steps = () => {
  const [reachedSteps, setReachedSteps] = useState([]);
  const [lineWidth, setLineWidth] = useState(0);

  useEffect(() => {
    const totalDuration = 4000; // 4 seconds
    const intervalTime = 40;
    let elapsed = 0;

    const interval = setInterval(() => {
      elapsed += intervalTime;
      const percent = Math.min((elapsed / totalDuration) * 100, 100);
      setLineWidth(percent);

      const stepIndex = Math.floor((percent / 100) * steps.length);
      if (!reachedSteps.includes(stepIndex) && stepIndex < steps.length) {
        setReachedSteps((prev) => [...prev, stepIndex]);
      }

      if (percent >= 100) {
        clearInterval(interval);
      }
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gray-50 py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-gray-600 mb-2">Our Process</h3>
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
          4 Easy Steps To Achieve Your Goals
        </h2>
        <p className="text-gray-500 mb-16 max-w-2xl mx-auto">
          Our consulting process is structured to ensure comprehensive analysis,
          strategic planning, and effective implementation for lasting results.
        </p>

        {/* Top Line and Step Circles */}
        <div className="relative mb-10 md:mb-14">
          {/* Dotted background line */}
          <div className="absolute top-5 left-4 right-4 h-0.5 border-t border-dashed border-gray-300 z-0" />

          {/* Animated blue line */}
          <motion.div
            className="absolute top-5 left-4 h-0.5 bg-blue-500 z-10 rounded-full transition-all duration-500 ease-in-out"
            style={{
              width: `calc(${lineWidth}% - 2rem)`,
              maxWidth: "calc(100% - 2rem)",
            }}
          />

          {/* Step Circles */}
          <div className="relative z-20 flex gap-[300px] items-center px-4 md:px-12">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className={`w-10 h-10 rounded-md flex items-center justify-center font-semibold text-sm transition-colors duration-300 ${
                  reachedSteps.includes(index)
                    ? "bg-blue-500 text-white"
                    : "bg-gray-300 text-gray-800"
                }`}
              >
                {step.id}
              </div>
            ))}
          </div>
        </div>

        {/* Step Descriptions */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-4 md:px-12">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`rounded-xl px-6 py-8 text-center transition-all duration-500 shadow-sm ${
                reachedSteps.includes(index)
                 
              }`}
            >
              <h4 className="text-lg font-semibold text-gray-800 mb-2">
                {step.title}
              </h4>
              <p className="text-sm text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;
