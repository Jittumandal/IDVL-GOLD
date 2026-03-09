import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { verifyReportAPI } from '../utils/api';

function VerifyReport() {
    const navigate = useNavigate();
    const [reportType, setReportType] = useState('');
    const [customerName, setCustomerName] = useState('');
    const [certificationNumber, setCertificationNumber] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        try {
            const trimmedCertNumber = certificationNumber.trim();

            if (!trimmedCertNumber) {
                setError('Please enter a certification number.');
                setIsLoading(false);
                return;
            }

            const report = await verifyReportAPI(trimmedCertNumber);

            if (report) {
                navigate('/report-verified', { state: { report } });
                setError('');
            }
        } catch (err) {
            setError(
                err.message ||
                'Report not found. Please check your certification number and try again.'
            );
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen">
            <section>
                <div className="min-h-screen grid md:grid-cols-2">
                    {/* LEFT: full-height REPORT CHECK */}
                    <div className="min-h-screen bg-green-50 flex items-start md:items-center">
                        <div className="w-full max-w-2xl mx-auto p-12 text-center">
                            <img
                                src="img/report.svg"
                                alt="Report Check Illustration"
                                className="mx-auto mb-4 w-96 h-96 object-contain"
                            />
                            <h2 className="text-5xl font-extrabold mb-6">REPORT CHECK</h2>
                            <p className="text-gray-700 mb-4">
                                IDVL reports represent the highest standards of accuracy, consistency, and integrity in gemological evaluation.
                            </p>
                            <p className="text-gray-700 mb-4">
                                Now, IDVL Report Verification is available for all IDVL reports, offering you an added layer of confidence and security. With our easy-to-use Report Verification system, you can quickly and conveniently confirm that the details on your certificate match the information securely stored in the official IDVL report database.
                            </p>
                            <p className="text-gray-700">
                                This service ensures authenticity, transparency, and trust — giving you complete peace of mind with every IDVL certified gemstone or jewellery report.
                            </p>
                        </div>
                    </div>

                    {/* RIGHT: form */}
                    <div className="flex items-center justify-center p-12">
                        <div className="w-full max-w-lg">
                            <h1 className="text-5xl font-bold text-amber-600 text-center mb-2">Verify Report</h1>
                            <p className="text-center text-gray-600 mb-8">Verify your report to access your orders, special offers, and more.</p>

                            {error && (
                                <div className="mb-4 p-3 rounded bg-red-100 text-red-700 text-sm font-medium">
                                    {error}
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label className="block text-sm text-gray-700 mb-2">Report Type</label>
                                    <select
                                        value={reportType}
                                        onChange={(e) => setReportType(e.target.value)}
                                        className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-white"
                                    >
                                        <option value="">Select Type</option>
                                        <option value="goldTesting">XRF Gold Certificate</option>
                                        <option value="silverTesting">XRF Silver Certificate</option>
                                        <option value="platinumTesting">XRF Platinum Certificate</option>
                                        <option value="diamondGrading">Diamond Grading Report</option>
                                        <option value="gemstoneGrading">Gemstone Grading Report</option>
                                        <option value="jewelryAppraisal">Jewelry Appraisal Certificate</option>
                                        <option value="hallmarkCertificate">Hallmark Certificate</option>
                                        <option value="labGrownDiamond">Lab-Grown Diamond Certificate</option>
                                        <option value="pearlGrading">Pearl Grading Report</option>
                                        <option value="metalAssay">Metal Assay Report</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm text-gray-700 mb-2">Customer Name (Optional)</label>
                                    <input
                                        type="text"
                                        value={customerName}
                                        onChange={(e) => setCustomerName(e.target.value)}
                                        placeholder="Enter customer name"
                                        className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-white"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm text-gray-700 mb-2">Certification Number</label>
                                    <input
                                        type="text"
                                        value={certificationNumber}
                                        onChange={(e) => setCertificationNumber(e.target.value.toUpperCase())}
                                        placeholder="Enter Certification No. LAB-DIA-20260302-0010"
                                        required
                                        className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-white"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className={`w-full py-3 rounded-lg text-white font-semibold ${isLoading ? 'bg-gray-400' : 'bg-amber-600 hover:bg-amber-700'}`}
                                >
                                    {isLoading ? 'Verifying...' : 'Verify Report'}
                                </button>
                            </form>


                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default VerifyReport;