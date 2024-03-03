const { DataTypes } = require("sequelize");

const sequelize = require("../config");
const OrderProduct = require("./orderProduct");

const Order = sequelize.define(
  "order",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    phone: {
      type: DataTypes.STRING,
    },
    address: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
  }
);

Order.hasMany(OrderProduct, { foreignKey: "order_id", as: "orderProducts" });
OrderProduct.belongsTo(Order, {
  foreignKey: "order_id",
  targetKey: "id",
});

module.exports = Order;
