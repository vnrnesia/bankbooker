import React, { useState } from "react";
import InputMask from "react-input-mask";

const currencyList = [
  { code: "AED", name: "Дирхам ОАЭ" },
  { code: "USD", name: "Доллар США" },
  { code: "EUR", name: "Евро" },
  { code: "CNY", name: "Китайский юань" },
  { code: "AUD", name: "Австралийский доллар" },
  { code: "AZN", name: "Азербайджанский манат" },
  { code: "DZD", name: "Алжирский динар" },
  { code: "AMD", name: "Армянский драм" },
  { code: "BHD", name: "Бахрейнский динар" },
  { code: "BYN", name: "Белорусский рубль" },
  { code: "BGN", name: "Болгарский лев" },
  { code: "BOB", name: "Боливиано" },
  { code: "BRL", name: "Бразильский реал" },
  { code: "HUF", name: "Венгерский форинт" },
  { code: "VND", name: "Вьетнамский донг" },
  { code: "HKD", name: "Гонконгский доллар" },
  { code: "GEL", name: "Грузинский лари" },
  { code: "DKK", name: "Датская крона" },
  { code: "EGP", name: "Египетский фунт" },
  { code: "INR", name: "Индийская рупия" },
  { code: "IDR", name: "Индонезийская рупия" },
  { code: "IRR", name: "Иранский риал" },
  { code: "KZT", name: "Казахстанский тенге" },
  { code: "CAD", name: "Канадский доллар" },
  { code: "QAR", name: "Катарский риал" },
  { code: "KGS", name: "Киргизский сом" },
  { code: "CUP", name: "Кубинский песо" },
  { code: "MMK", name: "Кьят" },
  { code: "MDL", name: "Молдавский лей" },
  { code: "NGN", name: "Найра" },
  { code: "NZD", name: "Новозеландский доллар" },
  { code: "NOK", name: "Норвежская крона" },
  { code: "OMR", name: "Оманский риал" },
  { code: "PLN", name: "Польский злотый" },
  { code: "RON", name: "Румынский лей" },
  { code: "SAR", name: "Саудовский риял" },
  { code: "RSD", name: "Сербский динар" },
  { code: "SGD", name: "Сингапурский доллар" },
  { code: "TJS", name: "Таджикский сомони" },
  { code: "THB", name: "Таиландский бат" },
  { code: "BDT", name: "Така" },
  { code: "MNT", name: "Тугрик" },
  { code: "TRY", name: "Турецкая лира" },
  { code: "TMT", name: "Туркменский манат" },
  { code: "UZS", name: "Узбекский сум" },
  { code: "GBP", name: "Фунт стерлингов" },
  { code: "CZK", name: "Чешская крона" },
  { code: "SEK", name: "Шведская крона" },
  { code: "CHF", name: "Швейцарский франк" },
  { code: "ETB", name: "Эфиопский быр" },
  { code: "ZAR", name: "Южноафриканский рэнд" },
  { code: "KRW", name: "Южнокорейская вона" },
  { code: "JPY", name: "Японская йена" },
];

