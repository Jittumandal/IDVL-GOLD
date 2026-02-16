import React from "react";
import { Link } from "react-router-dom";

const reports = [
  {
    title: "Colored Stone Report",
    description:
      "IDVL carefully examines each gemstone to accurately determine its species and variety. Our experts provide comprehensive identification details and clearly disclose any detected treatments or enhancements. Every IDVL Colored Stone Report is prepared with precision and transparency, ensuring authenticity, trust, and confidence for customers and industry professionals.",
    img: "/images/colored_diamond_report.png",
    learnLink: "/reports/colored-stone",
    verifyLink: "/verify/colored-stone",
  },
  {
    title: "Jewelry Report",
    description:
      "IDVL is committed to excellence in jewelry grading and certification, delivering comprehensive evaluation reports for finished jewelry pieces. Each report is prepared by experienced gemological experts who carefully assess metal purity, gemstone authenticity, quality characteristics, and overall craftsmanship.",
    img: "/images/jewlery_reports.png",
    learnLink: "/reports/jewelry",
    verifyLink: "/verify/jewelry",
  },
  {
    title: "Diamond Reports",
    description:
      "IDVL provides comprehensive loose diamond grading reports that clearly determine whether a diamond is natural or laboratory-grown. Each report thoroughly documents the essential value-defining characteristics, including the internationally recognized 4Cs — Cut, Color, Clarity, and Carat Weight.",
    img: "/images/diamond-reports.png",
    learnLink: "/reports/diamond",
    verifyLink: "/verify/diamond",
  },
];

const Subscription_Plans = () => {
  return (
    <section className="w-full px-4 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {reports.map((r, idx) => (
            <article key={idx} className="flex flex-col gap-4">
              <h3 className="text-2xl font-medium text_title_color text-gray-900">{r.title}</h3>
              <p className="text-gray-600 line-clamp-5">{r.description}</p>
              <div className="overflow-hidden rounded bg-white shadow-sm">
                <img src={r.img} alt={r.title} className="h-100 w-full object-cover" />
              </div>
              <div className="flex items-center gap-4">
                <Link to={r.learnLink} className="inline-flex items-center rounded border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                  Learn More
                </Link>
                <Link to="/verify-report" className="ml-2 inline-flex items-center text-sm font-medium text-green-600 hover:text-green-700">
                  Verify report
                  <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Subscription_Plans;
