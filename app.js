import {ApolloServer} from 'apollo-server-express';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import typeDefs from './src/schema/schema';
import resolvers from './src/resolvers';
import config from './src/configs/app-config';

import bookModel from './src/db/model/book.model';
import authorModel from './src/db/model/author.model';

const {host, db_port, name} = config.mongo;

const app = express();
app.use(cors());

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => ({
    models: {bookModel, authorModel}
  })
});

server.applyMiddleware({app});

app.listen({port: config.app.port}, () => {
  mongoose.connect(`mongodb://${host}:${db_port}/${name}`, { useNewUrlParser: true, useUnifiedTopology: true });
  console.log(`Server running at http://localhost:${config.app.port}/${server.graphqlPath}`);
});