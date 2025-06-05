const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700">
      <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row justify-between items-start md:items-center">
        {/* Left Section */}
        <div className="mb-8 md:mb-0 max-w-lg">
          {/* Logo */}
          <div className="flex items-center gap-2 mb-4">
            {/* LOGO BURAYA EKLENECEK */}
            <div className="w-10 h-10 bg-blue-500 rounded-full"></div>
            <div>
              <h3 className="text-xl font-semibold">BANKBOOKER</h3>
              <p className="text-sm text-gray-500">мультивалютный бухгалтер</p>
            </div>
          </div>
          <h2 className="text-2xl font-bold mb-2">
            Ready to Take Control Of Your Finances?
          </h2>
          <p className="text-gray-600 mb-4">
            We look forward to learning about your financial goals.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-full transition">
            Free Consultation
          </button>
        </div>

        {/* Right Section */}
        <div className="text-sm grid grid-cols-2 gap-6 md:gap-12 text-left">
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">CONTACT US</h4>
            <p className="mb-1">
              <strong>Our Phone</strong><br />
              +7 (917) 889 94-54
            </p>
            <p>
              <strong>Our Email</strong><br />
              info@bankbooker.com
            </p>
          </div>
          <div>
            <p className="mb-1">
              <strong>Mon–Fri:</strong><br />
              8:30am – 5:30pm
            </p>
            <p>
              <strong>Moscow,</strong><br />
              1140 Kremlin St, RU 13131
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="border-t border-gray-300 mt-6 py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm">
          <div className="flex flex-wrap gap-6 mb-4 md:mb-0">
            <a href="#">Services</a>
            <a href="#">Who We Are</a>
            <a href="#">Insights</a>
            <a href="#">Careers</a>
            <a href="#">Team</a>
            <a href="#">Contact Us</a>
            <a href="#">FAQ</a>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-gray-500 text-sm">
            <span>2025 Bankbooker. All right reserved.</span>
            <a href="#">Terms & Conditions</a>
            <a href="#">Privacy Policy</a>
            <div className="flex gap-3 ml-4">
              {/* Sosyal Medya İkonları (yer tutucu kutular) */}
              <div className="w-5 h-5 bg-black rounded"></div> {/* X */}
              <div className="w-5 h-5 bg-black rounded"></div> {/* LinkedIn */}
              <div className="w-5 h-5 bg-black rounded-full"></div> {/* Facebook */}
              <div className="w-5 h-5 bg-black rounded"></div> {/* Instagram */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
