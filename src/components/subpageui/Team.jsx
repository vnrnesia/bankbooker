import profile1 from "@/assets/TeamImg/profile1.png";
import profile2 from "@/assets/TeamImg/profile2.png";
import profile3 from "@/assets/TeamImg/profile3.png";

export default function Team() {
  const team = [
    {
      name: "Sencer Giray Duzenli",
      title: "Project Manager",
      img: profile1,
    },
    {
      name: "Sencer Giray Duzenli",
      title: "Project Manager",
      img: profile2,
    },
    {
      name: "Sencer Giray Duzenli",
      title: "Project Manager",
      img: profile3,
    },
  ];

  return (
    <section className="py-20 px-4 md:px-10 bg-white text-center font-[Manrope]">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h3 className="text-md text-gray-500 font-medium mb-2">Partner</h3>
        <h2 className="text-3xl md:text-4xl font-semibold text-neutral-900 mb-4">
          Trusted By 550+ Companies Worldwide
        </h2>
        <p className="text-gray-500 max-w-xl mx-auto mb-10">
          Here are some of the companies that have been empowered by Bankbooker
          to move forward with confidence
        </p>

        {/* Team Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border"
            >
              <div className="w-full h-[360px] bg-gray-100">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="py-5">
                <h3 className="text-lg font-semibold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-gray-500 text-sm">{member.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
