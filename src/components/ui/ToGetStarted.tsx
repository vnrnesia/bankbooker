type ToGetStartedProps = {
  onClick?: () => void;
  text: string; 
};

const ToGetStarted = ({ onClick, text }: ToGetStartedProps) => {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer mt-5 bg-gradient-to-l from-[#0273DE] to-[#10B0EB] text-white px-6 py-4 rounded-full hover:scale-105 transition duration-300 font-medium inline-block"
    >
      {text}
    </div>
  );
};

export default ToGetStarted;
