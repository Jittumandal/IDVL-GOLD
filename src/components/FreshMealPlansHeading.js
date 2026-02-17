import React, { useState, useEffect } from "react";

const FreshMealPlansHeading = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const words = [
    { text: "Colored Stone Report", className: "text-[#E0B84C]" },
    { text: "Jewelry Report", className: "text-[#E0B84C]" },
    { text: "Diamond Reports", className: "text-[#E0B84C]" },

  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [words.length]);

  return (
    <div className="mobile_view_plan relative mb-4 flex w-full items-center justify-center overflow-hidden">
      <div className="animate__animated animate__zoomIn flex items-center text-[40px] font-semibold">
        <p className="Meal_Plans mr-2 text-[#E0B84C]">IDVL Reports </p>
        <div className="aliment-left relative min-h-[60px] min-w-[300px] text-left">
          {words.map((word, index) => (
            <span
              key={index}
              className={`absolute left-0 top-0 block w-full transition-all duration-700 ${word.className}`}
              style={{
                opacity: index === currentIndex ? 1 : 0,
                visibility: index === currentIndex ? "visible" : "hidden",
                transform: `translateY(${index === currentIndex ? 0 : "20px"})`,
              }}
            >
              {word.text}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FreshMealPlansHeading;
