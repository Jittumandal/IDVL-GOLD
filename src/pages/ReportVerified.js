import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { verifyReportAPI } from '../utils/api';
import { getCertificationTypeLabel } from '../utils/certificationTypes';

function ReportVerified() {
    const location = useLocation();
    const navigate = useNavigate();
    const [isDownloading, setIsDownloading] = useState(false);
    const [reportData, setReportData] = useState(location.state?.report || null);
    const [fetchError, setFetchError] = useState('');

    const apiBaseUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';
    const assetBaseUrl = apiBaseUrl.replace(/\/api\/?$/, '');

    const report = reportData;

    const imageSrc = report?.image
        ? report.image.startsWith('http')
            ? report.image
            : `${assetBaseUrl}${report.image}`
        : '';

    useEffect(() => {
        const fetchReportByCert = async () => {
            const params = new URLSearchParams(location.search);
            const certNumber = params.get('certNumber');

            if (!certNumber) return;

            try {
                const result = await verifyReportAPI(certNumber);
                setReportData(result);
            } catch (error) {
                setFetchError(error.message || 'Report not found.');
            }
        };

        if (!report) {
            fetchReportByCert();
        }
    }, [location.search, report]);

    const handleDownloadImage = async () => {
        if (!imageSrc) return;

        setIsDownloading(true);

        try {
            const response = await fetch(imageSrc);
            const blob = await response.blob();
            const blobUrl = window.URL.createObjectURL(blob);
            const link = document.createElement('a');

            // determine extension from MIME type
            let extension = 'bin';
            if (blob.type.includes('png')) extension = 'png';
            else if (blob.type.includes('webp')) extension = 'webp';
            else if (blob.type.includes('jpeg') || blob.type.includes('jpg')) extension = 'jpg';
            else if (blob.type === 'application/pdf') extension = 'pdf';

            link.href = blobUrl;
            link.download = `${report.certificationNumber || 'report-file'}.${extension}`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            window.URL.revokeObjectURL(blobUrl);
        } catch (error) {
            alert('Error downloading file. Please try again.');
        } finally {
            setIsDownloading(false);
        }
    };

    if (!report) {
        return (
            <section className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
                <div className="bg-white p-8 rounded-xl shadow-lg text-center max-w-md w-full">
                    <div className="text-red-600 mb-4 font-medium">
                        {fetchError || 'Report not found. Please verify again.'}
                    </div>

                    <button
                        onClick={() => navigate('/verify-report')}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition"
                    >
                        Back to Verify
                    </button>
                </div>
            </section>
        );
    }

    return (
        <div className="min-h-screen">
            <section>
                <div className="min-h-screen grid md:grid-cols-2">

                    {/* LEFT - IMAGE */}
                    <div className="min-h-screen bg-green-50 flex items-center justify-center p-12">
                        {imageSrc ? (
                            <img
                                src={imageSrc}
                                alt={getCertificationTypeLabel(report.type)}
                                className="w-full h-full object-contain "
                            />
                        ) : (
                            <div className="w-full h-80 bg-gray-200 flex items-center justify-center rounded-xl text-gray-500">
                                No image uploaded
                            </div>
                        )}
                    </div>

                    {/* RIGHT - DETAILS */}
                    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex items-center p-12">
                        <div className="w-full max-w-lg mx-auto">
                            {/* Success Badge */}
                            <div className="flex justify-center mb-8">
                                <div className="inline-flex items-center gap-3 bg-green-100 border-2 border-green-500 px-6 py-3 rounded-full shadow-sm mt-12">
                                    <div className="w-6 h-6 flex items-center justify-center bg-green-500 text-white rounded-full text-sm font-bold">✓</div>
                                    <span className="text-green-700 font-bold text-base">Successfully Verified</span>
                                </div>
                            </div>

                            {/* Title */}
                            <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-2">Report Verified</h1>
                            <p className="text-center text-gray-600 mb-10">Your report has been successfully verified and authenticated.</p>

                            {/* Details Card */}
                            <div className="">
                                <h3 className="text-lg font-bold text-gray-900 mb-6">Report Details</h3>

                                <div className="space-y-5">
                                    <div className="pb-5 border-b border-gray-200">
                                        <p className="text-sm text-gray-600 font-medium mb-1">Report Type</p>
                                        <p className="text-lg font-semibold text-gray-900">{getCertificationTypeLabel(report.type)}</p>
                                    </div>

                                    <div className="pb-5 border-b border-gray-200">
                                        <p className="text-sm text-gray-600 font-medium mb-1">Certification Number</p>
                                        <p className="text-lg font-semibold text-amber-600">{report.certificationNumber}</p>
                                    </div>

                                    {report.customerName && (
                                        <div className="pb-5 border-b border-gray-200">
                                            <p className="text-sm text-gray-600 font-medium mb-1">Customer Name</p>
                                            <p className="text-lg font-semibold text-gray-900">{report.customerName}</p>
                                        </div>
                                    )}

                                    <div>
                                        <p className="text-sm text-gray-600 font-medium mb-1">Verification Date</p>
                                        <p className="text-lg font-semibold text-gray-900">{new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="grid grid-cols-2 gap-3 mt-8">
                                <button
                                    onClick={handleDownloadImage}
                                    disabled={isDownloading || !imageSrc}
                                    className={`w-full py-3 rounded-lg text-white font-semibold transition ${isDownloading || !imageSrc
                                        ? 'bg-gray-400 cursor-not-allowed'
                                        : 'bg-amber-600 hover:bg-amber-700'
                                        }`}
                                >
                                    {isDownloading ? 'Downloading...' : (imageSrc.toLowerCase().endsWith('.pdf') ? 'Download PDF' : 'Download')}
                                </button>
                                <button
                                    onClick={() => navigate('/verify-report')}
                                    className="w-full py-3 rounded-lg text-amber-600 font-semibold border border-amber-600 hover:bg-amber-50 transition"
                                >
                                    Verify Another
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ReportVerified;