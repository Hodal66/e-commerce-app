const { products } = require("../db");

exports.Category = {
  products: ({ id: categoryId }, args, { products }) => {
    // const categoryId = parent.id;
    return products.filter((product) => product.id === categoryId);
  },
};
