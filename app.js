const {ApolloServer} = require('apollo-server');
const typeDefs = require('./src/schema/schema');
const resolvers = require('./src/resolvers/resolver');

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen().then(({url}) => {
  console.log(`Server listening at ${url}`);
});