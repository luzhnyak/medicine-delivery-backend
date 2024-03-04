const { DataTypes } = require("sequelize");

const sequelize = require("../config");

const ShopStorage = require("./shopStorage");

const Product = sequelize.define(
  "products",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    image: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
  }
);

ShopStorage.belongsTo(Product, { foreignKey: "product_id", as: "product" });
Product.hasMany(ShopStorage, { foreignKey: "product_id", as: "shopStorages" });

module.exports = Product;
