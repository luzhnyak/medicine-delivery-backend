const { DataTypes } = require("sequelize");

const sequelize = require("../config");

const OrderProduct = sequelize.define(
  "order_products",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    order_id: {
      type: DataTypes.INTEGER,
    },
    product_id: {
      type: DataTypes.INTEGER,
    },
    quantity: {
      type: DataTypes.FLOAT,
    },
    price: {
      type: DataTypes.FLOAT,
    },
  },
  {
    // Other model options go here
    timestamps: false, // відключення автоматичної генерації createdAt та updatedAt
  }
);

module.exports = OrderProduct;
