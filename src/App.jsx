import React, { useRef } from "react";
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
import Services from "./pages/Services";
import Solutions from "./pages/Solutions";

function App({ onGetStartedClick }) {
  const location = useLocation();
  const getStartedRef = useRef(null);

  const scrollToGetStarted = () => {
    getStartedRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const hideFooterRoutes = ["/contact", "/services"];

  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Navbar
        onLearnMoreClick={scrollToGetStarted}
        onGetStartedClick={onGetStartedClick}
      />
      <main className="flex-grow">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                getStartedRef={getStartedRef}
                onGetStartedClick={scrollToGetStarted}
              />
            }
          />
          <Route path="/legal" element={<Legal />} />
          <Route path="/accounting" element={<Accounting />} />
          <Route path="/consulting" element={<Consulting />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/partner" element={<Partner />} />
          <Route path="/services" element={<Services />} />
          <Route path="/solutions" element={<Solutions />} />
        </Routes>
      </main>
      {!hideFooterRoutes.includes(location.pathname) && (
        <Footer key={location.pathname} />
      )}
      <ToolbarMobile scrollToGetStarted={scrollToGetStarted} />
    </div>
  );
}

export default App;
