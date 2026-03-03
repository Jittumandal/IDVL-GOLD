// PDF Generation Utility
// Using a simple HTML-to-PDF approach with jsPDF-like functionality

export const generateAndDownloadPDF = (report) => {
  // Create HTML content for the PDF
  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <style>
        body {
          font-family: Arial, sans-serif;
          color: #333;
          margin: 0;
          padding: 20px;
          background-color: #f5f5f5;
        }
        .pdf-container {
          max-width: 800px;
          background-color: white;
          padding: 40px;
          margin: 0 auto;
          box-shadow: 0 0 10px rgba(0,0,0,0.1);
        }
        .header {
          text-align: center;
          border-bottom: 3px solid #b08d3b;
          padding-bottom: 20px;
          margin-bottom: 30px;
        }
        .logo-section {
          font-size: 24px;
          font-weight: bold;
          color: #b08d3b;
          margin-bottom: 10px;
        }
        .title {
          font-size: 28px;
          font-weight: bold;
          color: #2c2418;
          margin-bottom: 10px;
        }
        .subtitle {
          font-size: 14px;
          color: #666;
          margin-bottom: 20px;
        }
        .verification-badge {
          background: linear-gradient(135deg, #d4f1d4 0%, #e8f5e9 100%);
          border-left: 4px solid #4caf50;
          padding: 15px;
          margin: 20px 0;
          border-radius: 5px;
        }
        .badge-content {
          display: flex;
          align-items: center;
          gap: 15px;
        }
        .badge-icon {
          font-size: 30px;
          font-weight: bold;
          color: #4caf50;
        }
        .badge-text {
          font-size: 14px;
        }
        .badge-text strong {
          color: #4caf50;
          font-size: 16px;
        }
        .section {
          margin-bottom: 30px;
        }
        .section-title {
          font-size: 16px;
          font-weight: bold;
          color: #2c2418;
          border-bottom: 2px solid #b08d3b;
          padding-bottom: 10px;
          margin-bottom: 15px;
        }
        .info-row {
          display: flex;
          justify-content: space-between;
          padding: 10px 0;
          border-bottom: 1px solid #eee;
        }
        .info-label {
          font-weight: bold;
          color: #666;
          width: 40%;
        }
        .info-value {
          color: #2c2418;
          width: 60%;
          text-align: right;
        }
        .specs-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 15px;
          margin-top: 15px;
        }
        .spec-item {
          padding: 10px;
          background-color: #fbf9f6;
          border-radius: 5px;
          border-left: 3px solid #b08d3b;
        }
        .spec-label {
          font-weight: bold;
          color: #666;
          font-size: 12px;
        }
        .spec-value {
          color: #2c2418;
          font-weight: 600;
          margin-top: 5px;
        }
        .footer {
          border-top: 2px solid #b08d3b;
          padding-top: 20px;
          margin-top: 30px;
          text-align: center;
          font-size: 12px;
          color: #666;
        }
        .certification-number {
          background-color: #fbf9f6;
          padding: 15px;
          border-radius: 5px;
          text-align: center;
          margin: 20px 0;
          border: 2px solid #b08d3b;
        }
        .certification-number-label {
          font-size: 12px;
          color: #666;
          font-weight: bold;
        }
        .certification-number-value {
          font-size: 24px;
          font-weight: bold;
          color: #b08d3b;
          margin-top: 5px;
          font-family: 'Courier New', monospace;
        }
        .divider {
          border: none;
          border-top: 1px dashed #ccc;
          margin: 20px 0;
        }
        @media print {
          body {
            background-color: white;
            padding: 0;
          }
          .pdf-container {
            box-shadow: none;
            max-width: 100%;
            padding: 0;
          }
        }
      </style>
    </head>
    <body>
      <div class="pdf-container">
        <!-- Header Section -->
        <div class="header">
          <div class="logo-section">IDVL</div>
          <div class="title">CERTIFIED REPORT</div>
          <div class="subtitle">International Diamond Verification Laboratory</div>
        </div>

        <!-- Verification Badge -->
        <div class="verification-badge">
          <div class="badge-content">
            <div class="badge-icon">✓</div>
            <div class="badge-text">
              <strong>Report Verified</strong><br>
              Date: ${new Date().toLocaleDateString()}
            </div>
          </div>
        </div>

        <!-- Certification Number -->
        <div class="certification-number">
          <div class="certification-number-label">CERTIFICATION NUMBER</div>
          <div class="certification-number-value">${report.certificationNumber}</div>
        </div>

        <!-- Report Type Section -->
        <div class="section">
          <div class="section-title">REPORT INFORMATION</div>
          <div class="info-row">
            <span class="info-label">Report Type:</span>
            <span class="info-value">${report.type}</span>
          </div>
          <div class="info-row">
            <span class="info-label">Certification Date:</span>
            <span class="info-value">${new Date().toLocaleDateString()}</span>
          </div>
          <div class="info-row">
            <span class="info-label">Verification Time:</span>
            <span class="info-value">${new Date().toLocaleTimeString()}</span>
          </div>
        </div>

        <hr class="divider">

        <!-- Specifications Section -->
        <div class="section">
          <div class="section-title">SPECIFICATIONS</div>
          <div class="specs-grid">
            ${Object.entries(report.details)
              .map(
                ([key, value]) => `
              <div class="spec-item">
                <div class="spec-label">${key
                  .charAt(0)
                  .toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}</div>
                <div class="spec-value">${value}</div>
              </div>
            `
              )
              .join('')}
          </div>
        </div>

        <hr class="divider">

        <!-- Authentication Section -->
        <div class="section">
          <div class="section-title">AUTHENTICATION & VERIFICATION</div>
          <div style="font-size: 13px; line-height: 1.8; color: #555;">
            <p>
              This document certifies that the above-mentioned item has been thoroughly examined 
              and verified by the International Diamond Verification Laboratory (IDVL). All specifications 
              and characteristics have been documented and authenticated according to international standards.
            </p>
            <p>
              This report ensures the authenticity, transparency, and trust of the certified item. 
              The certification number above can be used to verify this report against the official IDVL database.
            </p>
            <p style="margin-top: 20px; font-style: italic;">
              For additional information and authentication, please visit our official website or contact IDVL directly.
            </p>
          </div>
        </div>

        <!-- Footer -->
        <div class="footer">
          <p>This is an official IDVL Certified Report</p>
          <p>Generated on: ${new Date().toLocaleString()}</p>
          <p style="margin-top: 15px; border-top: 1px solid #ccc; padding-top: 10px;">
            Document ID: ${report.certificationNumber}-${Date.now()}
          </p>
        </div>
      </div>
    </body>
    </html>
  `;

  // Create blob and download
  const blob = new Blob([htmlContent], { type: 'application/pdf' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `IDVL_Report_${report.certificationNumber}_${Date.now()}.pdf`;
  document.body.appendChild(a);
  a.click();
  window.URL.revokeObjectURL(url);
  document.body.removeChild(a);
};

// Alternative: Using canvas-based PDF generation with jsPDF library
// This is a fallback approach using native HTML rendering

export const generatePDFWithCanvas = (report) => {
  // Create a hidden iframe to render the PDF
  const iframe = document.createElement('iframe');
  iframe.style.display = 'none';
  document.body.appendChild(iframe);

  const htmlContent = createPDFContent(report);
  
  iframe.contentDocument.open();
  iframe.contentDocument.write(htmlContent);
  iframe.contentDocument.close();

  // Print to PDF
  iframe.contentWindow.print();

  setTimeout(() => {
    document.body.removeChild(iframe);
  }, 1000);
};

// Helper function to create PDF content
const createPDFContent = (report) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <title>IDVL_Report_${report.certificationNumber}</title>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        body {
          font-family: Arial, sans-serif;
          color: #333;
          padding: 20px;
        }
        .pdf-container {
          max-width: 900px;
          background-color: white;
          padding: 40px;
          margin: 0 auto;
        }
        .header {
          text-align: center;
          border-bottom: 3px solid #b08d3b;
          padding-bottom: 20px;
          margin-bottom: 30px;
        }
        .logo {
          font-size: 24px;
          font-weight: bold;
          color: #b08d3b;
          margin-bottom: 10px;
        }
        .title {
          font-size: 28px;
          font-weight: bold;
          color: #2c2418;
        }
        .subtitle {
          font-size: 14px;
          color: #666;
          margin-top: 5px;
        }
        .certification-number {
          background-color: #fbf9f6;
          padding: 20px;
          text-align: center;
          margin: 20px 0;
          border: 2px solid #b08d3b;
          border-radius: 5px;
        }
        .cert-label {
          font-size: 12px;
          color: #666;
          font-weight: bold;
        }
        .cert-value {
          font-size: 22px;
          font-weight: bold;
          color: #b08d3b;
          margin-top: 5px;
          font-family: 'Courier New', monospace;
        }
        .section {
          margin-bottom: 25px;
        }
        .section-title {
          font-size: 16px;
          font-weight: bold;
          color: #2c2418;
          border-bottom: 2px solid #b08d3b;
          padding-bottom: 10px;
          margin-bottom: 15px;
        }
        .info-row {
          display: flex;
          justify-content: space-between;
          padding: 8px 0;
          border-bottom: 1px solid #eee;
        }
        .info-label {
          font-weight: bold;
          color: #666;
        }
        .info-value {
          color: #2c2418;
        }
        .specs-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 15px;
        }
        .spec-item {
          padding: 10px;
          background-color: #fbf9f6;
          border-radius: 5px;
          border-left: 3px solid #b08d3b;
        }
        .spec-label {
          font-weight: bold;
          color: #666;
          font-size: 12px;
        }
        .spec-value {
          color: #2c2418;
          font-weight: 600;
          margin-top: 5px;
        }
        .footer {
          border-top: 2px solid #b08d3b;
          padding-top: 20px;
          margin-top: 30px;
          text-align: center;
          font-size: 12px;
          color: #666;
        }
        @media print {
          body { padding: 0; }
          .pdf-container { box-shadow: none; }
        }
      </style>
    </head>
    <body>
      <div class="pdf-container">
        <div class="header">
          <div class="logo">IDVL</div>
          <div class="title">CERTIFIED REPORT</div>
          <div class="subtitle">International Diamond Verification Laboratory</div>
        </div>

        <div class="certification-number">
          <div class="cert-label">CERTIFICATION NUMBER</div>
          <div class="cert-value">${report.certificationNumber}</div>
        </div>

        <div class="section">
          <div class="section-title">REPORT INFORMATION</div>
          <div class="info-row">
            <span class="info-label">Report Type:</span>
            <span class="info-value">${report.type}</span>
          </div>
          <div class="info-row">
            <span class="info-label">Certification Date:</span>
            <span class="info-value">${new Date().toLocaleDateString()}</span>
          </div>
          <div class="info-row">
            <span class="info-label">Verification Time:</span>
            <span class="info-value">${new Date().toLocaleTimeString()}</span>
          </div>
        </div>

        <div class="section">
          <div class="section-title">SPECIFICATIONS</div>
          <div class="specs-grid">
            ${Object.entries(report.details)
              .map(
                ([key, value]) => `
              <div class="spec-item">
                <div class="spec-label">${key
                  .charAt(0)
                  .toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}</div>
                <div class="spec-value">${value}</div>
              </div>
            `
              )
              .join('')}
          </div>
        </div>

        <div class="footer">
          <p>This is an official IDVL Certified Report</p>
          <p>Generated on: ${new Date().toLocaleString()}</p>
          <p style="margin-top: 10px;">Document ID: ${report.certificationNumber}-${Date.now()}</p>
        </div>
      </div>
    </body>
    </html>
  `;
};