const countryList = [
  "Австралия",
  "Австрия",
  "Азербайджан",
  "Аландские острова",
  "Албания",
  "Алжир",
  "Американское Самоа",
  "Ангилья",
  "Ангола",
  "Андорра",
  "Антарктида",
  "Антигуа и Барбуда",
  "Аргентина",
  "Армения",
  "Аруба",
  "Афганистан",
  "Багамские Острова",
  "Бангладеш",
  "Барбадос",
  "Бахрейн",
  "Беларусь",
  "Белиз",
  "Бельгия",
  "Бенин",
  "Бермудские Острова",
  "Болгария",
  "Боливия",
  "Босния и Герцеговина",
  "Ботсвана",
  "Бразилия",
  "Британская территория в Индийском океане",
  "Британские Виргинские острова",
  "Бруней",
  "Буркина-Фасо",
  "Бурунди",
  "Бутан",
  "Вануату",
  "Ватикан",
  "Великобритания",
  "Венгрия",
  "Венесуэла",
  "Виргинские Острова",
  "Внешние малые острова США",
  "Восточный Тимор",
  "Вьетнам",
  "Габон",
  "Гаити",
  "Гайана",
  "Гамбия",
  "Гана",
  "Гваделупа",
  "Гватемала",
  "Гвинея",
  "Гвинея-Бисау",
  "Германия",
  "Гернси",
  "Гибралтар",
  "Гондурас",
  "Гонконг",
  "Гренада",
  "Гренландия",
  "Греция",
  "Грузия",
  "Гуам",
  "Дания",
  "Демократическая Республика Конго",
  "Джерси",
  "Джибути",
  "Доминика",
  "Доминиканская Республика",
  "Египет",
  "Замбия",
  "Западная Сахара",
  "Израиль",
  "Индия",
  "Индонезия",
  "Иордания",
  "Ирландия",
  "Исландия",
  "Испания",
  "Италия",
  "Йемен",
  "Кабо-Верде",
  "Казахстан",
  "Каймановы острова",
  "Камбоджа",
  "Камерун",
  "Канада",
  "Карибские Нидерланды",
  "Катар",
  "Кения",
  "Кипр",
  "Киргизия",
  "Кирибати",
  "Китай",
  "Кокосовые острова",
  "Колумбия",
  "Коморы",
  "Коста-Рика",
  "Кот-д’Ивуар",
  "Кувейт",
  "Кюрасао",
  "Лаос",
  "Латвия",
  "Лесото",
  "Ливия",
  "Литва",
  "Лихтенштейн",
  "Люксембург",
  "Маврикий",
  "Мавритания",
  "Мадагаскар",
  "Майотта",
  "Макао",
  "Малави",
  "Малайзия",
  "Мали",
  "Мальдивы",
  "Мальта",
  "Марокко",
  "Мартиника",
  "Маршалловы Острова",
  "Мексика",
  "Мозамбик",
  "Молдавия",
  "Монако",
  "Монголия",
  "Монтсеррат",
  "Намибия",
  "Науру",
  "Непал",
  "Нигер",
  "Нигерия",
  "Нидерланды",
  "Никарагуа",
  "Ниуэ",
  "Новая Зеландия",
  "Новая Каледония",
  "Норвегия",
  "Норфолк",
  "Объединённые Арабские Эмираты",
  "Оман",
  "Остров Буве",
  "Остров Мэн",
  "Остров Рождества",
  "Остров Херд и острова Макдональд",
  "Острова Кука",
  "Острова Питкэрн",
  "Острова Святой Елены, Вознесения и Тристан-да-Кунья",
  "Пакистан",
  "Палау",
  "Палестина",
  "Панама",
  "Папуа — Новая Гвинея",
  "Парагвай",
  "Перу",
  "Польша",
  "Португалия",
  "Пуэрто-Рико",
  "Республика Конго",
  "Республика Косово",
  "Реюньон",
  "Россия",
  "Руанда",
  "Румыния",
  "Сальвадор",
  "Самоа",
  "Сан-Марино",
  "Сан-Томе и Принсипи",
  "Саудовская Аравия",
  "Свазиленд",
  "Северная Македония",
  "Северные Марианские острова",
  "Сейшельские Острова",
  "Сен-Бартелеми",
  "Сен-Мартен",
  "Сен-Пьер и Микелон",
  "Сенегал",
  "Сент-Винсент и Гренадины",
  "Сент-Китс и Невис",
  "Сент-Люсия",
  "Сербия",
  "Сингапур",
  "Синт-Мартен",
  "Словакия",
  "Словения",
  "Соединённые Штаты Америки",
  "Соломоновы Острова",
  "Сомали",
  "Суринам",
  "Сьерра-Леоне",
  "Таджикистан",
  "Таиланд",
  "Тайвань",
  "Танзания",
  "Теркс и Кайкос",
  "Того",
  "Токелау",
  "Тонга",
  "Тринидад и Тобаго",
  "Тувалу",
  "Тунис",
  "Туркмения",
  "Турция",
  "Уганда",
  "Узбекистан",
  "Уоллис и Футуна",
  "Уругвай",
  "Фарерские острова",
  "Федеративные Штаты Микронезии",
  "Фиджи",
  "Филиппины",
  "Финляндия",
  "Фолклендские острова",
  "Франция",
  "Французская Гвиана",
  "Французская Полинезия",
  "Французские Южные и Антарктические территории",
  "Хорватия",
  "Центральноафриканская Республика",
  "Чад",
  "Черногория",
  "Чехия",
  "Чили",
  "Швейцария",
  "Швеция",
  "Шпицберген и Ян-Майен",
  "Шри-Ланка",
  "Эквадор",
  "Экваториальная Гвинея",
  "Эритрея",
  "Эстония",
  "Эфиопия",
  "Южная Африка",
  "Южная Георгия и Южные Сандвичевы острова",
  "Южная Корея",
  "Южный Судан",
  "Ямайка",
  "Япония",
];
const calculateFeePercent = (amount) => {
  if (amount <= 30000) return 2.5;
  if (amount <= 50000) return 2.4;
  if (amount <= 70000) return 2.3;
  if (amount <= 100000) return 2.2;
  if (amount <= 200000) return 2.1;
  return 2.0;
};

