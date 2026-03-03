require('dotenv').config();
const mysql = require('mysql2/promise');

async function migrateTypes() {
  const conn = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  });

  try {
    console.log('Step 1: Temporarily change type to VARCHAR...');
    
    // First, change column to VARCHAR to allow any value
    await conn.execute("ALTER TABLE reports MODIFY type VARCHAR(100) NOT NULL");
    console.log('✓ Changed to VARCHAR');
    
    console.log('\nStep 2: Updating existing reports to new type codes...');
    
    // Update all existing records to new type codes
    await conn.execute("UPDATE reports SET type = 'goldTesting' WHERE type = 'XRF Gold Testing Certificate'");
    await conn.execute("UPDATE reports SET type = 'diamondGrading' WHERE type = 'Diamond Report'");
    await conn.execute("UPDATE reports SET type = 'gemstoneGrading' WHERE type = 'Gemstone Report'");
    await conn.execute("UPDATE reports SET type = 'jewelryAppraisal' WHERE type = 'Jewelry Report'");
    
    console.log('✓ Updated existing reports');
    
    console.log('\nStep 3: Converting back to ENUM with new values...');
    
    // Alter table to use new enum values
    await conn.execute(`
      ALTER TABLE reports 
      MODIFY type ENUM(
        'goldTesting',
        'silverTesting',
        'platinumTesting',
        'diamondGrading',
        'gemstoneGrading',
        'jewelryAppraisal',
        'hallmarkCertificate',
        'labGrownDiamond',
        'pearlGrading',
        'metalAssay'
      ) NOT NULL DEFAULT 'goldTesting'
    `);
    
    console.log('✓ Updated enum type definition');
    
    // Verify the changes
    const [rows] = await conn.execute('SELECT id, type, certificationNumber FROM reports LIMIT 5');
    console.log('\nSample reports after migration:');
    console.log(JSON.stringify(rows, null, 2));
    
  } catch (error) {
    console.error('Migration error:', error);
    throw error;
  } finally {
    await conn.end();
    console.log('\nMigration complete!');
  }
}

migrateTypes().catch(console.error);
