import { Routes, Route, useLocation } from "react-router-dom";
import Home from "@/pages/Home.jsx";
import Legal from "@/pages/Legal.jsx";
import Accounting from "@/pages/Accounting.jsx";
import Consulting from "@/pages/Consulting.jsx";
import Payment from "@/pages/Payment.jsx";
import Products from "@/pages/Products.jsx";
import Footer from "@/components/layout/Footer.jsx";
import ScrollToTop from "@/components/layout/ScrollToTop.jsx";
import Contact from "@/pages/Contact.jsx";
import About from "@/pages/About.jsx";
import Partner from "@/pages/Partner.jsx";
import Navbar from "./components/layout/Navbar/Navbar";
import Chatbot from "./components/layout/Chatbot";
import ToolbarMobile from "./components/layout/ToolbarMobile";

function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Navbar/>
     
  

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/accounting" element={<Accounting />} />
          <Route path="/consulting" element={<Consulting />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/partner" element={<Partner />} />
        </Routes>
      </main>

      {location.pathname !== "/contact" && <Footer />}
      <Chatbot/>
      <ToolbarMobile/>
    </div>
  );
}

export default App;