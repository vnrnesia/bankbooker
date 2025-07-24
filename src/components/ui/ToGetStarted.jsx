const ToGetStarted = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer mt-10  bg-gradient-to-l from-[#0273DE] to-[#10B0EB] text-white px-6 py-4 rounded-full hover:scale-105 transition duration-300 font-medium inline-block"
    >
      Get Started
    </div>
  );
};

export default ToGetStarted;
