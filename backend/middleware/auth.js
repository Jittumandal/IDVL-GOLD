const jwt = require('jsonwebtoken');

const verifyAdminToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader?.split(' ')[1];
  const secret = process.env.JWT_SECRET || 'change-this-secret';

  console.log('[AUTH] Verifying token...');
  console.log('[AUTH] Auth Header:', authHeader ? 'Present' : 'Missing');
  console.log('[AUTH] Token:', token ? 'Present' : 'Missing');
  console.log('[AUTH] JWT_SECRET:', secret ? 'Set' : 'Using default');

  if (!token) {
    console.log('[AUTH] Failed: No token provided');
    return res.status(401).json({ error: 'Access denied. No token provided.' });
  }

  try {
    const decoded = jwt.verify(token, secret);
    console.log('[AUTH] Token verified successfully. Role:', decoded.role);

    if (decoded.role !== 'admin') {
      console.log('[AUTH] Failed: User is not admin. Role:', decoded.role);
      return res.status(403).json({ error: 'Access denied. Admin only.' });
    }
    req.admin = decoded;
    next();
  } catch (error) {
    console.log('[AUTH] Token verification failed:', error.message);
    return res.status(401).json({ error: 'Invalid or expired token.' });
  }
};

module.exports = { verifyAdminToken };
