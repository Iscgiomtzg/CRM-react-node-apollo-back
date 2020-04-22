import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { typeDefs }  from './data/schema';
import { resolvers } from './data/resolver';

const app = express();
const server = new ApolloServer({typeDefs, resolvers});

server.applyMiddleware({app});

app.listen({port: 8000}, ()=> console.log(`El servidor esta corriendo http://52.73.101.215:8000${server.graphqlPath}`))