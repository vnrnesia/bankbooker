import React from "react";

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
  return (
    <section className="bg-gray-100 py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-gray-600 mb-2">Our Process</h3>
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
          4 Easy Steps To Achieve Your Goals
        </h2>
        <p className="text-gray-500 mb-16 max-w-2xl mx-auto">
          Our consulting process is structured to ensure comprehensive analysis,
          strategic planning, and effective implementation for lasting results.
        </p>

        {/* Line + Step Circles (Aligned to cards) */}
        <div className="relative mb-10 md:mb-14 px-4 md:px-12">
          {/* Dotted line */}
          <div className="absolute top-5 left-0 right-0 h-0.5 border-t border-dashed border-gray-300 z-0" />
          
          {/* Step Circles aligned via grid */}
          <div className="relative z-20 grid grid-cols-1 md:grid-cols-4 gap-6">
            {steps.map((step) => (
              <div key={step.id} className="flex justify-center">
                <div className="w-10 h-10 rounded-md flex items-center justify-center font-semibold text-sm bg-gray-200 text-black">
                  {step.id}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Step Descriptions */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-4 md:px-12">
          {steps.map((step) => (
            <div
              key={step.id}
              className="bg-white rounded-xl px-4 py-6 text-center shadow-sm"
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
