const { DataTypes } = require("sequelize");

const sequelize = require("../config");

const ShopStorage = sequelize.define(
  "shop_storage",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    shop_id: {
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
    timestamps: true,
  }
);

module.exports = ShopStorage;
