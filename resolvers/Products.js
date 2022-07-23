const { categories } = require("../db");

exports.Product = {
  category: ({ categoryId }, args, { categories }) => {
    // const categoryId = parent.categoryId;
    return categories.find((category) => category.id === categoryId);
  },
};
