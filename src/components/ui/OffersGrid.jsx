import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const offers = [
  {
    country: "Китай",
    flag: "/flags/china.png",
    course: "Инвестинг",
    duration: "3–5 Дней",
    commission: "2,5%",
    offsetClass: "left-[5px] top-[1px]",
  },
  {
    country: "ОАЭ",
    flag: "/flags/uae.png",
    course: "Инвестинг",
    duration: "3–5 Дней",
    commission: "2,5%",
    offsetClass: "left-[0px] top-[0px]",
  },
  {
    country: "Турция",
    flag: "/flags/turkey.png",
    course: "Инвестинг",
    duration: "3–5 Дней",
    commission: "2,5%",
    offsetClass: "left-[-1px] top-[1px]",
  },
  {
    country: "Германия",
    flag: "/flags/germany.png",
    course: "Инвестинг",
    duration: "3–5 Дней",
    commission: "2,5%",
    offsetClass: "left-[0px] top-[1px]",
  },
  {
    country: "Индия",
    flag: "/flags/india.png",
    course: "Инвестинг",
    duration: "3–5 Дней",
    commission: "2,5%",
    offsetClass: "left-[0px] top-[0px]",
  },
  {
    country: "США",
    flag: "/flags/usa.png",
    course: "Инвестинг",
    duration: "3–5 Дней",
    commission: "2,5%",
    offsetClass: "left-[1px] top-[1px]",
  },
];

export default function OffersGrid({ onGetStartedClick }) {
  const containerRef = useRef(null);
  const leftHeaderRef = useRef(null);
  const rightHeaderRef = useRef(null);
  const leftGridRef = useRef(null);
  const rightGridRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
          markers: false, 
        },
      });

      // Başlıklar animasyonu
      tl.fromTo(
        leftHeaderRef.current,
        { opacity: 0, x: -100 },
        { opacity: 1, x: 0, duration: 0.1, ease: "power3.out" }
      )
        .fromTo(
          rightHeaderRef.current,
          { opacity: 0, x: 100 },
          { opacity: 1, x: 0, duration: 0.1, ease: "power3.out" },
          "-=0.4"
        )
        // Sol grid içindeki kartlar stagger ile soldan gelir
        .fromTo(
          gsap.utils.toArray(leftGridRef.current.children),
          { opacity: 0, x: -100 },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            ease: "power3.out",
            stagger: 0.1,
          },
          "+=0.1"
        )
        // Sağ grid içindeki kartlar stagger ile sağdan gelir
        .fromTo(
          gsap.utils.toArray(rightGridRef.current.children),
          { opacity: 0, x: 100 },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            ease: "power3.out",
            stagger: 0.1,
          },
          "-=0.5"
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const leftOffers = offers.slice(0, Math.ceil(offers.length / 2));
  const rightOffers = offers.slice(Math.ceil(offers.length / 2));

  return (
    <section
      ref={containerRef}
      className="bg-white py-12 font-[Manrope] px-4 max-w-7xl mx-auto"
    >
      <div className="grid md:grid-cols-2 gap-6 mb-12 items-start justify-between">
        {/* Sol başlık */}
        <div ref={leftHeaderRef}>
          <h2 className="text-lg font-medium text-neutral-600 tracking-wide mb-1 heading">
            Pricing
          </h2>
          <h1 className="text-4xl font-medium text-neutral-900 leading-tight heading">
            Лучшие Предложения
          </h1>
        </div>

        {/* Sağ paragraf */}
        <div ref={rightHeaderRef} className="flex justify-end text-right">
          <p className="text-left text-gray-500 font-medium max-w-md text-md leading-relaxed">
            Выбирайте среди популярных направлений и совершайте платежи через
            наш сервис по оптимальной стоимости без скрытых комиссий и переплат.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Sol grid */}
        <div ref={leftGridRef} className="flex flex-col gap-6">
          {leftOffers.map((offer, idx) => (
            <OfferCard
              key={idx}
              offer={offer}
              onGetStartedClick={onGetStartedClick}
            />
          ))}
        </div>

        {/* Sağ grid */}
        <div ref={rightGridRef} className="flex flex-col gap-6">
          {rightOffers.map((offer, idx) => (
            <OfferCard
              key={idx}
              offer={offer}
              onGetStartedClick={onGetStartedClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function OfferCard({ offer, onGetStartedClick }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 flex flex-col justify-between">
      <div className="flex items-center space-x-3 mb-6">
        <div className="relative w-10 h-10 shrink-0">
          <img
            src={offer.flag}
            alt={offer.country}
            className={`absolute w-full h-full object-cover rounded-full ${offer.offsetClass}`}
          />
        </div>
        <h3 className="text-xl font-medium text-gray-800">{offer.country}</h3>
      </div>

      <div className="flex justify-between text-sm text-gray-600 border-t pt-4">
        <div>
          <p className="text-gray-400">Курс</p>
          <p className="font-medium">{offer.course}</p>
        </div>
        <div>
          <p className="text-gray-400">Срок</p>
          <p className="font-medium">{offer.duration}</p>
        </div>
        <div>
          <p className="text-gray-400">Комиссия</p>
          <p className="font-medium">{offer.commission}</p>
        </div>
      </div>

      <div className="pt-2 min-w-full">
        <div className="pt-2 w-full">
          <div
            onClick={onGetStartedClick}
            className="flex w-full bg-gray-100 rounded-md overflow-hidden shadow-sm cursor-pointer"
          >
            <div className="flex-grow px-4 py-2 text-base bg-gray-100">
              Оставьте заявку
            </div>
            <div className="flex items-center justify-center px-4 bg-gradient-to-l from-[#0273DE] to-[#10B0EB] hover:scale-125 transition-transform duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
