import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

import brand1 from "@/assets/Comment/brand1.png";
import brand2 from "@/assets/Comment/brand2.png";
import brand3 from "@/assets/Comment/brand3.png";
import brand4 from "@/assets/Comment/brand4.png";
import brand5 from "@/assets/Comment/brand5.png";
import brand6 from "@/assets/Comment/brand6.png";

import avatar1 from "@/assets/Avatar/avatar1.png";
import avatar2 from "@/assets/Avatar/avatar2.png";
import avatar3 from "@/assets/Avatar/avatar3.png";

import ToGetStarted from "./ToGetStarted";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    text: "С Bankbooker оплата инвойсов стала намного проще и безопаснее. Теперь мы экономим время и уверены в каждой сделке.",
    name: "Марина Волкова",
    position: "финансовый директор, ООО «ВестаТех»",
    image: avatar1,
  },
  {
    text: "Возврат валютной выручки через Bankbooker — удобный и выгодный сервис. Рекомендую всем, кто ценит надёжность и прозрачность.",
    name: "Алексей Морозов",
    position: "руководитель закупок, ЗАО «ГринФилд»",
    image: avatar2,
  },
  {
    text: "They worked closely with our team and delivered solutions tailored to our specific needs. Bankbooker is definitely a trusted partner in business.",
    name: "Ольга Смирнова",
    position: " генеральный директор, ООО «ПромВектор»r",
    image: avatar3,
  },
];

const brandImages = [brand1, brand2, brand3, brand4, brand5, brand6];

const Comments = ({ onGetStartedClick }) => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const testimonialRef = useRef(null);
  const brandsRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        testimonialRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: testimonialRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      const logos = brandsRef.current.querySelectorAll("img");
      gsap.fromTo(
        logos,
        { opacity: 0, x: 0 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: brandsRef.current,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );
    }, [testimonialRef, brandsRef]);

    return () => ctx.revert();
  }, []);

  const nextTestimonial = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const variants = {
    enter: (dir) => ({
      opacity: 0,
      x: dir > 0 ? 60 : -60,
      y: dir > 0 ? -60 : 60,
    }),
    center: { opacity: 1, x: 0, y: 0 },
    exit: (dir) => ({
      opacity: 0,
      x: dir > 0 ? -60 : 60,
      y: dir > 0 ? 60 : -60,
    }),
  };

  return (
    <section className="font-[Manrope] bg-white py-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between">
        {/* Left Content */}
        <div className="max-w-lg">
          <h4 className="text-gray-500 text-lg mb-2">Отзывы клиентов</h4>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6 leading-tight">
            Опыт клиентов, который <br /> говорит сам за себя
          </h2>
          <button onClick={onGetStartedClick}>
            <ToGetStarted text="Свяжитесь с нами" />
          </button>
        </div>

        {/* Testimonial Card */}
        <div
          ref={testimonialRef}
          className="relative bg-gray-100 rounded-2xl w-full md:w-1/2 mt-10 md:mt-0 min-h-[280px] overflow-hidden"
        >
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={index}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.6 }}
              className="absolute top-0 left-0 right-0 bottom-0 p-8 h-[500px]"
            >
              <p className="text-gray-800 text-lg mb-6 italic">
                "{testimonials[index].text}"
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonials[index].image}
                  alt={testimonials[index].name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-900">
                    {testimonials[index].name}
                  </p>
                  <p className="text-gray-500 text-sm">
                    {testimonials[index].position}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="absolute bottom-4 right-4 flex gap-2">
            <button
              onClick={nextTestimonial}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow hover:bg-gray-100 transition"
              title="Next"
            >
              <svg
                className="w-5 h-5 text-gray-700"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  d="M5 12h14M12 5l7 7-7 7"
                  transform="rotate(-45 12 12)"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          <div className="absolute bottom-4 right-[60px] flex gap-2">
            <button
              onClick={prevTestimonial}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow hover:bg-gray-100 transition"
              title="Previous"
            >
              <svg
                className="w-5 h-5 text-gray-700"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  d="M19 12H5M12 19l-7-7 7-7"
                  transform="rotate(320 12 12)"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full border-t border-gray-300 mt-14" />

      {/* Brand Logos */}
      <div
        ref={brandsRef}
        className="mt-6 hidden md:flex justify-center items-center gap-4 md:gap-16 px-4"
      >
        {brandImages.map((brand, i) => (
          <img
            key={i}
            src={brand}
            alt={`Brand ${i + 1}`}
            className="h-8 md:h-[42px] gap-4 w-auto transition-transform duration-300 hover:scale-105 grayscale hover:grayscale-0"
          />
        ))}
      </div>

      {/* Mobile slider stays the same */}
      <div className="overflow-hidden md:hidden mt-6">
        <div className="comments-brand-slider flex gap-4">
          {[...brandImages, ...brandImages].map((brand, i) => (
            <img
              key={i}
              src={brand}
              alt={`Brand ${i + 1}`}
              className="h-12 mx-4 flex-shrink-0 grayscale hover:grayscale-0 transition-transform duration-300 hover:scale-105"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Comments;
