import WhyChooseUsCompany from "../components/ui/WhyChooseUsCompany";
import Brands from "../components/ui/Brands";
import GetStarted from "../components/ui/GetStarted";

const Solutions = () => {
  return (
    <>
      <section>
        <div className="max-w-7xl flex flex-col justify-center mx-auto">
          <WhyChooseUsCompany />
          <Brands />
        </div>
        <GetStarted />
      </section>
    </>
  );
};

export default Solutions;
