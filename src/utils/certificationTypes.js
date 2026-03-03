export const CERTIFICATION_TYPES = [
  { value: 'goldTesting', label: 'XRF Gold Certificate' },
  { value: 'silverTesting', label: 'XRF Silver Certificate' },
  { value: 'platinumTesting', label: 'XRF Platinum Certificate' },
  { value: 'diamondGrading', label: 'Diamond Grading Report' },
  { value: 'gemstoneGrading', label: 'Gemstone Grading Report' },
  { value: 'jewelryAppraisal', label: 'Jewelry Appraisal Certificate' },
  { value: 'hallmarkCertificate', label: 'Hallmark Certificate' },
  { value: 'labGrownDiamond', label: 'Lab-Grown Diamond Certificate' },
  { value: 'pearlGrading', label: 'Pearl Grading Report' },
  { value: 'metalAssay', label: 'Metal Assay Report' },
];

export const getCertificationTypeLabel = (typeValue) => {
  const type = CERTIFICATION_TYPES.find((item) => item.value === typeValue);
  return type?.label || typeValue;
};
