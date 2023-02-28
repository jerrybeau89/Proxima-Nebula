const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Job extends Model {}

Job.init(
  {
    job_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    job_title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    job_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    min_salary: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    max_salary: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      
    },
    remote: {
      type: DataTypes.STRING,
     
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'job',
  }
);

module.exports = Job;
