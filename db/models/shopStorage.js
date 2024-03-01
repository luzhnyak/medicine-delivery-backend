const { DataTypes } = require("sequelize");

const sequelize = require("../config");

const Product = require("./product");

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
    // Other model options go here
    timestamps: false, // відключення автоматичної генерації createdAt та updatedAt
  }
);

// ShopStorage.belongsTo(Product, { foreignKey: "product_id", as: "product" });
// Product.hasMany(ShopStorage, { foreignKey: "product_id", as: "shopStorages" });

module.exports = ShopStorage;
