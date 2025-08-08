import WhyChooseUsCompany from "../components/ui/WhyChooseUsCompany"
import Brands from "../components/ui/Brands"
import GetStarted from "../components/ui/GetStarted"
import Steps from "../components/ui/Steps"
import Comments from "../components/ui/Comments"

const Solutions = () => {
  return (
    <>
      <section>
        <div className="max-w-sm md:max-w-7xl flex flex-col justify-center mx-auto">
          <WhyChooseUsCompany/>
          </div>
          <div>
            <Steps/>
            <GetStarted/>
          </div>
         <div className="max-w-sm md:max-w-7xl pt-24 pb-24 flex flex-col justify-center mx-auto">
           <Brands/>
           <Comments/>
         </div>
        
          
        
      </section>
    </>
  );
};

export default Solutions;
