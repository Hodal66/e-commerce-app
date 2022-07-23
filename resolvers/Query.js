const { categories, products } = require("../db");

exports.Query = {
  hello: () => {
    return "hello!!!!!!s";
  },
  products: () => products,
  product: (parent, args, context) => {
    const { id } = args;
    return (product = products.find((product) => product.id === id));
  },
  categories: () => categories,
  category: (parent, args, context) => {
    const { id } = args;
    return categories.find((category) => category.id === id);
  },
};
