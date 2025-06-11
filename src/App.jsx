import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home.jsx";
import Banking from "@/pages/Banking.jsx";
import Pagea from "@/pages/Pagea.jsx";
import Pageb from "@/pages/Pageb.jsx";
import Payment from "@/pages/Payment.jsx";
import Header from "@/components/layout/Header.jsx";
import Footer from "@/components/layout/Footer.jsx";
import ToolbarMobile from "@/components/layout/ToolbarMobile.jsx";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header her sayfada gösterilecek */}
      <div className="mb-6 md:mb-10">
        <Header />
      </div>

      {/* Ana içerik */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/banking" element={<Banking />} />
          <Route path="/pagea" element={<Pagea />} />
          <Route path="/pageb" element={<Pageb />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </main>

      {/* Footer her sayfada gösterilecek */}
      <Footer />
      <ToolbarMobile />
    </div>
  );
}

export default App;
