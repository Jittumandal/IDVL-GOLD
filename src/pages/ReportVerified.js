import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { generateAndDownloadPDF, generateGoldTestingPDF } from "../utils/pdfGenerator";
import { verifyReport } from "../data/reportData";

export default function ReportVerified() {
    const location = useLocation();
    const navigate = useNavigate();
    const [isDownloading, setIsDownloading] = useState(false);

    let report = location.state?.report;

    if (!report) {
        const params = new URLSearchParams(location.search);
        const reportType = params.get("reportType");
        const certNumber = params.get("certNumber");
        if (reportType && certNumber) {
            report = verifyReport(reportType, certNumber);
        }
    }

    if (!report) {
        navigate("/verify-report");
        return null;
    }

    const handleDownloadReport = () => {
        setIsDownloading(true);
        setTimeout(() => {
            try {
                if (report.type === "XRF Gold Testing Certificate") {
                    generateGoldTestingPDF(report);
                } else {
                    generateAndDownloadPDF(report);
                }
            } catch (error) {
                alert("Error downloading report.");
            }
            setIsDownloading(false);
        }, 800);
    };

    return (
        <section className="py-12 bg-gray-50 min-h-screen">
            <main className="min-h-screen flex flex-col md:flex-row bg-white">
                {/* Left side illustration similar to VerifyReport */}
                <div className="hidden md:flex bg-teal-400 flex-col items-center justify-center p-12 text-dark overflow-hidden w-full md:w-1/2">
                    <div className="mb-8 text-center w-full">
                        <div className="p-8 mb-8 w-full h-full flex items-center justify-center">
                            <img
                                src={report.image}
                                alt={report.type}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* Right content column */}
                <div className="w-full md:w-1/2 flex flex-col p-8 md:p-12">
                    {/* Header */}
                    <div className="bg-yellow-50 rounded-lg px-6 py-4 mt-6 mb-6 border-l-4 border-yellow-400">
                        <h2 className="text-xl font-bold text-yellow-800">
                            {report.type}
                        </h2>
                        <p className="text-sm text-gray-600 mt-1">
                            Certificate ID: {report.certificationNumber}
                        </p>
                    </div>

                    {/* Details card */}
                    <div className="bg-white rounded-lg shadow-lg p-6 mb-6 flex-grow overflow-y-auto border border-gray-200">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* left column */}
                            <div className="pr-10">
                                <h3 className="font-semibold mb-3 text-gray-800">
                                    Customer Information
                                </h3>
                                <div className="space-y-2">
                                    <div className="flex justify-between">
                                        <span className="text-gray-600 text-sm">Name</span>
                                        <p className="font-medium text-gray-900">{report.customerName}</p>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600 text-sm">Date</span>
                                        <p className="font-medium text-gray-900">{report.date}</p>
                                    </div>
                                </div>

                                {report.details && (
                                    <>
                                        <h3 className="font-semibold mb-3 text-gray-800 mt-6">
                                            Product Details
                                        </h3>
                                        <div className="space-y-2">
                                            {Object.entries(report.details).map(([key, value]) => (
                                                <div className="flex justify-between" key={key}>
                                                    <span className="text-gray-600 text-sm">
                                                        {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, " $1")}
                                                    </span>
                                                    <p className="font-medium text-gray-900">{value}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </>
                                )}
                            </div>

                            {/* right column */}
                            <div>
                                <h3 className="font-semibold mb-3 text-gray-800">
                                    Final Test Results
                                </h3>
                                <div className="space-y-2">
                                    <div className="flex justify-between">
                                        <span className="text-gray-600 text-sm">Test Location</span>
                                        <p className="font-medium text-gray-900">{report.laboratory}</p>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600 text-sm">Timestamp</span>
                                        <p className="font-medium text-gray-900">{report.date}</p>
                                    </div>
                                </div>

                                {report.composition && (
                                    <>
                                        <h3 className="font-semibold mb-3 text-gray-800 mt-6">
                                            Metal Composition
                                        </h3>
                                        <div className="space-y-2">
                                            {Object.entries(report.composition).map(([key, val]) => (
                                                <div className="flex justify-between" key={key}>
                                                    <span className="text-gray-600 text-sm">
                                                        {key.charAt(0).toUpperCase() + key.slice(1)}
                                                    </span>
                                                    <p
                                                        className={`font-medium ${key === "gold"
                                                            ? "text-yellow-700"
                                                            : key === "silver" || key === "copper"
                                                                ? "text-yellow-600"
                                                                : "text-gray-900"
                                                            }`}
                                                    >
                                                        {val.percentage}{val.unit}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </>
                                )}

                                {report.specifications && (
                                    <>
                                        <h3 className="font-semibold mb-3 text-gray-800 mt-6">
                                            Specifications
                                        </h3>
                                        <div className="space-y-2">
                                            {Object.entries(report.specifications).map(([key, val]) => (
                                                <div key={key}>
                                                    <span className="text-gray-600 text-sm">
                                                        {key.replace(/([A-Z])/g, " $1").replace(/^./, s => s.toUpperCase())}
                                                    </span>
                                                    <p className="font-medium text-gray-900">{val}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Verified banner */}
                    <div className="bg-green-100 text-green-800 p-4 rounded-lg mb-6 flex items-start gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <div>
                            <div className="font-semibold">Verified & Authenticated</div>
                            <div className="text-sm">Certificate verified on {report.date}</div>
                        </div>
                    </div>

                    {/* Download button */}
                    <button
                        onClick={handleDownloadReport}
                        disabled={isDownloading}
                        className="bg-blue-500 hover:bg-blue-600 disabled:bg-gray-300 text-white w-full py-3 rounded-lg font-semibold transition"
                    >
                        {isDownloading ? "Downloading..." : "Download E-Certificate"}
                    </button>
                </div>
            </main>
        </section>

    );
}
