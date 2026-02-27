import React from "react";
import { Link } from "react-router-dom";

export default function ColoredStone() {
    return (
        <main className="w-full mt-16">
            <div className="flex h-screen items-center">
                {/* Left Content Section */}
                <div className="w-1/2 px-12 py-16">
                    <h1 className="text-3xl font-semibold text-gray-900">Coloured Stone Identification & Grading Report</h1>
                    <p className="mt-4 text-gray-700">
                        IDVL carefully examines each gemstone to accurately determine its species and variety. Our experts provide comprehensive identification details
                        and clearly disclose any detected treatments or enhancements. Every IDVL Coloured Stone Report is prepared with precision and transparency.

                        IDVL conducts detailed gemological examinations to accurately determine a gemstone's species, variety, and authenticity. Using advanced testing methods—including microscopic analysis, spectroscopy, and other specialized techniques—our experts identify both natural and laboratory-grown
                        materials with precision.
                    </p>
                    <h2 className="mt-6 text-xl font-semibold text-gray-900"> Each Coloured Stone Report includes:</h2>

                    <ul className="list-disc list-inside mt-4 text-gray-700">
                        <li>Accurate identification of species and variety</li>
                        <li>Determination of natural or synthetic origin</li>
                        <li>Disclosure of any detected treatments or enhancements</li>
                        <li>Assessment of color, transparency, and cutting style</li>
                        <li>Weight and measurement details</li>
                        <li>Observational comments based on gemological standards</li>
                    </ul>
                    <p className="mt-4">Every report is prepared with complete transparency, ensuring confidence in gemstone transactions across domestic and international markets.</p>

                    <div className="mt-6 space-x-3">
                        <Link to="/verify-report" className="inline-block rounded border border-green-500 px-4 py-2 text-green-600">
                            Verify Report
                        </Link>
                    </div>
                </div>

                {/* Right Image Section - Full Screen Height */}
                <div className="w-1/2 h-full overflow-hidden">
                    <img
                        src="/img/ColouredStone.png"
                        alt="Coloured Stone Identification"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </main>
    );
}
