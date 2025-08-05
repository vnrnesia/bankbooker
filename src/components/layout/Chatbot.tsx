"use client";

import { ChevronDown, MessageSquareMore, DoorOpen } from "lucide-react";
import React, {
  useState,
  ReactNode,
  FormEvent,
  useEffect,
  useRef,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import InputMask from "react-input-mask";

type ChatMessage = {
  id: number;
  from: "bot" | "user" | "loading";
  text: ReactNode;
};

const bounceAnimation = `
@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
}`;

const LoadingDots = () => (
  <>
    <style>{bounceAnimation}</style>
    <span style={{ display: "inline-flex", gap: 4 }}>
      <span style={{ animation: "bounce 1.2s infinite", animationDelay: "0s" }}>
        .
      </span>
      <span
        style={{ animation: "bounce 1.2s infinite", animationDelay: "0.15s" }}
      >
        .
      </span>
      <span
        style={{ animation: "bounce 1.2s infinite", animationDelay: "0.3s" }}
      >
        .
      </span>
    </span>
  </>
);

const OPTIONS_MAIN = [
  "Оплатить инвойс",
  "Вернуть валютную выручку",
  "Бесплатная консультация",
] as const;

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputEmail, setInputEmail] = useState("");
  const [inputPhone, setInputPhone] = useState("");
  const [showEmailInput, setShowEmailInput] = useState(false);
  const [showPhoneInput, setShowPhoneInput] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [loading, setLoading] = useState(false);
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [phoneSubmitted, setPhoneSubmitted] = useState(false);
  const [autoOpened, setAutoOpened] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, showEmailInput, showPhoneInput, showOptions]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
      setAutoOpened(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!open || messages.length > 0) return;
    addBotMessageWithLoading("Здравствуйте! Какие услуги вас интересуют?");
  }, [open]);

  useEffect(() => {
    const last = messages[messages.length - 1];
    if (last?.from === "bot" && audioRef.current) {
      audioRef.current.volume = 0.5;
      audioRef.current.play().catch(() => {});
    }
    if (
      last?.from === "bot" &&
      !showEmailInput &&
      !emailSubmitted &&
      messages.length === 1
    ) {
      setShowOptions(true);
    }
  }, [messages]);

  useEffect(() => {
    if (autoOpened && audioRef.current) {
      audioRef.current.volume = 0.5;
      audioRef.current.play().catch(() => {});
      setAutoOpened(false);
    }
  }, [autoOpened]);

  const addUserMessage = (text: string) => {
    setMessages((msgs) => [
      ...msgs,
      { id: msgs.length + 1, from: "user", text },
    ]);
  };

  const addBotMessageWithLoading = (text: ReactNode) => {
    setLoading(true);
    setMessages((msgs) => [
      ...msgs,
      { id: msgs.length + 1, from: "loading", text: <LoadingDots /> },
    ]);
    setTimeout(() => {
      setMessages((msgs) => {
        const cleaned = msgs.filter((m) => m.from !== "loading");
        return [...cleaned, { id: cleaned.length + 1, from: "bot", text }];
      });
      setLoading(false);
    }, 2000);
  };

  const handleOptionClick = (option: string) => {
    if (loading) return;
    addUserMessage(option);
    setShowOptions(false);
    setShowEmailInput(false);
    setShowPhoneInput(false);
    const isEmailFollowup = OPTIONS_MAIN.includes(option);
    if (isEmailFollowup) {
      addBotMessageWithLoading(
        <>
          Отличный выбор! <br /> Пожалуйста, укажите ваш{" "}
          <b>электронный адрес</b>, чтобы мы могли связаться с вами.
        </>
      );
      setTimeout(() => setShowEmailInput(true), 2100);
    }
  };

  const handleEmailSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!inputEmail.trim() || loading) return;
    addUserMessage(inputEmail);
    setShowEmailInput(false);
    setEmailSubmitted(true);
    addBotMessageWithLoading(
      <>
        Спасибо! <br /> Теперь, пожалуйста, укажите ваш <b>номер телефона</b> в
        формате +7 (XXX) XXX-XX-XX.
      </>
    );
    setTimeout(() => setShowPhoneInput(true), 2100);
    setInputEmail("");
  };

  const handlePhoneSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!inputPhone.trim() || loading || inputPhone.includes("_")) return;
    addUserMessage(inputPhone);
    setShowPhoneInput(false);
    setPhoneSubmitted(true);
    addBotMessageWithLoading(
      "Благодарим! Мы свяжемся с вами в ближайшее время."
    );
    setInputPhone("");
  };

  const lastBotMessage = [...messages].reverse().find((m) => m.from === "bot");
  const showLeave =
    lastBotMessage?.from === "bot" &&
    typeof lastBotMessage.text === "string" &&
    lastBotMessage.text.includes("в ближайшее время");

  return (
    <>
      <audio ref={audioRef} src="/notification.mp3" preload="auto" />
      <button
        onClick={() => setOpen((o) => !o)}
        style={{
          position: "fixed",
          bottom: isMobile ? 78 : 20,
          right: 18,
          width: 56,
          height: 56,
          borderRadius: "50%",
          backgroundColor: "#0070f3",
          color: "white",
          fontSize: 28,
          border: "none",
          boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1000,
        }}
        aria-label={open ? "Закрыть чат" : "Открыть чат"}
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.div
              key="chevron"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown />
            </motion.div>
          ) : (
            <motion.div
              key="message"
              initial={{ opacity: 0, rotate: 90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: -90 }}
              transition={{ duration: 0.3 }}
            >
              <MessageSquareMore />
            </motion.div>
          )}
        </AnimatePresence>
      </button>
      {open && (
        <div
          style={{
            position: "fixed",
            bottom: isMobile ? 150 : 100,
            right: 24,
            width: 360,
            height: 500,
            boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
            display: "flex",
            flexDirection: "column",
            zIndex: 1000,
            fontFamily: "Manrope, sans-serif",
          }}
        >
          <div
            style={{
              background: "white",
              padding: "12px 16px",
              fontWeight: 700,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8,
              boxShadow: "0 px 6px rgba(0, 0, 0, 0.15)",
            }}
          >
            <span className="text-blue-500">
              BANK<span className="text-black">BOOKER</span>
            </span>
          </div>
          <div
            style={{
              flex: 1,
              overflowY: "auto",
              padding: 16,
              background: "#f5f8fb",
            }}
          >
            {messages.map(({ id, from, text }) => (
              <React.Fragment key={id}>
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 600,
                    marginBottom: 4,
                    color: from === "user" ? "#0070f3" : "#555",
                    textAlign: from === "user" ? "right" : "left",
                    paddingRight: from === "user" ? 8 : 0,
                    paddingLeft: from === "bot" ? 8 : 0,
                  }}
                >
                  {from === "user" ? "Вы" : "Bankbooker"}
                </div>
                <div
                  style={{
                    textAlign: from === "user" ? "right" : "left",
                    marginBottom: 12,
                  }}
                >
                  <div
                    style={{
                      display: "inline-block",
                      background:
                        from === "user"
                          ? "#0070f3"
                          : from === "loading"
                          ? "#cbd3df"
                          : "#e4e9f2",
                      color: from === "user" ? "white" : "#222",
                      padding: "10px 16px",
                      borderRadius: 5,
                      fontSize: 14,
                      maxWidth: "80%",
                      wordBreak: "break-word",
                    }}
                  >
                    {text}
                  </div>
                </div>
                {showOptions && from === "bot" && id === messages[0].id && (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-end",
                      gap: 8,
                      maxWidth: "80%",
                      marginBottom: 12,
                      marginLeft: "auto",
                      userSelect: "none",
                    }}
                  >
                    <div
                      style={{
                        fontSize: 11,
                        fontWeight: 600,
                        color: "#555",
                        marginBottom: 4,
                      }}
                    >
                      Вы
                    </div>
                    {OPTIONS_MAIN.map((opt) => (
                      <button
                        key={opt}
                        onClick={() => handleOptionClick(opt)}
                        style={{
                          border: "1px solid #0070f3",
                          color: "#0070f3",
                          padding: "6px 12px",
                          borderRadius: 6,
                          background: "white",
                          cursor: "pointer",
                          textAlign: "left",
                          fontSize: 14,
                          fontWeight: 500,
                          minWidth: 160,
                        }}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                )}
              </React.Fragment>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {showEmailInput && (
            <form
              onSubmit={handleEmailSubmit}
              style={{ display: "flex", padding: 12, gap: 8, background: "#e4e9f2", }}
            >
              <input
                type="email"
                required
                value={inputEmail}
                onChange={(e) => setInputEmail(e.target.value)}
                placeholder="Ваш e-mail"
                style={{
                  flex: 1,
                  padding: 10,
                  borderRadius: 8,
                  border: "1px solid #ccc",
                  
                }}
                aria-label="Email input"
              />
              <button
                type="submit"
                style={{
                  background: "#0070f3",
                  color: "white",
                  padding: "10px 9px",
                  border: "none",
                  borderRadius: 6,
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                Отправить
              </button>
            </form>
          )}

          {showPhoneInput && (
            <form
              onSubmit={handlePhoneSubmit}
              style={{ display: "flex", padding: 12, gap: 8 }}
            >
              <InputMask
                mask="+7 (999) 999-99-99"
                value={inputPhone}
                onChange={(e) => setInputPhone(e.target.value)}
              >
                {(inputProps) => (
                  <input
                    {...inputProps}
                    type="tel"
                    required
                    placeholder="Ваш номер"
                    style={{
                      flex: 1,
                      padding: 10,
                      borderRadius: 8,
                      border: "1px solid #ccc",
                    }}
                    aria-label="Phone input"
                  />
                )}
              </InputMask>
              <button
                type="submit"
                style={{
                  background: "#0070f3",
                  color: "white",
                  padding: "10px 20px",
                  border: "none",
                  borderRadius: 6,
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                Отправить
              </button>
            </form>
          )}

          {showLeave && (
            <button
              onClick={() => setOpen(false)}
              style={{
                padding: 12,
                background: "#fff",
                borderTop: "1px solid #ddd",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 8,
                color: "#555",
                fontWeight: 600,
                cursor: "pointer",
                borderBottomLeftRadius: 8,
                borderBottomRightRadius: 8,
              }}
            >
              <DoorOpen size={18} /> Выйти из чата
            </button>
          )}
        </div>
      )}
    </>
  );
}
