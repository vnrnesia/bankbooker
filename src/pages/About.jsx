import Comments from "@/components/ui/Comments.jsx";
import Brands from "@/components/ui/Brands.jsx";
import CtaCard from "@/components/ui/CtaCard.jsx";
import GridCards from "@/components/subpageui/GridCards.jsx";
import Contact from "@/components/ui/Contact.jsx";
import AboutInfo from "@/components/subpageui/AboutInfo.jsx";
import Navbar from "@/components/subpageui/Navbar.jsx";
import Team from "@/components/subpageui/Team.jsx";

export default function About() {
  return (
    <>
      <Navbar />

      <AboutInfo />

      <div className="pt-24 pb-24">
        <Brands />
      </div>
      <CtaCard />
      <GridCards />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <Team />
        <Comments />
        <Contact />
      </div>
    </>
  );
}
