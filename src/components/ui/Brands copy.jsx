const icons = Array.from({ length: 10 }, (_, i) => `brand${i + 1}.png`);

const Brands = () => {
  return (
    <div className="font-[Manrope] pt-20 px-4 max-w-7xl mx-auto text-center">
      {/* Başlıklar */}
      <h3 className="text-md text-gray-500 font-medium mb-2">Partner</h3>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-neutral-900 mb-4">
        Trusted By 550+ Companies Worldwide
      </h2>
      <p className="text-gray-500 text-base sm:text-lg mx-auto mb-10 max-w-md">
        Here are some of the companies that have been empowered by Bankbooker to move forward with confidence
      </p>

      {/* Marka Logoları */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6 justify-items-center">
        {icons.map((icon, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-xl p-4 flex items-center justify-center h-20 w-full max-w-[130px] shadow-sm hover:shadow-md transition"
          >
            <img
              src={`/assets/BrandIcon/${icon}`}
              alt={`Company logo ${index + 1}`}
              className="max-h-10 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands;
