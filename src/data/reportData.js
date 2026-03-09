// Mock report data for verification
import certificationview from "../images/certificationview.png";
const reportDatabase = {

    goldtesting: {
        '5152': {
            type: 'IDVL Gold  Certificate',
            certificationNumber: '5152',
            image: certificationview,
            laboratory: 'Trueassay Lab Pvt Ltd',
            customerName: 'Shyam Patel',
            date: '25/02/2023',
            details: {
                productName: 'Ring',
                grossWeight: '5.260 gm',
                productKarat: '22.02',
                goldPercentage: '91.75%',
                silverPercentage: '6.70%',
                copperPercentage: '1.29%',
                otherElements: '0.00%'
            },
            composition: {
                gold: {
                    percentage: 91.75,
                    unit: '%'
                },
                silver: {
                    percentage: 6.70,
                    unit: '%'
                },
                copper: {
                    percentage: 1.29,
                    unit: '%'
                },
                other: {
                    percentage: 0.00,
                    unit: '%'
                }
            },
            specifications: {
                testMethod: 'XRF (X-Ray Fluorescence)',
                machineDeviation: '±0.50%',
                complianceNote: 'Maximum deviation +/- 0.50% as per machine specification'
            }
        },
        '5153': {
            type: 'IDVL Gold  Certificate',
            certificationNumber: '5153',
            image: 'https://d3jbu7vaxvlagf.cloudfront.net/small/v2/category_media/custom_img_16861364797203.jpeg',
            laboratory: 'S. S. Jewellers',
            customerName: 'Amit Kumar',
            date: '26/02/2023',
            details: {
                productName: 'Chain',
                grossWeight: '12.450 gm',
                productKarat: '21.60',
                goldPercentage: '90.00%',
                silverPercentage: '7.50%',
                copperPercentage: '2.50%',
                otherElements: '0.00%'
            },
            composition: {
                gold: {
                    percentage: 90.00,
                    unit: '%'
                },
                silver: {
                    percentage: 7.50,
                    unit: '%'
                },
                copper: {
                    percentage: 2.50,
                    unit: '%'
                },
                other: {
                    percentage: 0.00,
                    unit: '%'
                }
            },
            specifications: {
                testMethod: 'XRF (X-Ray Fluorescence)',
                machineDeviation: '±0.50%',
                complianceNote: 'Maximum deviation +/- 0.50% as per machine specification'
            }
        },
        '5154': {
            type: 'IDVL Gold  Certificate',
            certificationNumber: '5154',
            image: 'https://d3jbu7vaxvlagf.cloudfront.net/small/v2/category_media/custom_img_16861363387481.jpeg',
            laboratory: 'Trueassay Lab Pvt Ltd',
            customerName: 'Neha Singh',
            date: '28/02/2023',
            details: {
                productName: 'Bangle',
                grossWeight: '18.120 gm',
                productKarat: '22.00',
                goldPercentage: '91.60%',
                silverPercentage: '6.90%',
                copperPercentage: '1.50%',
                otherElements: '0.00%'
            },
            composition: {
                gold: {
                    percentage: 91.60,
                    unit: '%'
                },
                silver: {
                    percentage: 6.90,
                    unit: '%'
                },
                copper: {
                    percentage: 1.50,
                    unit: '%'
                },
                other: {
                    percentage: 0.00,
                    unit: '%'
                }
            },
            specifications: {
                testMethod: 'XRF (X-Ray Fluorescence)',
                machineDeviation: '±0.50%',
                complianceNote: 'Maximum deviation +/- 0.50% as per machine specification'
            }
        },
        '5155': {
            type: 'IDVL Gold  Certificate',
            certificationNumber: '5155',
            image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=600&q=80',
            laboratory: 'S. S. Jewellers',
            customerName: 'Ravi Verma',
            date: '01/03/2023',
            details: {
                productName: 'Earring',
                grossWeight: '6.840 gm',
                productKarat: '18.50',
                goldPercentage: '77.10%',
                silverPercentage: '14.20%',
                copperPercentage: '8.70%',
                otherElements: '0.00%'
            },
            composition: {
                gold: {
                    percentage: 77.10,
                    unit: '%'
                },
                silver: {
                    percentage: 14.20,
                    unit: '%'
                },
                copper: {
                    percentage: 8.70,
                    unit: '%'
                },
                other: {
                    percentage: 0.00,
                    unit: '%'
                }
            },
            specifications: {
                testMethod: 'XRF (X-Ray Fluorescence)',
                machineDeviation: '±0.50%',
                complianceNote: 'Maximum deviation +/- 0.50% as per machine specification'
            }
        },
        '5156': {
            type: 'IDVL Gold  Certificate',
            certificationNumber: '5156',
            image: 'https://d3jbu7vaxvlagf.cloudfront.net/small/v2/category_media/custom_img_16690335886225.png',
            laboratory: 'S. S. Jewellers',
            customerName: 'Pooja Shah',
            date: '05/03/2023',
            details: {
                productName: 'Pendant',
                grossWeight: '3.970 gm',
                productKarat: '22.10',
                goldPercentage: '92.10%',
                silverPercentage: '6.20%',
                copperPercentage: '1.70%',
                otherElements: '0.00%'
            },
            composition: {
                gold: {
                    percentage: 92.10,
                    unit: '%'
                },
                silver: {
                    percentage: 6.20,
                    unit: '%'
                },
                copper: {
                    percentage: 1.70,
                    unit: '%'
                },
                other: {
                    percentage: 0.00,
                    unit: '%'
                }
            },
            specifications: {
                testMethod: 'XRF (X-Ray Fluorescence)',
                machineDeviation: '±0.50%',
                complianceNote: 'Maximum deviation +/- 0.50% as per machine specification'
            }
        }
    }
};

// Function to verify and retrieve report data
export const verifyReport = (reportType, certificationNumber) => {
    if (!reportType || !certificationNumber) {
        return null;
    }

    // Convert reportType to lowercase and remove spaces/special chars
    const typeKey = reportType.toLowerCase().replace(/[\s-]/g, '');

    if (reportDatabase[typeKey] && reportDatabase[typeKey][certificationNumber]) {
        return reportDatabase[typeKey][certificationNumber];
    }

    return null;
};

// Function to get all available certification numbers for a report type
export const getAvailableCertifications = (reportType) => {
    const typeKey = reportType.toLowerCase().replace(/\s+/g, '');
    if (reportDatabase[typeKey]) {
        return Object.keys(reportDatabase[typeKey]);
    }
    return [];
};

export default reportDatabase;
