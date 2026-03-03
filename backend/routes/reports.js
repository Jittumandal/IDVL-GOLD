const express = require('express');
const router = express.Router();
const Report = require('../models/Report');
const { Op } = require('sequelize');
const { generateCertificationNumber, getTypeName } = require('../utils/reportIdGenerator');
const { verifyAdminToken } = require('../middleware/auth');

/**
 * POST /api/reports/generate-number
 * Generate a new certification number for a given type
 */
router.post('/generate-number', verifyAdminToken, async (req, res) => {
  try {
    const { type } = req.body;
    
    if (!type) {
      return res.status(400).json({ error: 'Certification type is required' });
    }
    
    const certificationNumber = await generateCertificationNumber(type);
    
    return res.status(200).json({
      success: true,
      certificationNumber,
      type,
      typeName: getTypeName(type),
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * POST /api/reports/create-with-image
 * Create a new report with auto-generated certification number and image
 */
router.post('/create-with-image', verifyAdminToken, async (req, res) => {
  try {
    const { type, certificationNumber, customerName, laboratory, image, ...otherData } = req.body;
    
    if (!type || !certificationNumber) {
      return res.status(400).json({ error: 'Certification type and certificate number are required' });
    }

    const normalizedCertNumber = String(certificationNumber).trim().toUpperCase();

    const existing = await Report.findOne({
      where: { certificationNumber: normalizedCertNumber },
    });

    if (existing) {
      return res.status(400).json({
        error: 'Certification number already exists',
      });
    }
    
    // Create report with basic data
    const report = await Report.create({
      type,
      certificationNumber: normalizedCertNumber,
      customerName: customerName || null,
      laboratory: laboratory || 'XEAAGRO Gems & Jewellery Testing Laboratory',
      image: image || null,
      date: new Date().toLocaleDateString('en-IN', {
        day: '2-digit',
        month: '2-digit', 
        year: 'numeric'
      }),
      details: otherData || {},
    });
    
    return res.status(201).json({
      success: true,
      report,
      message: 'Report created successfully',
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all reports
router.get('/', async (req, res) => {
  try {
    const reports = await Report.findAll({
      order: [['createdAt', 'DESC']],
    });
    res.json(reports);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Verify report - GET by certification number only
router.get('/verify', async (req, res) => {
  try {
    const { certificationNumber } = req.query;

    if (!certificationNumber) {
      return res.status(400).json({
        error: 'certificationNumber is required',
      });
    }

    const normalizedCertNumber = String(certificationNumber).trim().toUpperCase();

    const report = await Report.findOne({
      where: { certificationNumber: normalizedCertNumber },
    });

    if (!report) {
      return res.status(404).json({
        error: 'Report not found',
      });
    }

    res.json(report);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get single report by ID
router.get('/:id', async (req, res) => {
  try {
    const report = await Report.findByPk(req.params.id);

    if (!report) {
      return res.status(404).json({ error: 'Report not found' });
    }

    res.json(report);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create new report
router.post('/', async (req, res) => {
  try {
    const {
      type,
      certificationNumber,
      image,
      laboratory,
      customerName,
      date,
      productType,
      weight,
      goldComposition,
      silverComposition,
      copperComposition,
      otherComposition,
      testMethod,
      machineDeviation,
      complianceNote,
      details,
    } = req.body;

    if (!certificationNumber || !type) {
      return res.status(400).json({
        error: 'Certification number and type are required',
      });
    }

    const normalizedCertNumber = String(certificationNumber).trim().toUpperCase();

    // Check if certification number already exists
    const existing = await Report.findOne({
      where: { certificationNumber: normalizedCertNumber },
    });

    if (existing) {
      return res.status(400).json({
        error: 'Certification number already exists',
      });
    }

    const report = await Report.create({
      type,
      certificationNumber: normalizedCertNumber,
      image,
      laboratory,
      customerName,
      date,
      productType,
      weight,
      goldComposition,
      silverComposition,
      copperComposition,
      otherComposition,
      testMethod,
      machineDeviation,
      complianceNote,
      details: details || {},
    });

    res.status(201).json(report);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update report
router.put('/:id', async (req, res) => {
  try {
    const report = await Report.findByPk(req.params.id);

    if (!report) {
      return res.status(404).json({ error: 'Report not found' });
    }

    await report.update(req.body);
    res.json(report);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete report
router.delete('/:id', async (req, res) => {
  try {
    const report = await Report.findByPk(req.params.id);

    if (!report) {
      return res.status(404).json({ error: 'Report not found' });
    }

    await report.destroy();
    res.json({ message: 'Report deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
