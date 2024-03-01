const { HttpError, ctrlWrapper } = require("../helpers");

const Product = require("../db/models/product");

// ============================== Get All

const getAllProducts = async (req, res) => {
  const PER_PAGE = 12;
  const { page = 1, shop_id: shopId = 0 } = req.query;

  let products;

  if (categoryId) {
    if (page != 0) {
      products = await Product.findAll({
        limit: PER_PAGE,
        offset: (page - 1) * PER_PAGE,
        where: { shop_id: shopId },
      });
    } else {
      products = await Product.findAll({
        where: { shop_id: shopId },
      });
    }
  } else {
    products = await Product.findAll({
      limit: PER_PAGE,
      offset: (page - 1) * PER_PAGE,
    });
  }

  if (!products) {
    throw HttpError(404, "Not found");
  }

  res.json(products);
};

// ============================== Get by ID

const getProductById = async (req, res) => {
  const { id } = req.params;

  const product = await Product.findByPk(id);

  if (!product) {
    throw HttpError(404, "Not found");
  }

  res.json(product);
};

module.exports = {
  getAllProducts: ctrlWrapper(getAllProducts),
  getProductById: ctrlWrapper(getProductById),
};