// Function to generate and download Gold Testing Certificate PDF
export const generateGoldTestingPDF = (report) => {
  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <style>
        body {
          font-family: Arial, sans-serif;
          color: #333;
          margin: 0;
          padding: 20px;
          background-color: #f5f5f5;
        }
        .pdf-container {
          max-width: 900px;
          background-color: white;
          padding: 40px;
          margin: 0 auto;
          box-shadow: 0 0 10px rgba(0,0,0,0.1);
        }
        .header {
          text-align: center;
          border-bottom: 3px solid #b08d3b;
          padding-bottom: 20px;
          margin-bottom: 20px;
        }
        .logo {
          font-size: 28px;
          font-weight: bold;
          color: #b08d3b;
          margin-bottom: 10px;
        }
        .lab-name {
          font-size: 18px;
          font-weight: bold;
          color: #2c2418;
          margin-bottom: 5px;
        }
        .title {
          font-size: 24px;
          font-weight: bold;
          color: #b08d3b;
          margin: 15px 0;
        }
        .certificate-no {
          background-color: #fbf9f6;
          padding: 15px;
          text-align: center;
          border: 2px solid #b08d3b;
          border-radius: 5px;
          margin: 15px 0;
        }
        .cert-label {
          font-size: 12px;
          color: #666;
          font-weight: bold;
        }
        .cert-value {
          font-size: 22px;
          font-weight: bold;
          color: #b08d3b;
          margin-top: 5px;
          font-family: 'Courier New', monospace;
        }
        .customer-info {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin: 20px 0;
          padding: 15px;
          background-color: #fbf9f6;
          border-radius: 5px;
          border-left: 4px solid #b08d3b;
        }
        .info-item {
          display: flex;
          flex-direction: column;
        }
        .info-label {
          font-weight: bold;
          color: #666;
          font-size: 11px;
          text-transform: uppercase;
        }
        .info-value {
          color: #2c2418;
          font-weight: 600;
          margin-top: 3px;
        }
        .section {
          margin: 25px 0;
        }
        .section-title {
          font-size: 16px;
          font-weight: bold;
          color: #2c2418;
          border-bottom: 2px solid #b08d3b;
          padding-bottom: 10px;
          margin-bottom: 15px;
        }
        .composition-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 15px;
          margin: 15px 0;
        }
        .composition-item {
          padding: 12px;
          background-color: #fbf9f6;
          border-radius: 5px;
          border-left: 4px solid #b08d3b;
        }
        .comp-name {
          font-weight: bold;
          color: #666;
          font-size: 12px;
        }
        .comp-value {
          font-size: 20px;
          font-weight: bold;
          color: #b08d3b;
          margin-top: 5px;
        }
        .product-details {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 15px;
          margin: 15px 0;
        }
        .detail-item {
          padding: 10px;
          background-color: #fbf9f6;
          border-radius: 5px;
        }
        .detail-label {
          font-weight: bold;
          color: #666;
          font-size: 11px;
          text-transform: uppercase;
        }
        .detail-value {
          color: #2c2418;
          font-weight: 600;
          margin-top: 5px;
          font-size: 14px;
        }
        .compliance-note {
          background: linear-gradient(135deg, #e8f5e9 0%, #d4f1d4 100%);
          border-left: 4px solid #4caf50;
          padding: 15px;
          border-radius: 5px;
          margin: 20px 0;
          font-size: 12px;
          color: #2c2418;
          line-height: 1.6;
        }
        .footer {
          border-top: 2px solid #b08d3b;
          padding-top: 20px;
          margin-top: 30px;
          text-align: center;
          font-size: 11px;
          color: #666;
        }
        .divider {
          border: none;
          border-top: 1px dashed #ccc;
          margin: 15px 0;
        }
        @media print {
          body {
            background-color: white;
            padding: 0;
          }
          .pdf-container {
            box-shadow: none;
            max-width: 100%;
            padding: 20px;
          }
        }
      </style>
    </head>
    <body>
      <div class="pdf-container">
        <!-- Header -->
        <div class="header">
          <div class="logo">IDVL</div>
          <div class="lab-name">${report.laboratory}</div>
          <div class="title">XRF GOLD TESTING CERTIFICATE</div>
        </div>

        <!-- Certificate Number -->
        <div class="certificate-no">
          <div class="cert-label">Certificate No.</div>
          <div class="cert-value">${report.certificationNumber}</div>
        </div>

        <!-- Customer & Product Information -->
        <div class="customer-info">
          <div class="info-item">
            <span class="info-label">Customer Name</span>
            <span class="info-value">${report.customerName}</span>
          </div>
          <div class="info-item">
            <span class="info-label">Certification Date</span>
            <span class="info-value">${report.date}</span>
          </div>
          <div class="info-item">
            <span class="info-label">Product Name</span>
            <span class="info-value">${report.details.productName}</span>
          </div>
          <div class="info-item">
            <span class="info-label">Test Method</span>
            <span class="info-value">${report.specifications.testMethod}</span>
          </div>
        </div>

        <hr class="divider">

        <!-- Product Details -->
        <div class="section">
          <div class="section-title">Product Details</div>
          <div class="product-details">
            <div class="detail-item">
              <div class="detail-label">Gross Weight</div>
              <div class="detail-value">${report.details.grossWeight}</div>
            </div>
            <div class="detail-item">
              <div class="detail-label">Product Karat</div>
              <div class="detail-value">${report.details.productKarat}</div>
            </div>
          </div>
        </div>

        <hr class="divider">

        <!-- Metal Composition -->
        <div class="section">
          <div class="section-title">Metal Composition</div>
          <div class="composition-grid">
            <div class="composition-item">
              <div class="comp-name">Gold (Au)</div>
              <div class="comp-value">${report.composition.gold.percentage}%</div>
            </div>
            <div class="composition-item">
              <div class="comp-name">Silver (Ag)</div>
              <div class="comp-value">${report.composition.silver.percentage}%</div>
            </div>
            <div class="composition-item">
              <div class="comp-name">Copper (Cu)</div>
              <div class="comp-value">${report.composition.copper.percentage}%</div>
            </div>
            <div class="composition-item">
              <div class="comp-name">Other Elements</div>
              <div class="comp-value">${report.composition.other.percentage}%</div>
            </div>
          </div>
        </div>

        <hr class="divider">

        <!-- Compliance Note -->
        <div class="compliance-note">
          <strong>Note:</strong> ${report.specifications.complianceNote}
        </div>

        <!-- Footer -->
        <div class="footer">
          <p>This is an official XRF Gold Testing Certificate issued by ${report.laboratory}</p>
          <p>Generated on: ${new Date().toLocaleString()}</p>
          <p style="margin-top: 10px;">Document ID: ${report.certificationNumber}-${Date.now()}</p>
        </div>
      </div>
    </body>
    </html>
  `;

  // Create blob and download
  const blob = new Blob([htmlContent], { type: 'application/pdf' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `XRF_Gold_Testing_${report.certificationNumber}_${Date.now()}.pdf`;
  document.body.appendChild(a);
  a.click();
  window.URL.revokeObjectURL(url);
  document.body.removeChild(a);
};
