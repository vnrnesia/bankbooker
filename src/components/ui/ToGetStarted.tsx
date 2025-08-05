type ToGetStartedProps = {
  onClick?: () => void;
  text: string;
};

const ToGetStarted = ({ onClick, text }: ToGetStartedProps) => {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer bg-gradient-to-l from-[#0273DE] to-[#10B0EB] text-white px-6 py-4 rounded-lg hover:scale-105 transition duration-300 font-medium inline-block w-full sm:w-auto text-center"
    >
      {text}
    </div>
  );
};

export default ToGetStarted;
