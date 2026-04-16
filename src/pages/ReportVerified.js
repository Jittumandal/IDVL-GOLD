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

    const defaultOrigin =
        typeof window !== 'undefined' && window.location?.origin
            ? window.location.origin
            : 'http://localhost:3000';
    const apiBaseUrl =
        process.env.REACT_APP_API_URL ||
        (process.env.NODE_ENV === 'development'
            ? 'http://localhost:5000/api'
            : `${defaultOrigin}/api`);
    const assetBaseUrl = apiBaseUrl.replace(/\/api\/?$/, '');
    const report = reportData;

    const fileSrc = report?.image || report?.imageUrl || report?.fileUrl || '';
    const mediaSrc = fileSrc
        ? fileSrc.startsWith('http')
            ? fileSrc
            : `${assetBaseUrl}${fileSrc}`
        : '';

    const lowerMediaSrc = mediaSrc.toLowerCase();
    const isPDF = !!lowerMediaSrc.match(/\.pdf($|\?)/i);
    const isImage = !!lowerMediaSrc.match(/\.(jpg|jpeg|png|webp|gif)$/i);


    useEffect(() => {
        const fetchReportByCert = async () => {
            const params = new URLSearchParams(location.search);
            const certNumber = params.get('certNumber');
            const reportType = params.get('reportType');

            if (!certNumber) return;

            try {
                const result = await verifyReportAPI({
                    certificationNumber: certNumber,
                    reportType: reportType || '',
                });
                setReportData(result);
            } catch (error) {
                setFetchError(error.message || 'Report not found.');
            }
        };

        if (!report) {
            fetchReportByCert();
        }
    }, [location.search, report]);

    const handleDownloadFile = async () => {
        if (!mediaSrc) return;

        setIsDownloading(true);

        try {
            const response = await fetch(mediaSrc);
            if (!response.ok) {
                throw new Error(`Download failed with status ${response.status}`);
            }

            const blob = await response.blob();
            const blobUrl = window.URL.createObjectURL(blob);
            const link = document.createElement('a');

            let extension = 'bin';
            if (blob.type.includes('pdf') || mediaSrc.toLowerCase().includes('.pdf')) {
                extension = 'pdf';
            } else if (blob.type.includes('png')) {
                extension = 'png';
            } else if (blob.type.includes('webp')) {
                extension = 'webp';
            } else if (blob.type.includes('jpeg') || blob.type.includes('jpg')) {
                extension = 'jpg';
            }

            link.href = blobUrl;
            link.download = `${report.certificationNumber || 'report-file'}.${extension}`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            window.URL.revokeObjectURL(blobUrl);
        } catch (error) {
            console.error('Download error:', error);
            alert('Error downloading file. Please try again.');
        } finally {
            setIsDownloading(false);
        }
    };

    if (!report) {
        return (
            <section className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
                <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg text-center max-w-xs md:max-w-md w-full">
                    <div className="text-red-600 mb-4 font-medium text-sm md:text-base">
                        {fetchError || 'Report not found. Please verify again.'}
                    </div>

                    <button
                        onClick={() => navigate('/verify-report')}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 md:px-6 py-2 md:py-2 rounded-lg transition text-sm md:text-base"
                    >
                        Back to Verify
                    </button>
                </div>
            </section>
        );
    }

    return (
        <div className="min-h-screen bg-white">
            <section className='reportshowcase'>
                <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-0">

                    {/* LEFT - FILE PREVIEW - Smaller on mobile, full on desktop */}
                    <div className="h-64 md:min-h-screen bg-green-50 flex items-center justify-center p-4 md:p-12 order-2 md:order-1">
                        {mediaSrc ? (
                            isImage ? (
                                <img
                                    src={mediaSrc}
                                    alt={getCertificationTypeLabel(report.type)}
                                    className="w-full h-full object-contain max-w-md"
                                />
                            ) : isPDF ? (
                                <object
                                    data={mediaSrc}
                                    type="application/pdf"
                                    className="w-full h-full rounded-xl border overflow-hidden"
                                >
                                    <div className="flex flex-col items-center justify-center h-full text-center p-4">
                                        <p className="font-semibold text-gray-900 mb-2">PDF Preview</p>
                                        <a
                                            href={mediaSrc}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-amber-600 underline"
                                        >
                                            Open PDF in new tab
                                        </a>
                                    </div>
                                </object>
                            ) : (
                                <div className="w-full h-64 md:h-full bg-gray-200 flex flex-col items-center justify-center rounded-xl text-gray-500 text-sm md:text-base">
                                    <p className="mb-3">Preview not available for this file type.</p>
                                    <a
                                        href={mediaSrc}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-amber-600 underline"
                                    >
                                        Open file
                                    </a>
                                </div>
                            )
                        ) : (
                            <div className="w-full h-64 md:h-full bg-gray-200 flex items-center justify-center rounded-xl text-gray-500 text-sm md:text-base">
                                No file uploaded
                            </div>
                        )}
                    </div>

                    {/* RIGHT - DETAILS & ACTIONS */}
                    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex items-center px-4 sm:px-6 md:px-8 lg:px-12 py-8 md:py-0 order-1 md:order-2">
                        <div className="w-full max-w-sm md:max-w-lg mx-auto">
                            {/* Success Badge */}
                            <div className="flex justify-center mb-4 md:mb-6">
                                <div className="inline-flex items-center gap-2 md:gap-3 bg-green-100 border-2 border-green-500 px-4 md:px-6 py-2 md:py-2.5 rounded-full shadow-sm">
                                    <div className="w-5 h-5 md:w-6 md:h-6 flex items-center justify-center bg-green-500 text-white rounded-full text-xs md:text-sm font-bold">✓</div>
                                    <span className="text-green-700 font-bold text-sm md:text-base">Successfully Verified</span>
                                </div>
                            </div>

                            {/* Title */}
                            <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-extrabold text-center text-gray-900 mb-1 md:mb-2">Report Verified</h1>
                            <p className="text-center text-gray-600 text-xs md:text-sm lg:text-base mb-6 md:mb-8">Your report has been successfully verified and authenticated by IDVL.</p>

                            {/* Details Card */}
                            <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-gray-100 mb-6 md:mb-8">
                                <h3 className="text-base md:text-lg font-bold text-gray-900 mb-4 md:mb-6">Report Details</h3>

                                <div className="space-y-3 md:space-y-4">
                                    <div className="pb-3 md:pb-4 border-b border-gray-200">
                                        <p className="text-xs md:text-sm text-gray-500 font-medium mb-1">Report Type</p>
                                        <p className="text-sm md:text-base font-semibold text-gray-900">{getCertificationTypeLabel(report.type)}</p>
                                    </div>

                                    <div className="pb-3 md:pb-4 border-b border-gray-200">
                                        <p className="text-xs md:text-sm text-gray-500 font-medium mb-1">Certification Number</p>
                                        <p className="text-sm md:text-base font-mono font-bold text-amber-600">{report.certificationNumber}</p>
                                    </div>

                                    {report.customerName && (
                                        <div className="pb-3 md:pb-4 border-b border-gray-200">
                                            <p className="text-xs md:text-sm text-gray-500 font-medium mb-1">Customer Name</p>
                                            <p className="text-sm md:text-base font-semibold text-gray-900">{report.customerName}</p>
                                        </div>
                                    )}

                                    {report.laboratory && (
                                        <div className="pb-3 md:pb-4 border-b border-gray-200">
                                            <p className="text-xs md:text-sm text-gray-500 font-medium mb-1">Laboratory</p>
                                            <p className="text-sm md:text-base font-semibold text-gray-900">{report.laboratory}</p>
                                        </div>
                                    )}

                                    <div>
                                        <p className="text-xs md:text-sm text-gray-500 font-medium mb-1">Verification Date</p>
                                        <p className="text-sm md:text-base font-semibold text-gray-900">
                                            {new Date().toLocaleDateString('en-US', {
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric'
                                            })}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3 mb-4">
                                <button
                                    onClick={handleDownloadFile}
                                    disabled={isDownloading || !mediaSrc}
                                    className={`w-full py-2 md:py-3 rounded-lg text-white font-semibold text-sm md:text-base transition ${isDownloading || !mediaSrc
                                        ? 'bg-gray-400 cursor-not-allowed'
                                        : 'bg-amber-600 hover:bg-amber-700 active:scale-95'
                                        }`}
                                >
                                    {isDownloading ? 'Downloading...' : (isPDF ? 'Download PDF' : 'Download')}
                                </button>
                                <button
                                    onClick={() => navigate('/verify-report')}
                                    className="w-full py-2 md:py-2.5 lg:py-3 px-3 md:px-4 rounded-lg text-amber-600 font-semibold text-xs md:text-sm lg:text-base border border-amber-600 hover:bg-amber-50 active:scale-95 transition"
                                >
                                    Verify Another
                                </button>
                            </div>

                            {/* Back Button */}
                            <button
                                onClick={() => navigate('/verify-report')}
                                className="w-full py-2 md:py-2.5 text-xs md:text-sm text-gray-600 hover:text-gray-900 transition font-medium"
                            >
                                ← Back to Verification
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ReportVerified;