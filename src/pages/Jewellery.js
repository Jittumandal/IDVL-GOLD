import React from "react";
import { Link } from "react-router-dom";

export default function Jewellery() {
    return (
        <main className="w-full mt-16 bg-white">
            <div className="flex flex-col md:flex-row md:h-screen md:items-center">
                {/* Left Content Section */}
                <div className="w-full md:w-1/2 px-4 md:px-12 py-8 md:py-16 md:overflow-y-auto md:max-h-screen">
                    <h1 className="text-3xl font-semibold text-gray-900">Jewellery Evaluation & Certification Report</h1>
                    <p className="mt-4 text-gray-700">
                        IDVL is committed to excellence in Jewellery grading and certification. Our Jewellery Reports provide a comprehensive evaluation of finished Jewellery articles, combining gemstone analysis with metal assessment and craftsmanship review.
                    </p>
                    <h2 className="mt-6 text-xl font-semibold text-gray-900"> Each report includes:</h2>
                    <ul className="list-disc list-inside mt-4 text-gray-700">
                        <li>Identification and grading of mounted diamonds and gemstones</li>
                        <li>Metal purity testing (gold, platinum, silver, etc.)</li>
                        <li>Gross and net weight details</li>
                        <li>Design description and setting style</li>
                        <li>Overall craftsmanship assessment</li>
                        <li>Confirmation of natural or laboratory-grown stones (where applicable)</li>
                    </ul>
                    <p className="mt-4">Prepared by experienced gemological professionals, the report ensures clarity, authenticity, and value transparency for retailers, insurers, and end customers.</p>

                    <div className="mt-6 space-x-3">
                        <Link to="/verify-report" className="inline-block rounded border border-green-500 px-4 py-2 text-green-600">
                            Verify Report
                        </Link>
                    </div>
                </div>

                {/* Right Image Section - Full Screen Height */}
                <div className="w-full md:w-1/2 h-64 md:h-screen overflow-hidden">
                    <img
                        src="/img/Jewellery.png"
                        alt="Jewellery Evaluation"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </main>
    );
}
