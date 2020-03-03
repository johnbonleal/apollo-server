const {ApolloServer} = require('apollo-server');
const typeDefs = require('./src/schema');
const resolvers = require('./src/resolver');

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen().then(({port}) => {
  console.log(`Server listening at port ${port}`);
});