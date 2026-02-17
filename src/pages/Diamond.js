import React from "react";
import { Link } from "react-router-dom";

export default function Diamond() {
    return (
        <main className="w-full px-4 py-16 mt-16">
            <div className="mx-auto max-w-4xl">
                <h1 className="text-3xl font-semibold text-gray-900">Diamond Grading Reports</h1>
                <p className="mt-4 text-gray-700">
                    IDVL provides comprehensive grading reports for loose diamonds, clearly determining whether a diamond is natural or laboratory-grown. Our diamond grading process follows internationally recognized standards and strict quality control procedures.
                </p>
                <h2 className="mt-6 text-xl font-semibold text-gray-900"> Each Diamond Report includes detailed evaluation of:</h2>
                <ul className="list-disc list-inside mt-4 text-gray-700">
                    <li>Color Grade</li>
                    <li>Clarity Grade</li>
                    <li>Cut Grade</li>
                    <li>Carat Weight</li>
                    <li>Polish and symmetry</li>
                    <li>Fluorescence</li>
                    <li>Measurements and proportions</li>
                </ul>
                <p className="mt-4">By documenting the essential value-defining characteristics of each diamond, IDVL ensures a transparent and standardized grading system that supports fair trade practices and global acceptance.</p>
                <div className="mt-6 space-x-3">
                    <Link to="/verify/diamond" className="inline-block rounded border border-green-500 px-4 py-2 text-green-600">
                        Verify Report
                    </Link>

                </div>
            </div>
        </main>
    );
}
