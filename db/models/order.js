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
    // Other model options go here
    timestamps: false, // відключення автоматичної генерації createdAt та updatedAt
  }
);

// Встановлення зв'язку "один до багатьох" між Order і OrderProduct
Order.hasMany(OrderProduct, { foreignKey: "order_id", as: "orderProducts" });
OrderProduct.belongsTo(Order, {
  foreignKey: "order_id", // поле, яке буде використане в таблиці OrderProduct
  targetKey: "id", // поле, за яким буде встановлюватися зв'язок в таблиці Order
});

module.exports = Order;
