const { DataTypes } = require("sequelize");

const sequelize = require("../config");

const Shop = sequelize.define(
  "shops",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
  },
  {
    // Other model options go here
    timestamps: false, // відключення автоматичної генерації createdAt та updatedAt
  }
);

module.exports = Shop;
