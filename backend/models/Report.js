const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Report = sequelize.define(
  'Report',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    type: {
      type: DataTypes.ENUM(
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
      ),
      allowNull: false,
      defaultValue: 'goldTesting',
    },
    certificationNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      index: true,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    laboratory: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    customerName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    date: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    // Product Details
    productType: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    weight: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
    },
    // Composition (Gold Testing)
    goldComposition: {
      type: DataTypes.DECIMAL(5, 2),
      allowNull: true,
    },
    silverComposition: {
      type: DataTypes.DECIMAL(5, 2),
      allowNull: true,
    },
    copperComposition: {
      type: DataTypes.DECIMAL(5, 2),
      allowNull: true,
    },
    otherComposition: {
      type: DataTypes.DECIMAL(5, 2),
      allowNull: true,
    },
    // Test Results
    testMethod: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    machineDeviation: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    complianceNote: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    // Additional Details stored as JSON
    details: {
      type: DataTypes.JSON,
      allowNull: true,
      defaultValue: {},
    },
  },
  {
    tableName: 'reports',
    timestamps: true,
    indexes: [
      {
        fields: ['type', 'certificationNumber'],
      },
    ],
  }
);

module.exports = Report;
