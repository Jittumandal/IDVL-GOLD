import React from "react";
import { Link } from "react-router-dom";

const reports = [
  {
    title: "Colored Stone Report",
    description:
      "IDVL conducts detailed gemological examinations to accurately determine a gemstone’s species, variety, and authenticity. Using advanced testing methods—including microscopic analysis, spectroscopy, and other specialized techniques—our experts identify both natural and laboratory-grown materials with precision.",
    img: "/images/colored_diamond_report.png",
    learnLink: "/reports/colored-stone",
    verifyLink: "/verify/colored-stone",
  },
  {
    title: "Jewelry Report",
    description:
      "IDVL is committed to excellence in jewelry grading and certification. Our Jewelry Reports provide a comprehensive evaluation of finished jewelry articles, combining gemstone analysis with metal assessment and craftsmanship review.",
    img: "/images/jewlery_reports.png",
    learnLink: "/reports/jewelry",
    verifyLink: "/verify/jewelry",
  },
  {
    title: "Diamond Reports",
    description: "IDVL provides comprehensive grading reports for loose diamonds, clearly determining whether a diamond is natural or laboratory-grown. Our diamond grading process follows internationally recognized standards and strict quality control procedures.",
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
