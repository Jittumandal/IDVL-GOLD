const express = require('express');
const Contact = require('../models/Contact');
const { validateContactInput } = require('../utils/validation');

const router = express.Router();

// GET all contacts (admin use)
router.get('/', async (req, res, next) => {
  try {
    const contacts = await Contact.findAll({
      order: [['createdAt', 'DESC']],
    });
    res.json(contacts);
  } catch (error) {
    next(error);
  }
});

// GET single contact by ID
router.get('/:id', async (req, res, next) => {
  try {
    const contact = await Contact.findByPk(req.params.id);
    if (!contact) {
      return res.status(404).json({ error: 'Contact not found' });
    }
    res.json(contact);
  } catch (error) {
    next(error);
  }
});

// POST create new contact
router.post('/', async (req, res, next) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    // Validate input
    const validation = validateContactInput({ name, email, phone, subject, message });
    if (!validation.isValid) {
      return res.status(400).json({ error: validation.errors });
    }

    // Create contact
    const contact = await Contact.create({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      subject: subject.trim(),
      message: message.trim(),
    });

    res.status(201).json({
      success: true,
      message: 'Contact form submitted successfully',
      contact,
    });
  } catch (error) {
    if (error.name === 'SequelizeValidationError') {
      return res.status(400).json({
        error: 'Validation failed',
        details: error.errors.map(e => e.message),
      });
    }
    next(error);
  }
});

// PUT update contact status
router.put('/:id/status', async (req, res, next) => {
  try {
    const contact = await Contact.findByPk(req.params.id);
    if (!contact) {
      return res.status(404).json({ error: 'Contact not found' });
    }

    const { status } = req.body;
    if (!['new', 'read', 'replied', 'archived'].includes(status)) {
      return res.status(400).json({ error: 'Invalid status' });
    }

    await contact.update({ status });
    res.json({ success: true, contact });
  } catch (error) {
    next(error);
  }
});

// DELETE contact
router.delete('/:id', async (req, res, next) => {
  try {
    const contact = await Contact.findByPk(req.params.id);
    if (!contact) {
      return res.status(404).json({ error: 'Contact not found' });
    }

    await contact.destroy();
    res.json({ success: true, message: 'Contact deleted' });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
