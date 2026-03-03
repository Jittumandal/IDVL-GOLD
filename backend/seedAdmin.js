const dotenv = require('dotenv');
dotenv.config();

const bcrypt = require('bcryptjs');
const { sequelize } = require('./config/database');
const Admin = require('./models/Admin');

const ADMIN_EMAIL = 'jitendrakumar.designer@gmail.com';
const ADMIN_PASSWORD = 'admin@123!';
const ADMIN_NAME = 'Jitendra Kumar';

const seedAdmin = async () => {
  try {
    await sequelize.authenticate();
    console.log('MySQL Database Connected');

    await sequelize.sync({ alter: true });
    console.log('Database tables synced');

    const existingAdmin = await Admin.findOne({ where: { email: ADMIN_EMAIL } });
    if (existingAdmin) {
      console.log('⚠️  Admin already exists');
      process.exit(0);
    }

    const passwordHash = await bcrypt.hash(ADMIN_PASSWORD, 10);
    const admin = await Admin.create({
      name: ADMIN_NAME,
      email: ADMIN_EMAIL,
      passwordHash,
      role: 'admin',
      status: 'active',
    });

    console.log('✅ Admin created successfully');
    console.log('📧 Email:', admin.email);
    console.log('🔑 Password:', ADMIN_PASSWORD);
    console.log('👤 Name:', admin.name);
    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding admin:', error.message);
    process.exit(1);
  }
};

seedAdmin();