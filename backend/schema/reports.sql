-- Reports table schema (includes image URL/path)
CREATE TABLE IF NOT EXISTS reports (
  id INT AUTO_INCREMENT PRIMARY KEY,
  type ENUM('Diamond Report','Gemstone Report','Jewelry Report','XRF Gold Testing Certificate') NOT NULL DEFAULT 'XRF Gold Testing Certificate',
  certificationNumber VARCHAR(255) NOT NULL UNIQUE,
  image VARCHAR(2048) NULL,
  laboratory VARCHAR(255) NULL,
  customerName VARCHAR(255) NULL,
  date VARCHAR(255) NULL,
  productType VARCHAR(255) NULL,
  weight DECIMAL(10,2) NULL,
  goldComposition DECIMAL(5,2) NULL,
  silverComposition DECIMAL(5,2) NULL,
  copperComposition DECIMAL(5,2) NULL,
  otherComposition DECIMAL(5,2) NULL,
  testMethod VARCHAR(255) NULL,
  machineDeviation VARCHAR(255) NULL,
  complianceNote TEXT NULL,
  details JSON NULL,
  createdAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updatedAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_type_cert (type, certificationNumber)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;