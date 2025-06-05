const WhyChooseUs = () => {
  return (
    <section className="bg-white py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 rounded-xl overflow-hidden border border-blue-500 shadow-lg">
        {/* Left Card */}
        <div className="bg-gray-100 flex flex-col items-center justify-center p-8 text-center rounded-t-xl lg:rounded-tr-none lg:rounded-l-xl">
          {/* Placeholder for image */}
          <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-md mb-4">
            <img src="" alt="Profile" className="w-full h-full object-cover" />
          </div>

          <p className="text-gray-700 text-sm mb-2">
            There Are Some Results We Have Already Achieved Together
          </p>

          <h3 className="text-xl font-semibold">Ivan Marochkin</h3>
          <p className="text-sm text-gray-500 mb-4">CEO</p>

          {/* Social Icons */}
          <div className="flex items-center gap-4 text-xl mb-4">
            <i className="fab fa-x-twitter"></i>
            <i className="fab fa-linkedin-in"></i>
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-instagram"></i>
          </div>

          {/* Telegram */}
          <a
            href="https://t.me/bankbooker"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 text-sm flex items-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M9.47 14.81l-.39 4.23c.56 0 .8-.24 1.09-.52l2.62-2.46 5.45 3.98c1 .55 1.72.26 1.97-.92l3.58-16.74h.01c.32-1.49-.54-2.08-1.5-1.76L1.44 9.67c-1.47.54-1.46 1.32-.25 1.67l4.62 1.44 10.73-6.77c.51-.31.98-.14.6.2L9.47 14.81z" />
            </svg>
            t.me/bankbooker
          </a>
        </div>

        {/* Right Card */}
        <div className="bg-gradient-to-r from-sky-500 to-blue-600 text-white p-8 rounded-b-xl lg:rounded-bl-none lg:rounded-r-xl flex flex-col justify-between">
          <div>
            <p className="text-white text-sm font-light mb-2">Why Choose Us</p>
            <h2 className="text-2xl lg:text-3xl font-semibold leading-snug mb-4">
              We Will Help You Achieve All Your Business Goals
            </h2>
            <p className="text-white/80 text-sm mb-6 max-w-lg">
              Choosing us means partnering with a team dedicated to helping you navigate complex
              business challenges with confidence. We're here to drive your success every step of the way.
            </p>
          </div>

          {/* Feature List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm mb-6">
            <p>✔ Expertise in Various Industries</p>
            <p>✔ Experienced Team of Professionals</p>
            <p>✔ Customized Solutions</p>
            <p>✔ Efficient Implementation Support</p>
            <p>✔ Data-Driven Insights</p>
            <p>✔ Focus on ROI and Growth</p>
            <p>✔ Commitment to Client Success</p>
            <p>✔ Consultant Experts In Their Field</p>
          </div>

          <button className="bg-white text-blue-600 font-medium px-5 py-2 rounded-md w-fit">
            Contact With Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
