const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Admin = require('../models/Admin');
const { validateAdminLogin, validateAdminRegister } = require('../utils/adminValidation');

const router = express.Router();

const signToken = (admin) => {
  const payload = { id: admin.id, email: admin.email, role: admin.role };
  const secret = process.env.JWT_SECRET || 'change-this-secret';
  const token = jwt.sign(payload, secret, { expiresIn: '24h' });
  console.log('[TOKEN] Generated token for:', admin.email);
  console.log('[TOKEN] Secret being used:', secret ? 'Set from .env' : 'Using default');
  return token;
};

// POST /api/admin/auth/register (create admin)
router.post('/register', async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const validation = validateAdminRegister({ name, email, password });

    if (!validation.isValid) {
      return res.status(400).json({ error: validation.errors });
    }

    const existingAdmin = await Admin.findOne({ where: { email: email.trim().toLowerCase() } });
    if (existingAdmin) {
      return res.status(409).json({ error: 'Admin already exists' });
    }

    const passwordHash = await bcrypt.hash(password, 10);
    const admin = await Admin.create({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      passwordHash,
      role: 'admin',
      status: 'active',
    });

    return res.status(201).json({
      success: true,
      message: 'Admin created successfully',
      admin: { id: admin.id, name: admin.name, email: admin.email, role: admin.role },
    });
  } catch (error) {
    return next(error);
  }
});

// POST /api/admin/auth/login
router.post('/login', async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const validation = validateAdminLogin({ email, password });

    if (!validation.isValid) {
      return res.status(400).json({ error: validation.errors });
    }

    const admin = await Admin.findOne({ where: { email: email.trim().toLowerCase() } });
    if (!admin) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    if (admin.status !== 'active') {
      return res.status(403).json({ error: 'Admin account is disabled' });
    }

    const passwordMatch = await bcrypt.compare(password, admin.passwordHash);
    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    await admin.update({ lastLoginAt: new Date() });

    const token = signToken(admin);
    return res.status(200).json({
      success: true,
      token,
      admin: { id: admin.id, name: admin.name, email: admin.email, role: admin.role },
    });
  } catch (error) {
    return next(error);
  }
});

module.exports = router;
