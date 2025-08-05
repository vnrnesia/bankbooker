import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const icons = [
  { src: "/assets/brands/brand1.png", width: "w-[80%] md:w-[60%]" },
  { src: "/assets/brands/brand2.png", width: "w-[70%] md:w-[50%]" },
  { src: "/assets/brands/brand3.png", width: "w-[90%] md:w-[60%]" },
  { src: "/assets/brands/brand4.png", width: "w-[85%] md:w-[60%]" },
  { src: "/assets/brands/brand5.png", width: "w-[75%] md:w-[35%]" },
  { src: "/assets/brands/brand6.png", width: "w-[95%] md:w-[50%]" },
  { src: "/assets/brands/brand7.png", width: "w-[80%] md:w-[50%]" },
  { src: "/assets/brands/brand8.png", width: "w-[100%] md:w-[50%]" },
  { src: "/assets/brands/brand9.png", width: "w-[90%] md:w-[65%]" },
  { src: "/assets/brands/brand10.png", width: "w-[85%] md:w-[60%]" },
];

const Brands = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const leftHeader = containerRef.current.querySelector(".left-header");
    const rightHeader = containerRef.current.querySelector(".right-header");
    const brandItems = containerRef.current.querySelectorAll(".brand-item");

    // Başlangıç pozisyonları:
    gsap.set(leftHeader, { opacity: 0, x: -100 });
    gsap.set(rightHeader, { opacity: 0, x: 100 });
    gsap.set(brandItems, { opacity: 0, y: 40 });

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    timeline
      .to(leftHeader, {
        opacity: 1,
        x: 0,
        duration: 0.6,
        ease: "power3.out",
      })
      .to(
        rightHeader,
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          ease: "power3.out",
        },
        "-=0.4" // Sağ başlık biraz overlap ile başlasın
      )
      .to(brandItems, {
        opacity: 1,
        y: 0,
        duration: 0.01,
        ease: "power3.out",
        stagger: 0.1,
      });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="mx-auto mb-36 px-4">
      <div className="flex flex-col md:flex-row justify-between items-center mb-12">
        {/* Sol başlık */}
        <div className="left-header">
          <h2 className="text-base font text-gray-500">Наши Партнёры</h2>
          <h3 className="text-4xl font-bold text-gray-900 mt-2">
            Нам доверяют более +550 <br /> компаний по всему миру
          </h3>
        </div>

        {/* Sağ paragraf */}
        <p className="right-header text-gray-500 text-sm md:text-base mt-4 md:mt-0 max-w-md text-right md:text-left md:max-w-xs">
          Вот некоторые из компаний, которым Bankbooker помог уверенно двигаться
          вперёд.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        {icons.map((icon, index) => (
          <div
            key={index}
            className="brand-item group bg-white border border-gray-200 rounded-xl p-4 flex items-center justify-center h-20 shadow-sm hover:shadow-md transition"
          >
            <img
              src={icon.src}
              alt={`Company logo ${index + 1}`}
              className={`object-contain group-hover:grayscale-0 group-hover:scale-105 transition duration-300 ease-in-out ${icon.width}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands;