const calculateServiceFee = (amount) => {
  const percent = calculateFeePercent(amount);
  return (amount * percent) / 100;
};

const Calculator = () => {
  const [currency, setCurrency] = useState("USD");
  const [country, setCountry] = useState("Россия");
  const [searchCurrency, setSearchCurrency] = useState("");
  const [searchCountry, setSearchCountry] = useState("");
  const [phone, setPhone] = useState("");
  const [amount, setAmount] = useState("100000");
  const [error, setError] = useState("");
  const [openDropdown, setOpenDropdown] = useState("");

  const handleSliderChange = (e) => setAmount(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const rawPhone = phone.replace(/\D/g, "");
    if (!rawPhone.startsWith("7") || rawPhone.length !== 11) {
      setError("Номер телефона должен состоять из 11 цифр и начинаться с 7.");
      return;
    }
    setError("");
    console.log("Отправка данных. Телефон:", phone);
  };

  const filteredCurrencies = currencyList.filter(
    (c) =>
      c.code.toLowerCase().includes(searchCurrency.toLowerCase()) ||
      c.name.toLowerCase().includes(searchCurrency.toLowerCase())
  );

  const filteredCountries = countryList.filter((c) =>
    c.toLowerCase().includes(searchCountry.toLowerCase())
  );

  // Расчет итогов
  const amt = parseFloat(amount) || 0;
  const serviceFee = calculateServiceFee(amt);
  const totalCost = amt + serviceFee;

  return (
    <div className="max-w-md md:max-w-7xl mx-auto sm:px-6 lg:px-8">
      <div className="text-center mt-10">
        <h2 className="text-base text-left md:text-center font-medium text-gray-500">
          Калькулятор
        </h2>
        <h3 className="text-3xl sm:text-4xl text-left md:text-center font-bold text-gray-900 mt-2">
          Рассчитайте стоимость перевода
        </h3>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex items-center justify-center py-10"
      >
        <div className="bg-gray-100 rounded-2xl shadow-md w-full p-6 sm:p-10 md:p-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Калькулятор перевода
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Левая часть */}
            <div className="space-y-5">
              {/* Выбор валюты */}
              <div className="relative">
                <label className="block text-gray-600 mb-1">
                  Выберите валюту
                </label>
                <div
                  className="w-full border bg-white rounded-md p-3 text-sm cursor-pointer relative"
                  onClick={() =>
                    setOpenDropdown((prev) =>
                      prev === "currency" ? "" : "currency"
                    )
                  }
                >
                  {currencyList.find((c) => c.code === currency)?.code} -{" "}
                  {currencyList.find((c) => c.code === currency)?.name}
                  <svg
                    className={`absolute right-3 top-1/2 transform -translate-y-1/2 transition-transform duration-300 ${
                      openDropdown === "currency"
                        ? "rotate-180 text-blue-500"
                        : "rotate-0 text-gray-400"
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    width={16}
                    height={16}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
                {openDropdown === "currency" && (
                  <div className="absolute mt-1 w-full bg-white border rounded-md max-h-60 overflow-y-auto shadow-lg z-10">
                    <input
                      type="text"
                      value={searchCurrency}
                      onChange={(e) => setSearchCurrency(e.target.value)}
                      placeholder="Поиск..."
                      className="w-full border-b px-3 py-2 text-sm outline-none"
                    />
                    {filteredCurrencies.map((c) => (
                      <div
                        key={c.code}
                        onClick={() => {
                          setCurrency(c.code);
                          setOpenDropdown("");
                          setSearchCurrency("");
                        }}
                        className="px-3 py-2 text-sm hover:bg-blue-500 hover:text-white cursor-pointer transition-colors"
                      >
                        {c.code} - {c.name}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Выбор страны */}
              <div className="relative">
                <label className="block text-gray-600 mb-1">
                  Рассчитайте сумму перевода
                </label>
                <div
                  className="w-full border bg-white rounded-md p-3 text-sm cursor-pointer relative"
                  onClick={() =>
                    setOpenDropdown((prev) =>
                      prev === "country" ? "" : "country"
                    )
                  }
                >
                  {country}
                  <svg
                    className={`absolute right-3 top-1/2 transform -translate-y-1/2 transition-transform duration-300 ${
                      openDropdown === "country"
                        ? "rotate-180 text-blue-500"
                        : "rotate-0 text-gray-400"
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    width={16}
                    height={16}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
                {openDropdown === "country" && (
                  <div className="absolute mt-1 w-full bg-white border rounded-md max-h-60 overflow-y-auto shadow-lg z-10">
                    <input
                      type="text"
                      value={searchCountry}
                      onChange={(e) => setSearchCountry(e.target.value)}
                      placeholder="Поиск..."
                      className="w-full border-b px-3 py-2 text-sm outline-none"
                    />
                    {filteredCountries.map((c) => (
                      <div
                        key={c}
                        onClick={() => {
                          setCountry(c);
                          setOpenDropdown("");
                          setSearchCountry("");
                        }}
                        className="px-3 py-2 text-sm hover:bg-blue-500 hover:text-white cursor-pointer transition-colors"
                      >
                        {c}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Ввод суммы */}
              <div>
                <label htmlFor="amount" className="block text-gray-600 mb-1">
                  Сумма перевода
                </label>
                <input
                  type="number"
                  id="amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder={`Введите сумму в ${currency}`}
                  className="bg-white rounded-lg px-4 py-3 text-gray-800 w-full"
                  min={0}
                />
                <input
                  type="range"
                  min={0}
                  max={300000}
                  step={1000}
                  value={amount}
                  onChange={handleSliderChange}
                  className="w-full mt-2 accent-blue-500"
                />
              </div>

              <p className="text-[13px] text-gray-400 mt-2 leading-snug">
                *Комиссия рассчитывается автоматически.
              </p>
            </div>

            {/* Правая часть */}
            <div className="space-y-6">
              {/* Итог */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col ">
                  <p className="text-gray-500 text-sm">Итого</p>
                  <p className="text-xl sm:text-3xl font-bold text-blue-500">
                    {totalCost.toLocaleString()} ₽
                  </p>
                </div>
                <div className="flex flex-col">
                  <p className="text-gray-500 text-sm">Комиссия*</p>
                  <p className="text-xl sm:text-3xl font-semibold text-gray-900">
                    {serviceFee.toLocaleString()} ₽
                  </p>
                </div>
              </div>

              {/* Контактные данные */}
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="text"
                  placeholder="Имя"
                  className="px-3 py-3 rounded-lg bg-white placeholder-gray-500 focus:outline-none w-full sm:w-1/2"
                />
                <InputMask
                  mask="+7 (999) 999-99-99"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                >
                  {(inputProps) => (
                    <input
                      {...inputProps}
                      type="tel"
                      placeholder="Номер телефона"
                      className="px-3 py-3 rounded-lg bg-white placeholder-gray-500 focus:outline-none w-full sm:w-1/2"
                    />
                  )}
                </InputMask>
              </div>
              {error && <p className="text-red-500 text-sm">{error}</p>}

              {/* Кнопка */}
              <button
                type="submit"
                className="cursor-pointer w-full bg-gradient-to-l from-[#0273DE] to-[#10B0EB] text-white px-6 py-4 rounded-md hover:scale-105 transition duration-300 font-medium"
              >
                отправить заявку
              </button>

              {/* Согласие */}
              <div className="space-y-2 text-sm">
                <label className="flex items-start space-x-2">
                  <input type="checkbox" className="mt-1" />
                  <span>
                    Даю своё <span className="text-blue-500">согласие</span> на
                    обработку, хранение и передачу персональных данных
                  </span>
                </label>
                <label className="flex items-start space-x-2">
                  <input type="checkbox" className="mt-1" />
                  <span>
                    Согласен получать информационные и рекламные письма
                  </span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Calculator;
