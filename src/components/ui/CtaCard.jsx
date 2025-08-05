import React, { useEffect, useRef } from "react";
import ivan from "@/assets/ivan.png";
import icon1 from "@/assets/LeftPanel/icon1.png";
import icon2 from "@/assets/LeftPanel/icon2.png";
import icon3 from "@/assets/LeftPanel/icon3.png";
import icon4 from "@/assets/LeftPanel/icon4.png";
import { Check } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WhyChooseUs = () => {
  const sectionRef = useRef(null);
  const leftCardRef = useRef(null);
  const rightCardRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Soldaki kart animasyonu: yukarıdan aşağıya ve opacity
      gsap.from(leftCardRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%", // Bölüm görünmeye başlayınca
          toggleActions: "play none none none",
        },
        y: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      // Sağdaki kart animasyonu: sağdan sola ve opacity
      gsap.from(rightCardRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        x: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.3,
      });
    }, sectionRef);

    return () => ctx.revert(); // cleanup
  }, []);

  return (
    <section
      ref={sectionRef}
      className="m max-w- mx-auto font-[Manrope] min-h-[550px] bg-gradient-to-r from-sky-500 to-blue-600 px-4 flex items-center"
    >
      <div className="max-w-full mx-auto grid grid-cols-1 lg:grid-cols-2 pt-4 md:pt-0 gap-8 justify-center items-center ">
        {/* Left Card */}
        <div
          ref={leftCardRef}
          className="rounded-xl border-4 h-[500px] w-auto 3xl:min-w-[900px] border-gray-400 bg-gray-50 flex flex-col items-center justify-center p-8 text-center lg:rounded-r-none"
        >
          <p className="text-gray-700 font-medium text-md text-center mb-2">
            Финансовые консалтинг и услуги международных переводов для B2B
          </p>
          <div className="w-[220px] h-[220px] rounded-full overflow-hidden ">
            <img
              src={ivan}
              alt="Profile"
              className="w-full h-full object-cover  object-center"
            />
          </div>

          <h3 className="text-xl font-semibold">Ivan Marochkin</h3>
          <p className="text-sm text-gray-500 mb-2">CEO</p>

          <div className="flex justify-center gap-3 ">
            <img src={icon1} alt="X" className="w-4 h-4" />
            <img src={icon2} alt="LinkedIn" className="w-4 h-4" />
            <img src={icon3} alt="Facebook" className="w-4 h-4" />
            <img src={icon4} alt="Instagram" className="w-4 h-4" />
          </div>

          <a
            href="https://t.me/bankbooker"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-16 text-blue-600 text-sm flex items-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M9.47 14.81l-.39 4.23c.56 0 .8-.24 1.09-.52l2.62-2.46 5.45 3.98c1 .55 1.72.26 1.97-.92l3.58-16.74h.01c.32-1.49-.54-2.08-1.5-1.76L1.44 9.67c-1.47.54-1.46 1.32-.25 1.67l4.62 1.44 10.73-6.77c.51-.31.98-.14.6.2L9.47 14.81z" />
            </svg>
            t.me/bankbooker
          </a>
        </div>

        {/* Right Card */}
        <div
          ref={rightCardRef}
          className="text-white p-8 flex flex-col justify-between lg:rounded-l-none rounded-xl lg:text-start"
        >
          <div>
            <p className="text-white text-sm font-light mb-2">
              Почему выбирают нас
            </p>
            <h2 className="text-2xl lg:text-3xl font-semibold leading-snug mb-4">
              Предоставляем сервис безопасной сделки и хеджируем все риски
            </h2>
            <p className="text-white/80 text-sm mb-6 max-w-lg">
              Обесчиваем юридическую чистоту проводимых операций Производим
              предварительную оценку рисков всего контура сделки и
              предварительный скоринг всех документов по операциям.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm mb-6">
            <p className="flex">
              <Check /> юридическое сопровождение всего контура сделки
            </p>
            <p className="flex">
              <Check /> предварительная проверка комплаенс банка в РФ и
              Зарубежом
            </p>
            <p className="flex">
              <Check /> сервис эскроул агента
            </p>
            <p className="flex">
              <Check /> международный факторинг
            </p>
            <p className="flex">
              <Check /> отсутствие скрытых комиссий
            </p>
            <p className="flex">
              <Check /> оперативное рассмотрение заявки
            </p>
            <p className="flex">
              <Check /> отсутствие блокировок
            </p>
            <p className="flex">
              <Check /> оплата день в день
            </p>
          </div>

          <div className="flex lg:block justify-center lg:items-start ">
            <button className="bg-white text-black font-medium px-5 py-2 rounded-md w-fit">
              Contact With Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
