import React from "react";
import SubscriptionPlans from "./SubscriptionPlans";
import FreshMealPlansHeading from "./FreshMealPlansHeading";


const Freshmealplans = () => {
  return (
    <div className="freshmealplan px-2 py-12 " id="target-section">
      <div className="flex w-full flex-col items-center justify-center mb-8">
        <div className="mx-auto w-full max-w-6xl text-center mb-3">
          <FreshMealPlansHeading />
          <p className="animate__animated animate__backInDown text-gray-600">
            In the global diamond and jewelry industry, credibility, transparency, and standardization are essential. IDVL grading reports serve as an internationally trusted benchmark, providing independent, scientific evaluation and a consistent grading language that connects manufacturers, wholesalers, retailers, investors, and consumers worldwide.

            Each report is prepared using advanced gemological instruments, strict laboratory protocols, and internationally recognized grading methodologies to ensure accuracy, reliability, and integrity
          </p>
        </div>
      </div>
      <SubscriptionPlans />
    </div>
  );
};

export default Freshmealplans;
