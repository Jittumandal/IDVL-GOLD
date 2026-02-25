import React, { useState } from "react";

export default function VerifyReport() {
    const [reportType, setReportType] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    const handleSend = () => {
        if (reportType && phoneNumber) {
            console.log("Report Type:", reportType);
            console.log("Certification Number:", phoneNumber);
        }
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

                    {/* Right Side - Form */}
                    <div className="bg-white flex flex-col justify-center items-center px-12 py-12 overflow-hidden">
                        <div className="max-w-lg w-full ">
                            <h1 className="text-5xl font-bold text-gray-900 mb-4 text-center">Verify Report</h1>
                            <p className="text-gray-600 text-base mb-8">
                                Verify your report to access your orders, special offers, and more.
                            </p>

                            <div className="space-y-6">
                                {/* Report Type Select */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Report Type
                                    </label>

                                    <select
                                        value={reportType}
                                        onChange={(e) => setReportType(e.target.value)}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 text-gray-700 bg-white"
                                    >
                                        <option value="">Select Type</option>
                                        <option value="1">Jewellery</option>
                                        <option value="2">Gems</option>
                                        <option value="3">Diamond</option>
                                        <option value="4">Lab Grown Jewellery</option>
                                        <option value="5">Lab Grown Diamond</option>
                                        <option value="6">Studded Gem Testing Report</option>
                                        <option value="8"> Uncut Jewelry Report</option>
                                        <option value="9">Testing Report</option>
                                        <option value="10">Uncut Diamond Jewellery</option>
                                        <option value="11">Lab-Grown Gemstone</option>
                                        <option value="13">Gem Testing (Origin) Report</option>
                                    </select>
                                </div>

                                {/* Certification Number Input */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Certification Number
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Enter Certification No."
                                        value={phoneNumber}
                                        onChange={(e) => setPhoneNumber(e.target.value)}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 text-gray-700 placeholder-gray-400"
                                    />
                                </div>



                                {/* Verify Report Button */}
                                <button
                                    onClick={handleSend}
                                    disabled={!reportType || !phoneNumber}
                                    className="bg-green-500 hover:bg-green-600 disabled:bg-gray-300 disabled:cursor-not-allowed cursor-pointer w-full text-white font-semibold py-4 rounded-lg transition duration-200 mt-8 text-lg"
                                >
                                    Verify Report
                                </button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
