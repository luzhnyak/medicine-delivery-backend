const { HttpError, ctrlWrapper } = require("../helpers");

const Shop = require("../db/models/shop");

// ============================== Get All

const getAllShops = async (req, res) => {
  const shops = await Shop.findAll();

  if (!shops) {
    throw HttpError(404, "Not found");
  }

  res.json(shops);
};

// ============================== Get by ID

const getShopById = async (req, res) => {
  const { id } = req.params;

  const shop = await Shop.findByPk(id);

  if (!shop) {
    throw HttpError(404, "Not found");
  }

  res.json(shop);
};

module.exports = {
  getAllShops: ctrlWrapper(getAllShops),
  getShopById: ctrlWrapper(getShopById),
};
