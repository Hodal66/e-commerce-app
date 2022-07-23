const { products } = require("../db");

exports.Category = {
  products: (parent, args, context) => {
    const categoryId = parent.id;
    return (product = products.filter((product) => product.id === categoryId));
  },
};
