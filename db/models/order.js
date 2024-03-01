const { DataTypes } = require("sequelize");

const sequelize = require("../config");

const Order = sequelize.define(
  "order",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    address: {
      type: DataTypes.STRING,
    },
    phone: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    comment: {
      type: DataTypes.STRING,
    },
    suma: {
      type: DataTypes.FLOAT,
    },
  },
  {
    // Other model options go here
  }
);

module.exports = Order;
