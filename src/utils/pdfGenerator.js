// Simple PDF generator utilities
// In a production app you might use jsPDF or pdf-lib, but for now
// we provide basic stubs that download the JSON representation
// of the report as a .pdf file.

export function generateAndDownloadPDF(report) {
    try {
        const content = JSON.stringify(report, null, 2);
        const blob = new Blob([content], { type: "application/pdf" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `report_${report.certificationNumber || ""}.pdf`;
        a.click();
        URL.revokeObjectURL(url);
    } catch (err) {
        console.error("PDF generation failed", err);
        throw err;
    }
}

export function generateGoldTestingPDF(report) {
    // for now, same as generic generator; could add custom formatting
    return generateAndDownloadPDF(report);
}
