import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { createReportWithImage } from '../utils/api';
import { isAdminAuthenticated, removeAdminToken, getAdminInfo } from '../utils/auth';
import { CERTIFICATION_TYPES, getCertificationTypeLabel } from '../utils/certificationTypes';

function UploadImage() {
  const navigate = useNavigate();
  const [reportType, setReportType] = useState('');
  const [certificationNumber, setCertificationNumber] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState({ type: '', message: '' });
  const [previewUrl, setPreviewUrl] = useState('');
  const [createdReports, setCreatedReports] = useState([]);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [lastCreatedReport, setLastCreatedReport] = useState(null);

  const adminInfo = getAdminInfo();
  const apiBaseUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';
  const assetBaseUrl = apiBaseUrl.replace(/\/api\/?$/, '');

  useEffect(() => {
    if (!isAdminAuthenticated()) {
      navigate('/login');
    }
  }, [navigate]);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files?.[0] || null;
    setFile(selectedFile);

    if (selectedFile) {
      setPreviewUrl(URL.createObjectURL(selectedFile));
    } else {
      setPreviewUrl('');
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const trimmedCertNumber = certificationNumber.trim();
    const trimmedCustomerName = customerName.trim();

    if (!reportType || !trimmedCertNumber || !trimmedCustomerName || !file) {
      setStatus({ type: 'error', message: 'All fields are required.' });
      return;
    }

    try {
      setStatus({ type: '', message: 'Uploading...' });

      const result = await createReportWithImage(
        {
          type: reportType,
          certificationNumber: trimmedCertNumber,
          customerName: trimmedCustomerName,
        },
        file
      );

      setLastCreatedReport(result.report);
      setCreatedReports((prev) => [result.report, ...prev]);

      setReportType('');
      setCertificationNumber('');
      setCustomerName('');
      setFile(null);
      setPreviewUrl('');
      setStatus({ type: '', message: '' });

      setShowSuccessModal(true);
    } catch (error) {
      setStatus({ type: 'error', message: error.message });
    }
  };

  return (
    <div className="min-h-screen">
      <section>
        <div className="min-h-screen grid md:grid-cols-2">

          {/* LEFT: form (full-height) */}
          <div className="min-h-screen bg-white flex items-center p-12">
            <div className="w-full max-w-lg">
              <h1 className="text-3xl md:text-4xl font-bold text-amber-600 text-center mb-4">Upload File</h1>
              <p className="text-center text-gray-600 mb-6">Select certification type, enter certificate number and customer name, then upload the certificate file (image or PDF).</p>

              {status.message && (
                <div className={`mb-4 p-3 rounded text-sm font-medium ${status.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                  {status.message}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">

                <div>
                  <label className="block text-sm text-gray-700 mb-2">Certification Type</label>
                  <select value={reportType} onChange={(e) => setReportType(e.target.value)} className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-white" required>
                    <option value="">Select Type</option>
                    {CERTIFICATION_TYPES.map((type) => (
                      <option key={type.value} value={type.value}>{type.label}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-gray-700 mb-2">Customer Name</label>
                  <input type="text" value={customerName} onChange={(e) => setCustomerName(e.target.value)} placeholder="Enter customer name" className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-white" required />
                </div>

                <div>
                  <label className="block text-sm text-gray-700 mb-2">Certificate Number</label>
                  <input type="text" value={certificationNumber} onChange={(e) => setCertificationNumber(e.target.value.toUpperCase())} placeholder="Enter certificate number" className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-white" required />
                </div>

                <div>
                  <label className="block text-sm text-gray-700 mb-2">Select File</label>
                  <input
                    type="file"
                    accept="image/*,application/pdf"
                    onChange={handleFileChange}
                    className="w-full"
                    required
                  />
                </div>

                {previewUrl && (
                  <div>
                    {file && file.type === 'application/pdf' ? (
                      <div className="w-full max-h-64 flex items-center justify-center border rounded-lg bg-gray-100">
                        <a
                          href={previewUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 underline"
                        >
                          View PDF
                        </a>
                      </div>
                    ) : (
                      <img src={previewUrl} alt="Preview" className="w-full max-h-64 object-contain rounded-lg border" />
                    )}
                  </div>
                )}

                <button type="submit" className={`w-full py-3 rounded-lg text-white font-semibold ${'bg-amber-600 hover:bg-amber-700'}`}>
                  Create Report
                </button>
              </form>
            </div>
          </div>

          {/* RIGHT: info & created reports */}
          <div className="min-h-screen bg-emerald-50 flex items-center p-12">
            <div className="w-full max-w-2xl mx-auto text-center">
              {createdReports.length === 0 && (
                <img src="/img/certificationview.svg" alt="Report" className="mx-auto mb-8 w-96 h-96 object-contain" />
              )}
              <h2 className="text-4xl font-extrabold mb-4">View Created Reports</h2>
              <p className="text-gray-700 mb-6">Recently created reports will appear here. Click a report to preview or manage it.</p>

              {createdReports.length > 0 ? (
                <div className="space-y-6 max-h-[500px] overflow-y-auto pr-2 text-left">
                  {createdReports.map((report) => (
                    <div key={report.id || report.certificationNumber} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                      {report.image && (
                        <img src={report.image.startsWith('http') ? report.image : `${assetBaseUrl}${report.image}`} alt={getCertificationTypeLabel(report.type)} className="w-full h-40 object-cover rounded-lg mb-6" />
                      )}
                      <div className="space-y-5">
                        <div className="pb-5 border-b border-gray-200">
                          <p className="text-sm text-gray-600 font-medium mb-1">Report Type</p>
                          <p className="text-lg font-semibold text-gray-900">{getCertificationTypeLabel(report.type)}</p>
                        </div>

                        <div className="pb-5 border-b border-gray-200">
                          <p className="text-sm text-gray-600 font-medium mb-1">Certification Number</p>
                          <p className="text-lg font-semibold text-amber-600">{report.certificationNumber}</p>
                        </div>

                        <div>
                          <p className="text-sm text-gray-600 font-medium mb-1">Customer Name</p>
                          <p className="text-lg font-semibold text-gray-900">{report.customerName || '-'}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-6 bg-white rounded-lg shadow-sm">
                  <p className="text-gray-700">No reports created yet.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 relative">
            <button
              onClick={() => setShowSuccessModal(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
              aria-label="Close modal"
            >
              ×
            </button>
            <h2 className="text-2xl font-bold text-amber-600 mb-4">Report Created</h2>
            <p className="text-gray-700 mb-4">The report has been successfully uploaded.</p>
            {lastCreatedReport && (
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <p className="text-sm text-gray-600">Certification Number:</p>
                <p className="text-lg font-semibold text-amber-600">{lastCreatedReport.certificationNumber}</p>
              </div>
            )}
            <button
              onClick={() => setShowSuccessModal(false)}
              className="w-full py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-semibold"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default UploadImage;