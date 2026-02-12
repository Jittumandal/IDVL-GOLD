import React from "react";
import SubscriptionPlans from "./SubscriptionPlans";
import FreshMealPlansHeading from "./FreshMealPlansHeading";


const Freshmealplans = () => {
  return (
    <div className="freshmealplan px-2 py-12 " id="target-section">
      <div className="flex w-full flex-col items-center justify-center mb-8">
        <div className="mx-auto w-full max-w-3xl text-center mb-3">
          <FreshMealPlansHeading />
          <p className="animate__animated animate__backInDown text-gray-600">
            In the worldwide diamond and jewelry trade, IDVL grading reports serve as a trusted benchmark, providing assurance, authenticity, and a common language that connects buyers, sellers, and professionals throughout the gem industry.
          </p>
        </div>
      </div>
      <SubscriptionPlans />
    </div>
  );
};

export default Freshmealplans;
