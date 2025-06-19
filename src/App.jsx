import { Routes, Route, useLocation } from "react-router-dom";
import Home from "@/pages/Home.jsx";
import Legal from "@/pages/Legal.jsx";
import Accounting from "@/pages/Accounting.jsx";
import Consulting from "@/pages/Consulting.jsx";
import Payment from "@/pages/Payment.jsx";
import Products from "@/pages/Products.jsx";
import MobileHeader from "@/components/layout/MobileHeader.jsx";
import Footer from "@/components/layout/Footer.jsx";
import ToolbarMobile from "@/components/layout/ToolbarMobile.jsx";
import Header from "@/components/layout/Header.jsx";
import ScrollToTop from "@/components/layout/ScrollToTop.jsx";
import Contact from "@/pages/Contact.jsx";
import About from "@/pages/About.jsx";
import BotpressChatWidget from "@/components/layout/BotpressChatWidget.jsx";
import FixedIcons from "@/components/layout/FixedIcons.jsx";

function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />

      <div className="mb-6 md:mb-10">
        <MobileHeader />
        {location.pathname !== "/" && <Header />}
      </div>

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
        </Routes>
      </main>

      <Footer />
      <ToolbarMobile />
      <BotpressChatWidget />
      <FixedIcons />
    </div>
  );
}

export default App;
