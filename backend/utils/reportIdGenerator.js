const Report = require('../models/Report');

// Certificate type prefixes
const TYPE_PREFIXES = {
  goldTesting: 'XRF-GOLD',
  silverTesting: 'XRF-SILVER',
  platinumTesting: 'XRF-PLAT',
  diamondGrading: 'DIA-GRAD',
  gemstoneGrading: 'GEM-GRAD',
  jewelryAppraisal: 'JWL-APPR',
  hallmarkCertificate: 'HALLMARK',
  labGrownDiamond: 'LAB-DIA',
  pearlGrading: 'PEARL-GRD',
  metalAssay: 'METAL-ASY',
};

/**
 * Generate a unique certificate number based on type
 * Format: PREFIX-YYYYMMDD-XXXX
 * Example: XRF-GOLD-20260302-0001
 */
async function generateCertificationNumber(type) {
  const prefix = TYPE_PREFIXES[type] || 'CERT';
  
  // Get current date in YYYYMMDD format
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const dateStr = `${year}${month}${day}`;
  
  // Find the last certificate number for this type and date
  const lastReport = await Report.findOne({
    where: {
      certificationNumber: {
        [require('sequelize').Op.like]: `${prefix}-${dateStr}-%`
      }
    },
    order: [['certificationNumber', 'DESC']],
  });
  
  let sequence = 1;
  if (lastReport) {
    // Extract sequence number from last cert number
    const parts = lastReport.certificationNumber.split('-');
    const lastSequence = parseInt(parts[parts.length - 1], 10);
    if (!isNaN(lastSequence)) {
      sequence = lastSequence + 1;
    }
  }
  
  // Generate new certificate number with 4-digit sequence
  const sequenceStr = String(sequence).padStart(4, '0');
  return `${prefix}-${dateStr}-${sequenceStr}`;
}

/**
 * Get human-readable type name from type code
 */
function getTypeName(typeCode) {
  const typeNames = {
    goldTesting: 'XRF Gold Testing Certificate',
    silverTesting: 'XRF Silver Testing Certificate',
    platinumTesting: 'XRF Platinum Testing Certificate',
    diamondGrading: 'Diamond Grading Report',
    gemstoneGrading: 'Gemstone Grading Report',
    jewelryAppraisal: 'Jewelry Appraisal Certificate',
    hallmarkCertificate: 'Hallmark Certificate',
    labGrownDiamond: 'Lab-Grown Diamond Certificate',
    pearlGrading: 'Pearl Grading Report',
    metalAssay: 'Metal Assay Report',
  };
  
  return typeNames[typeCode] || typeCode;
}

module.exports = {
  generateCertificationNumber,
  getTypeName,
  TYPE_PREFIXES,
};
