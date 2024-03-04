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
    timestamps: false,
  }
);

module.exports = Shop;
