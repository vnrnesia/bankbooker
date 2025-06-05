const Info = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-10">
      {/* Left Side */}
      <div>
        <h4 className="text-gray-600 text-md font-medium mb-2">About Bankbooker</h4>
        <h2 className="text-3xl lg:text-4xl font-semibold text-neutral-900 mb-4 leading-tight">
          Innovative Financial Solutions<br />
          Changing Business Landscape
        </h2>
        <p className="text-gray-500 mb-6 max-w-2xl">
          Transform your business with Bankbooker specialized financial solutions crafted to propel your journey to success. 
          Our deep industry knowledge and strategic approach ensure we guide organizations through complexities, enabling 
          them to achieve impactful growth and enduring outcomes.
        </p>

        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg">
          Discovered More
        </button>

        {/* Stats */}
        <div className="mt-10 grid grid-cols-3 divide-x divide-gray-200 text-center">
          <div>
            <p className="text-2xl font-semibold text-neutral-900">24+</p>
            <p className="text-sm text-gray-500 mt-1">Years of collective experience</p>
          </div>
          <div className="px-4">
            <p className="text-2xl font-semibold text-neutral-900">95%</p>
            <p className="text-sm text-gray-500 mt-1">Remarkable client satisfaction rate</p>
          </div>
          <div>
            <p className="text-2xl font-semibold text-neutral-900">500+</p>
            <p className="text-sm text-gray-500 mt-1">Successfully crated projects</p>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="space-y-6">
        {/* Background image card */}
        <div
          className="relative rounded-xl overflow-hidden h-60 bg-cover bg-center"
          style={{
            backgroundImage: `url('/path/to/your/image.jpg')` // burayı sen değiştireceksin
          }}
        >
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6 text-white">
            <h3 className="text-lg font-semibold">Your Goals Are Our Top Priority</h3>
            <p className="text-sm">Ivan Surname – CEO Bankbooker</p>
          </div>
        </div>

        {/* Accordion-like content */}
        <div className="bg-white rounded-xl shadow p-6">
          <h4 className="text-lg font-semibold mb-2">Vision</h4>
          <p className="text-sm text-gray-600">
            Our vision is empowering organizations and individuals to achieve sustainable growth, 
            financial stability, and operational excellence
          </p>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h4 className="text-lg font-semibold">Mission</h4>
        </div>
      </div>
    </section>
  );
};

export default Info;
