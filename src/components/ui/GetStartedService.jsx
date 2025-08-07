import React, { useState, useEffect } from "react";
import { ToastContainer, toast, Slide } from "react-toastify";
import InputMask from "react-input-mask";
import { ChevronDown } from "lucide-react";
import "react-toastify/dist/ReactToastify.css";

const GetStartedService = () => {
  const [contactMethod, setContactMethod] = useState("WhatsApp");
  const [email, setEmail] = useState("");
  const [telegram, setTelegram] = useState("");
  const [maskedTelegram, setMaskedTelegram] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [useMask, setUseMask] = useState(false);
  const [error, setError] = useState("");
  const [selectFocused, setSelectFocused] = useState(false);

  const [step, setStep] = useState(0);
  const [question1, setQuestion1] = useState("");
  const [question2, setQuestion2] = useState("");
  const [question3, setQuestion3] = useState("");
  const [formCompleted, setFormCompleted] = useState(false);

  useEffect(() => {
    if (contactMethod === "Telegram") {
      toast.info(
        "⚠️ Обратите внимание: ваш Telegram должен быть доступен для сообщений. Укажите корректный номер или никнейм, иначе мы не сможем отправить вам сообщение.",
        {
          autoClose: 7000,
          position: "bottom-center",
          theme: "light",
          transition: Slide,
          style: {
            width: "400px",
            height: "120px",
            background: "#E6F0FF",
            color: "#000000",
            borderLeft: "6px solid #0273DE",
            fontSize: "14px",
            borderRadius: "10px",
          },
        }
      );
    }
  }, [contactMethod]);

  // Add useEffect to reset focus when value changes
  useEffect(() => {
    setSelectFocused(false);
  }, [contactMethod]);

  // Add useEffect to handle clicks outside
  useEffect(() => {
    const handleClickOutside = () => {
      setSelectFocused(false);
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const handleTelegramChange = (e) => {
    const value = e.target.value;

    if (value.length === 1) {
      if (/^[0-9]$/.test(value)) {
        setUseMask(true);
        setMaskedTelegram(value);
        setTelegram("");
      } else {
        setUseMask(false);
        if (value !== "@") {
          setTelegram("@" + value);
        } else {
          setTelegram(value);
        }
        setMaskedTelegram("");
      }
    } else {
      if (useMask) {
        setMaskedTelegram(value);
      } else {
        if (!value.startsWith("@")) {
          setTelegram("@" + value);
        } else {
          setTelegram(value);
        }
      }
    }
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();

    if (contactMethod === "Email" && !email) {
      setError("Введите корректный Email.");
      return;
    }

    if (contactMethod === "Telegram") {
      if (useMask && maskedTelegram.includes("_")) {
        setError("Введите корректный номер.");
        return;
      }
      if (!telegram && !maskedTelegram) {
        setError("Введите Telegram username или номер.");
        return;
      }
    }

    if (contactMethod === "WhatsApp") {
      if (!whatsapp || whatsapp.includes("_")) {
        setError("Введите корректный номер WhatsApp.");
        return;
      }
    }

    setError("");
    setStep(1); // Başла sorulara
  };

  const handleFinalSubmit = () => {
    setFormCompleted(true);
    console.log("Ответы:", {
      contactMethod,
      value:
        contactMethod === "Email"
          ? email
          : contactMethod === "WhatsApp"
          ? whatsapp
          : useMask
          ? maskedTelegram
          : telegram,
      question1,
      question2,
      question3,
    });
  };

  // Progress bar steps
  const stepsArr = [
    "Контакт",
    "Партнерство",
    "Объем заявок",
    "Юр. форма",
    "Готово",
  ];
  const getProgress = () => {
    if (formCompleted) return 4;
    if (step === 0) return 0;
    if (step === 1) return 1;
    if (step === 2) return 2;
    if (step === 3) return 3;
    return 0;
  };

  return (
    <div className="flex flex-col gap-10 py-24 items-center justify-center bg-gray-100 p-6">
      <ToastContainer />
      <h1 className="font-bold text-3xl text-center">
        Оставьте заявку — поможем провести валютный платеж
      </h1>
      {/* Progress Bar */}
      <div className="w-full max-w-sm lg:max-w-[90%] 2xl:max-w-7xl mb-6">
        <div className="flex items-center justify-between mb-2">
          {stepsArr.map((label, idx) => (
            <div key={label} className="flex-1 flex flex-col items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border-2 ${
                  getProgress() >= idx
                    ? "bg-blue-500 border-blue-500 text-white"
                    : "bg-gray-200 border-gray-300 text-gray-500"
                }`}
              >
                {idx + 1}
              </div>
              <span className="text-[9px] md:text-xs mt-1 text-center whitespace-nowrap">
                {label}
              </span>
            </div>
          ))}
        </div>
        <div className="w-full h-2 bg-gray-200 rounded-full relative">
          <div
            className="h-2 bg-blue-500 rounded-full transition-all duration-300"
            style={{
              width: `${(getProgress() / (stepsArr.length - 1)) * 100}%`,
            }}
          ></div>
        </div>
      </div>

      <div className="rounded-3xl bg-white flex flex-col md:flex-row justify-between items-center shadow-lg p-6 w-full max-w-sm lg:max-w-[90%] 2xl:max-w-7xl">
        <div className="flex flex-col items-center justify-center md:w-1/2 pr-0 md:pr-8 w-full">
          <h2 className="text-left pb-4 text-xl font-semibold">
            Начните сотрудничество с нами
          </h2>

          <form className="flex flex-col items-center w-full max-w-sm space-y-4">
            {step === 0 && (
              <>
                <div className="w-full">
                  <label className="block mb-1 text-sm font-medium text-gray-700">
                    Как связаться?
                  </label>
                  <div
                    className="relative"
                    tabIndex={-1}
                    onFocus={() => setSelectFocused(true)}
                    onBlur={() => setSelectFocused(false)}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <select
                      value={contactMethod}
                      onChange={(e) => {
                        setContactMethod(e.target.value);
                        setError("");
                        setTelegram("");
                        setMaskedTelegram("");
                        setUseMask(false);
                        setWhatsapp("");
                        setEmail("");
                      }}
                      className="w-full appearance-none border bg-gray-100 rounded-md p-3 pr-10 text-sm"
                      onFocus={() => setSelectFocused(true)}
                    >
                      <option>WhatsApp</option>
                      <option>Telegram</option>
                      <option>Email</option>
                    </select>
                    <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
                      <ChevronDown
                        size={22}
                        className={`transition-transform duration-300 ${
                          selectFocused
                            ? "rotate-180 text-blue-600"
                            : "text-gray-400"
                        }`}
                      />
                    </span>
                  </div>
                </div>

                {contactMethod === "Email" && (
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-3 bg-gray-100 border rounded-lg text-sm"
                  />
                )}

                {contactMethod === "Telegram" && (
                  <>
                    {useMask ? (
                      <InputMask
                        mask="+7 (999) 999-99-99"
                        value={maskedTelegram}
                        onChange={handleTelegramChange}
                      >
                        {(inputProps) => (
                          <input
                            {...inputProps}
                            type="text"
                            placeholder="Номер телефона"
                            className="w-full p-3 bg-gray-100 border rounded-lg text-sm"
                          />
                        )}
                      </InputMask>
                    ) : (
                      <input
                        type="text"
                        placeholder="@username или номер"
                        value={telegram}
                        onChange={handleTelegramChange}
                        className="w-full p-3 bg-gray-100 border rounded-lg text-sm"
                      />
                    )}
                  </>
                )}

                {contactMethod === "WhatsApp" && (
                  <InputMask
                    mask="+7 (999) 999-99-99"
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                  >
                    {(inputProps) => (
                      <input
                        {...inputProps}
                        type="text"
                        placeholder="Номер WhatsApp"
                        className="w-full p-3 bg-gray-100 border rounded-lg text-sm"
                      />
                    )}
                  </InputMask>
                )}

                {error && (
                  <div className="text-red-500 text-sm text-left w-full">
                    {error}
                  </div>
                )}

                <button
                  type="button"
                  onClick={handleContactSubmit}
                  className="bg-gradient-to-l w-full text-center from-[#0273DE] to-[#10B0EB] text-white py-3 rounded-md hover:scale-105 transition duration-300 font-medium text-sm"
                >
                  Продолжить
                </button>
              </>
            )}

            {step >= 1 && (
              <div className="w-full">
                <label className="block mb-1 text-sm font-medium">
                  Хотите стать партнером нашего сервиса?
                </label>
                <select
                  value={question1}
                  onChange={(e) => {
                    setQuestion1(e.target.value);
                    setStep(2);
                  }}
                  className="w-full bg-gray-100 border rounded-md p-2"
                >
                  <option value="">Выберите</option>
                  <option>Да</option>
                  <option>Нет</option>
                </select>
              </div>
            )}

            {step >= 2 && (
              <div className="w-full">
                <label className="block mb-1 text-sm font-medium">
                  Какой ориентировочный объем заявок клиентов проходит через вас
                  ежемесячно?
                </label>
                <select
                  value={question2}
                  onChange={(e) => {
                    setQuestion2(e.target.value);
                    setStep(3);
                  }}
                  className="w-full bg-gray-100 border rounded-md p-2"
                >
                  <option value="">Выберите</option>
                  <option>Более 1 млн $ в месяц</option>
                  <option>До 300.000 $ в месяц</option>
                  <option>До 100.000 $ в месяц</option>
                  <option>До 50.000 $ в месяц</option>
                </select>
              </div>
            )}

            {step >= 3 && (
              <div className="w-full">
                <label className="block mb-1 text-sm font-medium">
                  Какую юридическую форму вы предпочитаете для сотрудничества?
                </label>
                <select
                  value={question3}
                  onChange={(e) => {
                    setQuestion3(e.target.value);
                    handleFinalSubmit();
                  }}
                  className="w-full bg-gray-100 border rounded-md p-2"
                >
                  <option value="">Выберите</option>
                  <option>Работаю как ИП</option>
                  <option>Работаю как ООО на ОСНО</option>
                </select>
              </div>
            )}

            {formCompleted && (
              <div className="mt-6 w-full text-center space-y-4">
                <div className="text-green-600 font-medium text-sm">
                  Спасибо! Мы свяжемся с вами в ближайшее время.{" "}
                </div>
                <button
                  type="submit"
                  className="bg-gradient-to-l w-full from-[#0273DE] to-[#10B0EB] text-white py-3 rounded-md font-medium text-sm"
                >
                  Бесплатная консультация
                </button>
              </div>
            )}
          </form>
        </div>

        <div className="w-full md:w-1/2 mt-6 md:mt-0 flex justify-center">
          <div className="bg-gradient-to-r from-[#006FDC] to-[#11B4EC] rounded-md flex items-center justify-center h-[300px] w-[350px] md:w-[500px]">
            <img
              src="/world.png"
              alt="world"
              className="w-full max-w-[280px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStartedService;
