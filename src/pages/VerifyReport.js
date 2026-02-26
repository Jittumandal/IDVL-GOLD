import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { verifyReport } from "../data/reportData";

export default function VerifyReport() {
    const navigate = useNavigate();
    const [reportType, setReportType] = useState("");
    const [certificationNumber, setCertificationNumber] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");
        setIsLoading(true);

        setTimeout(() => {
            if (!reportType || !certificationNumber) {
                setError(
                    "Please select a report type and enter a certification number."
                );
                setIsLoading(false);
                return;
            }

            const report = verifyReport(reportType, certificationNumber);

            if (report) {
                navigate("/report-verified", { state: { report } });
            } else {
                setError(
                    "Report not found. Please check your certification number and try again."
                );
            }

            setIsLoading(false);
        }, 1000);
    };

    return (
        <div className="min-h-screen w-full flex">
            <div className="w-full h-screen">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0 h-full">
                    {/* Left Side - Illustration */}
                    <div className="hidden md:flex bg-teal-400 flex-col items-center justify-center p-12 text-dark overflow-hidden">
                        <div className="mb-8 text-center">
                            <div className="p-8 mb-8 w-full h-full flex items-center justify-center">
                                <img
                                    src="/img/report.svg"
                                    alt="IDVL Lab"
                                    className="w-full h-full object-cover "
                                />
                            </div>
                        </div>
                        <h3 className="text-5xl font-bold mb-6 text-center uppercase">Report Check</h3>
                        <p className="text-center mb-4 text-md leading-relaxed opacity-95 ">
                            IDVL reports represent the highest standards of accuracy, consistency, and integrity in gemological evaluation.
                        </p>
                        <p className="text-center mb-4 text-md leading-relaxed opacity-95 ">
                            Now, IDVL Report Verification is available for all IDVL reports, offering you an added layer of confidence and security. With our easy-to-use Report Verification system, you can quickly and conveniently confirm that the details on your certificate match the information securely stored in the official IDVL report database.
                        </p>
                        <p className="text-center mb-4 text-md leading-relaxed opacity-95 ">
                            This service ensures authenticity, transparency, and trust — giving you complete peace of mind with every IDVL certified gemstone or jewellery report.
                        </p>
                    </div>

                    {/* Right Side Form */}
                    <div className="flex items-center justify-center w-full h-full">
                        <div className="bg-white   w-full max-w-lg">
                            <h1 class="text_title_color  text-5xl font-bold text-gray-900 mb-4 text-center">Verify Report</h1>
                            <p className="text-gray-500 mb-6 text-center">
                                Verify your report to access your orders, special offers, and more.
                            </p>

                            {error && (
                                <div className="bg-red-100 text-red-700 px-4 py-3 rounded-lg mb-6">
                                    {error}
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-6">

                                {/* Report Type */}
                                <div>
                                    <label className="block text-sm font-medium mb-2 text-gray-700">
                                        Report Type
                                    </label>
                                    <select
                                        value={reportType}
                                        onChange={(e) => setReportType(e.target.value)}
                                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                                        required
                                    >
                                        <option value="">Select Type</option>
                                        <option value="goldTesting">
                                            IDVL Gold  Certificate
                                        </option>
                                    </select>
                                </div>

                                {/* Certification Number */}
                                <div>
                                    <label className="block text-sm font-medium mb-2 text-gray-700">
                                        Certification Number
                                    </label>
                                    <input
                                        type="text"
                                        value={certificationNumber}
                                        onChange={(e) =>
                                            setCertificationNumber(e.target.value.toUpperCase())
                                        }
                                        placeholder="Enter Certification No."
                                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                                        required
                                    />
                                </div>

                                {/* Button */}
                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full bg-yellow-600 hover:bg-yellow-700 text-white py-3 rounded-lg font-semibold transition duration-300 shadow-md"
                                >
                                    {isLoading ? "Verifying..." : "Verify Report"}
                                </button>
                            </form>

                            {/* Sample Certs */}
                            <div className="mt-8 bg-gray-100 p-4 rounded-lg text-sm text-gray-600">
                                <p className="font-semibold mb-2">
                                    Sample Certification Numbers:
                                </p>
                                <p>
                                    <strong>Gold Testing:</strong> 5152, 5153, 5154, 5155, 5156
                                </p>
                            </div>

                        </div> {/* end white box */}
                    </div> {/* end flex wrapper */}

                </div>
            </div>
        </div>
    );
}