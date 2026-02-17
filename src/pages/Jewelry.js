import React from "react";
import { Link } from "react-router-dom";

export default function Jewelry() {
    return (
        <main className="w-full px-4 py-16 mt-16">
            <div className="mx-auto max-w-7xl">
                <h1 className="text-3xl font-semibold text-gray-900">Jewelry Evaluation & Certification Report</h1>
                <p className="mt-4 text-gray-700">
                    IDVL is committed to excellence in jewelry grading and certification. Our Jewelry Reports provide a comprehensive evaluation of finished jewelry articles, combining gemstone analysis with metal assessment and craftsmanship review.

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
                    <Link to="/verify/jewelry" className="inline-block rounded border border-green-500 px-4 py-2 text-green-600">
                        Verify Report
                    </Link>

                </div>
            </div>
        </main>
    );
}
