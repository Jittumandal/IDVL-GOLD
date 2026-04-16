// Load environment variables FIRST
const dotenv = require('dotenv');
dotenv.config();

const { connectDB, sequelize } = require('./config/database');
const Report = require('./models/Report');

const seedData = async () => {
  try {
    // Connect to database
    await connectDB();

    // Clear existing data
    await Report.destroy({ where: {} });
    console.log('Cleared existing reports');

    // Sample data
    const reports = [
      {
        type: 'goldTesting',
        certificationNumber: '5152',
        image: 'https://via.placeholder.com/300x400?text=Certificate+5152',
        laboratory: 'IDVL Testing Laboratory',
        customerName: 'Shyam Patel',
        date: '2024-02-20',
        productType: 'Ring',
        weight: 8.5,
        goldComposition: 91.5,
        silverComposition: 5.2,
        copperComposition: 3.0,
        otherComposition: 0.3,
        testMethod: 'XRF (X-Ray Fluorescence)',
        machineDeviation: '±0.5%',
        complianceNote: 'The article is in compliance with applicable standards',
        details: {},
      },
      {
        type: 'goldTesting',
        certificationNumber: '5153',
        image: 'https://via.placeholder.com/300x400?text=Certificate+5153',
        laboratory: 'IDVL Testing Laboratory',
        customerName: 'Amit Kumar',
        date: '2024-02-18',
        productType: 'Chain',
        weight: 12.75,
        goldComposition: 91.8,
        silverComposition: 4.8,
        copperComposition: 3.2,
        otherComposition: 0.2,
        testMethod: 'XRF (X-Ray Fluorescence)',
        machineDeviation: '±0.5%',
        complianceNote: 'The article is in compliance with applicable standards',
        details: {},
      },
      {
        type: 'goldTesting',
        certificationNumber: '5154',
        image: 'https://via.placeholder.com/300x400?text=Certificate+5154',
        laboratory: 'IDVL Testing Laboratory',
        customerName: 'Neha Singh',
        date: '2024-02-15',
        productType: 'Bangle',
        weight: 28.5,
        goldComposition: 91.2,
        silverComposition: 5.5,
        copperComposition: 3.1,
        otherComposition: 0.2,
        testMethod: 'XRF (X-Ray Fluorescence)',
        machineDeviation: '±0.5%',
        complianceNote: 'The article is in compliance with applicable standards',
        details: {},
      },
      {
        type: 'goldTesting',
        certificationNumber: '5155',
        image: 'https://via.placeholder.com/300x400?text=Certificate+5155',
        laboratory: 'IDVL Testing Laboratory',
        customerName: 'Ravi Verma',
        date: '2024-02-10',
        productType: 'Earring',
        weight: 4.25,
        goldComposition: 92.0,
        silverComposition: 4.5,
        copperComposition: 3.3,
        otherComposition: 0.2,
        testMethod: 'XRF (X-Ray Fluorescence)',
        machineDeviation: '±0.5%',
        complianceNote: 'The article is in compliance with applicable standards',
        details: {},
      },
      {
        type: 'goldTesting',
        certificationNumber: '5156',
        image: 'https://via.placeholder.com/300x400?text=Certificate+5156',
        laboratory: 'IDVL Testing Laboratory',
        customerName: 'Pooja Shah',
        date: '2024-02-08',
        productType: 'Pendant',
        weight: 6.5,
        goldComposition: 91.5,
        silverComposition: 5.0,
        copperComposition: 3.3,
        otherComposition: 0.2,
        testMethod: 'XRF (X-Ray Fluorescence)',
        machineDeviation: '±0.5%',
        complianceNote: 'The article is in compliance with applicable standards',
        details: {},
      },
    ];

    // Create records
    await Report.bulkCreate(reports);
    console.log(`✅ Seeded ${reports.length} certificates successfully`);

    // Verify data was inserted
    const count = await Report.count();
    console.log(`📊 Total reports in database: ${count}`);

    process.exit(0);
  } catch (error) {
    console.error('❌ Seeding failed:', error.message);
    process.exit(1);
  }
};

// Run seeder
seedData();
