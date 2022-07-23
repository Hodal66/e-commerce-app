const { ApolloServer } = require("apollo-server");
const { products, categories } = require("./db");
const { typeDefs } = require("./schema");
const { Query } = require("./resolvers/Query.js");
const { Category } = require("./resolvers/Category");
const { Product } = require("./resolvers/Products.js");

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Category,
    Product,
  },
  context: {
    products,
    categories,
  },
});

server.listen().then(({ url }) => console.log("Server is ready ar" + url));
