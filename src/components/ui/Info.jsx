import { useState } from "react";
import handshake from "@/assets/handshake.png";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const AccordionItem = ({ title, content, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="bg-white rounded-xl shadow p-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full text-left focus:outline-none"
      >
        <h4 className="text-lg font-semibold">{title}</h4>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="w-5 h-5 text-gray-500" />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { height: "auto", opacity: 1 },
              collapsed: { height: 0, opacity: 0 },
            }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-sm text-gray-600 mt-3">{content}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Info = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-2 gap-10 font-[Manrope]">
      {/* Left Side */}
      <div>
        <h4 className="text-gray-600 text-md font-medium mb-2">About Bankbooker</h4>
        <h2 className="text-3xl lg:text-4xl font-semibold text-neutral-900 mb-4 leading-tight">
          Innovative Financial Solutions
          <br />
          Changing Business Landscape
        </h2>
        <p className="text-gray-500 mb-6 max-w-2xl py-10">
          Transform your business with Bankbooker specialized financial
          solutions crafted to propel your journey to success. Our deep industry
          knowledge and strategic approach ensure we guide organizations through
          complexities, enabling them to achieve impactful growth and enduring
          outcomes.
        </p>

        <button className="bg-gradient-to-b from-[#0FA9E9] to-[#0786E2] hover:bg-blue-700 text-white font-medium px-9 py-3 rounded-lg">
          Discover More
        </button>

        {/* Stats */}
        <div className=" mt-10 grid grid-cols-3 divide-x divide-gray-200 text-center">
          <div>
            <p className="text-2xl md:text-4xl font-semibold text-neutral-900">24+</p>
            <p className="text-md text-gray-500 mt-1">Years of collective experience</p>
          </div>
          <div className="px-4">
            <p className="text-2xl md:text-4xl font-semibold text-neutral-900">95%</p>
            <p className="text-md text-gray-500 mt-1">Remarkable client satisfaction rate</p>
          </div>
          <div>
            <p className="text-2xl md:text-4xl font-semibold text-neutral-900">500+</p>
            <p className="text-md text-gray-500 mt-1">Successfully created projects</p>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="space-y-6">
        {/* Background image card */}
        <div
          className="relative rounded-xl overflow-hidden h-72 bg-cover bg-center"
          style={{
            backgroundImage: `url(${handshake})`,
          }}
        >
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6 text-white">
            <h3 className="text-lg font-semibold">Your Goals Are Our Top Priority</h3>
            <p className="text-sm">Ivan Surname – CEO Bankbooker</p>
          </div>
        </div>

        {/* Accordion Sections */}
        <AccordionItem
          title="Vision"
          content="Our vision is empowering organizations and individuals to achieve sustainable growth, financial stability, and operational excellence."
          defaultOpen={true}
        />
        <AccordionItem
          title="Mission"
          content="Our mission is to provide innovative and tailored financial solutions that empower businesses to thrive in competitive markets."
        />
      </div>
    </section>
  );
};

export default Info;
