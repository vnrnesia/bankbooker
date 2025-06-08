import tr from "@/assets/tr.png";

const offers = [
  {
    country: "Турция",
    course: "Инвестинг",
    duration: "3–5 Дней",
    commission: "2,5%",
  },
  {
    country: "Турция",
    course: "Инвестинг",
    duration: "3–5 Дней",
    commission: "2,5%",
  },
  {
    country: "Турция",
    course: "Инвестинг",
    duration: "3–5 Дней",
    commission: "2,5%",
  },
  {
    country: "Турция",
    course: "Инвестинг",
    duration: "3–5 Дней",
    commission: "2,5%",
  },
  {
    country: "Турция",
    course: "Инвестинг",
    duration: "3–5 Дней",
    commission: "2,5%",
  },
  {
    country: "Турция",
    course: "Инвестинг",
    duration: "3–5 Дней",
    commission: "2,5%",
  },
];

export default function OffersGrid() {
  return (
    <section className="bg-white py-12 font-[Manrope] px-6">
      <div>
        {/* Başlık ve Açıklama Grid'i */}
        {/* Başlık ve Açıklama Grid'i */}
        <div className="grid md:grid-cols-2 gap-6 mb-12 items-start justify-between">
          {/* Sol başlık kısmı */}
          <div>
            <h2 className="text-lg font-medium text-neutral-600 tracking-wide mb-1">
              Pricing
            </h2>
            <h1 className="text-4xl font-medium text-neutral-900 leading-tight">
              Лучшие Предложения
            </h1>
          </div>

          {/* Sağ açıklama kısmı — TAM SAĞA YASLI */}
          <div className="flex justify-end text-right">
            <p className="text-left text-gray-500 font-medium font-[Manrope] max-w-md text-md leading-relaxed">
              У нас есть решения для бизнеса любого масштаба —<br />
              от стартапов до крупных компаний. Найдите тариф,
              <br />
              который отвечает вашим задачам и целям.
            </p>
          </div>
        </div>

        {/* Kartlar */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {offers.map((offer, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 flex flex-col justify-between"
            >
              {/* Üst bölüm: bayrak + ülke */}
              <div className="flex items-center space-x-3 mb-6">
                <img
                  src={tr}
                  alt="TR"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <h3 className="text-xl font-medium text-gray-800">
                  {offer.country}
                </h3>
              </div>

              {/* Alt bilgiler */}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
