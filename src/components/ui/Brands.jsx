const icons = Array.from({ length: 10 }, (_, i) => `brand${i + 1}.png`);

const Brands = () => {
  return (
    <div className="font-[Manrope]  px-6 max-w-7xl mx-auto text-center">
      <h3 className="text-md text-gray-500 font-medium mb-2">Partner</h3>
      <h2 className="text-3xl md:text-4xl font-semibold text-neutral-900 mb-4">
        Trusted By 550+ Companies Worldwide
      </h2>
      <p className="text-gray-500 max-w-xl mx-auto mb-10">
        Here are some of the companies that have been empowered by Bankbooker to
        move forward with confidence
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        {icons.map((icon, index) => (
          <div
            key={index}
            className="group bg-white border border-gray-200 rounded-xl p-4 flex items-center justify-center h-20 shadow-sm hover:shadow-md transition"
          >
            <img
              src={`/assets/BrandIcon/${icon}`}
              alt={`Company logo ${index + 1}`}
              className="w-[65%] filter grayscale group-hover:filter-none transition duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands;
