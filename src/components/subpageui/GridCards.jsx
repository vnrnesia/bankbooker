export default function GridCards() {
  const values = [
    { number: "01", title: "Client-Centric Approach" },
    { number: "02", title: "Innovation" },
    { number: "03", title: "Excellence" },
    { number: "04", title: "Impact-Driven Solutions" },
    { number: "05", title: "Confidentiality" },
    { number: "06", title: "Collaboration" },
  ];

  const description =
    "We put our clients at the heart of every decision, delivering tailored solutions that meet their unique goals and needs.";

  return (
    <section className="bg-gray-50 py-20 px-4 md:px-10 font-[Manrope]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start mb-12">
          <div>
            <h4 className="text-gray-700 text-lg font-medium">Our Value</h4>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight mt-2">
              Our Foundation, Your Trust
            </h2>
          </div>
          <p className="text-gray-600 max-w-md mt-6 md:mt-0">
            Everything we do is rooted in integrity, passion, and a commitment to delivering real value — because your trust is our greatest asset.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((item, index) => (
            <div
              key={index}
              className="border border-gray-300 bg-white rounded-2xl p-6 py-12 shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {item.number}. {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
