const { categories, products } = require("../db");

exports.Query = {
  hello: () => {
    return "hello!!!!!!s";
  },
  products: () => products,
  product: (parent, { id }, { products }) => {
    // const { id } = args;
    return products.find((product) => product.id === id);
  },
  categories: (parent, args, { categories }) => categories,
  category: (parent, { id }, { categories }) => {
    // const { id } = args;
    return categories.find((category) => category.id === id);
  },
};
