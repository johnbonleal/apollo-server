const {gql} = require('apollo-server');

const typeDefs = gql`
  type Book {
    id: ID!
    name: String!
    description: String!
    author: Author!
  }

  type Author {
    id: ID!
    name: String!
  }

  type Query {
    books: [Book]
  }
`;

module.exports = typeDefs;