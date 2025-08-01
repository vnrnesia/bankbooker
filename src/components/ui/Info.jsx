import { useState } from "react";
import handshake from "@/assets/handshake.png";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import ToGetStarted from "./ToGetStarted";
const AccordionItem = ({ title, content, isOpen, onToggle }) => {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <button
        onClick={onToggle}
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

const Info = ({ onGetStartedClick }) => {
  const [isVisionOpen, setVisionOpen] = useState(true);
  const [isMissionOpen, setMissionOpen] = useState(false);

  const handleVisionToggle = () => {
    if (isVisionOpen) {
      setVisionOpen(false);
      setMissionOpen(true); // Vision kapanırsa Mission açılsın
    } else {
      setVisionOpen(true);
      setMissionOpen(false); // Vision açılırsa Mission kapanabilir
    }
  };

  const handleMissionToggle = () => {
    if (isMissionOpen) {
      setMissionOpen(false);
      setVisionOpen(true); // Mission kapanırsa Vision açılsın
    } else {
      setMissionOpen(true);
      setVisionOpen(false); // Mission açılırsa Vision kapanabilir
    }
  };

  return (
    <section className="max-w-7xl mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-10 font-[Manrope]">
      {/* Left Side */}
      <div>
        <h4 className="text-gray-600 text-md font-medium mb-2">
          About Bankbooker
        </h4>
        <h2 className="text-3xl pb-10 md:pb-0 lg:text-4xl font-semibold text-neutral-900 md:mb-20 leading-tight">
          Международные переводы в любую точку мира
        </h2>
        <p className="text-gray-500 mb-6 max-w-2xl pb-10">
          Мы международный плательный агент, осуществляющий платежи по вашему
          поручению в любую страну.
        </p>

        <div className=" grid grid-cols-3 divide-x divide-gray-200 text-center">
          <div>
            <p className="text-2xl md:text-4xl font-semibold text-neutral-900">
              38+
            </p>
            <p className="text-md text-gray-500 mt-1">
              Стран в которые мы осуществляем переводы
            </p>
          </div>
          <div className="px-4">
            <p className="text-2xl md:text-4xl font-semibold text-neutral-900">
              95%
            </p>
            <p className="text-md text-gray-500 mt-1">
              Платежей проходят День в день
            </p>
          </div>
          <div>
            <p className="text-2xl md:text-4xl font-semibold text-neutral-900">
              500+
            </p>
            <p className="text-md text-gray-500 mt-1">
              Довольных клиентов сервиса Регулярно проводят свои платежи через
              нас
            </p>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="space-y-6">
        {/* Background image card */}
        <div>
          <div className="bg-gradient-to-r from-[#006FDC] rounded-lg flex items-center justify-center p-10 to-[#11B4EC] h-[200px]">
            <img src="/world.png" alt="" className="w-[280px] " />
          </div>
        </div>

        {/* Accordion Sections */}
        <AccordionItem
          title="Vision"
          content="Our vision is empowering organizations and individuals to achieve sustainable growth, financial stability, and operational excellence."
          isOpen={isVisionOpen}
          onToggle={handleVisionToggle}
        />
        <AccordionItem
          title="Mission"
          content="Our mission is to provide innovative and tailored financial solutions that empower businesses to thrive in competitive markets."
          isOpen={isMissionOpen}
          onToggle={handleMissionToggle}
        />
      </div>
    </section>
  );
};

export default Info;
