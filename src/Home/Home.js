import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import FreshMeals from "../components/Freshmealplans.js";
import Location from "../components/Location.js";
import Hero from "../components/Herosection.js";
import OurHistory from "../components/OurHistory.js";
import Bigestbrand from "../components/Bigestbarand.js";
import Testimonials from "../components/Testimonials.js";

const Home = () => {
  const location = useLocation();
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  useEffect(() => {
    if (location.state?.contactSuccess) {
      setShowSuccessModal(true);
      // clear state so reopening won't trigger again
      window.history.replaceState({}, document.title);
    }
  }, [location.state]);

  return (
    <>
      {showSuccessModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full relative">
            <h2 className="text-2xl font-bold text-green-600 mb-4">Message Sent</h2>
            <p className="text-gray-700 mb-6">Thank you for reaching out! We will get back to you soon.</p>
            <button
              onClick={() => setShowSuccessModal(false)}
              className="w-full py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <Hero />
      <FreshMeals />
      <OurHistory />
      <Location />
      <Bigestbrand />
      <Testimonials />
    </>
  );
};

export default Home;
