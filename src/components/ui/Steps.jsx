import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Steps() {
  const steps = [
    {
      title: "Initial Consultation",
      description:
        "We begin by understanding your business, industry challenges, and financial goals.",
    },
    {
      title: "Strategic Planning",
      description:
        "We develop a personalized strategy to meet your specific business objectives.",
    },
    {
      title: "Execution",
      description:
        "Our team implements the strategies with attention to detail and efficiency.",
    },
    {
      title: "Review & Support",
      description:
        "We monitor progress and provide ongoing support to ensure continued success.",
    },
  ];

  const [visibleCount, setVisibleCount] = useState(0);
  const controls = useAnimation();
  const mobileLineRef = useRef(null);

  useEffect(() => {
    if (visibleCount > 0 && mobileLineRef.current) {
      controls.start({
        height: `${(visibleCount / (steps.length - 1)) * 100}%`,
        transition: { duration: 0.5 },
      });
    }
  }, [visibleCount, controls]);

  return (
    <section className="bg-gray-100 py-16 ">
      <div className="max-w-5xl mx-auto text-center">
        <div className="max-w-sm md:max-w-5xl mx-auto text-center mb-12 md:mb-16">
          <h3 className="text-gray-600 mb-2">Our Process</h3>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
            4 Easy Steps To Achieve Your Goals
          </h2>
          <p className="text-gray-500 mb-16 max-w-2xl mx-auto">
            Our consulting process is structured to ensure comprehensive
            analysis, strategic planning, and effective implementation for
            lasting results.
          </p>
        </div>

        <div className="relative">
          {/* Desktop: yatay çizgi */}
          <div className="hidden md:flex absolute top-1/2 left-0 right-0 transform -translate-y-1/2 z-0">
            <div className="flex-1 flex items-center px-10">
              {[...Array(steps.length - 1)].map((_, i) => (
                <div
                  key={i}
                  className="flex-1 h-1 bg-gray-300 relative mx-4 overflow-hidden rounded-full"
                >
                  <div className="absolute h-full w-full bg-gradient-to-r from-blue-600 to-cyan-400" />
                </div>
              ))}
            </div>
          </div>
          <div className="md:hidden absolute left-1/2 top-0 bottom-0 transform -translate-x-1/2 z-0 w-2">
            <div className="h-full bg-gray-200 mx-auto w-[2px] relative overflow-hidden">
              <motion.div
                ref={mobileLineRef}
                initial={{ height: 0 }}
                animate={controls}
                className="absolute top-0 w-full bg-gradient-to-b from-[#006FDC] to-[#11B4EC]"
              />
            </div>
          </div>
          <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6 z-10 ">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true, amount: 0.5 }}
                onViewportEnter={() =>
                  setVisibleCount((prev) => Math.max(prev, index))
                }
              >
                <div className="flex flex-col items-center">
                  <div className="w-16 h-10 mb-4 flex items-center justify-center rounded-md bg-gradient-to-r from-blue-600 to-cyan-400 text-white shadow-md text-lg font-semibold">
                    {index + 1}
                  </div>
                  <div
                    className="bg-white px-6 py-14 rounded-xl shadow-md text-center max-w-xs mx-auto"
                    style={{ height: 220 }}
                  >
                    <h4 className="text-xl font-semibold text-gray-800 mb-2">
                      {step.title}
                    </h4>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
