import telegram from "@/assets/telegram.png";

export default function FixedIcons() {
  return (
    <a
      href="https://t.me/bankbooker"
      target="_blank"
      rel="noopener noreferrer"
      className="hidden w-10 fixed right-5 bottom-[440px] md:flex flex-col items-center space-y-[-10px] z-50 transition-transform duration-500 transform hover:scale-125"
    >
      <img src={telegram} alt="telegram logo" />
    </a>
  );
}
