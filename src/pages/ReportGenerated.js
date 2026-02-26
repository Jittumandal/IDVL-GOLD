import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { verifyReport } from "../data/reportData";

export default function ReportGenerated() {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const reportType = params.get("reportType");
        const certNumber = params.get("certNumber");

        // simulate generation delay
        const timer = setTimeout(() => {
            const report = verifyReport(reportType, certNumber);
            if (report) {
                navigate(`/report-verified?reportType=${encodeURIComponent(reportType)}&certNumber=${encodeURIComponent(certNumber)}`);
            } else {
                navigate("/verify-report");
            }
        }, 1500);

        return () => clearTimeout(timer);
    }, [location.search, navigate]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-4">Generating Report</h2>
                <p className="text-gray-600 mb-6">
                    Please wait while we generate your report. This may take a few seconds.
                </p>
                <div className="rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mx-auto animate-spin"></div>
            </div>
        </div>
    );
}
