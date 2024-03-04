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
    shop_id: {
      type: DataTypes.INTEGER,
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
    timestamps: false,
  }
);

module.exports = OrderProduct;
