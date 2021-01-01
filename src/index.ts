import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import { resolvers } from './resolvers/resolvers';
import cors from 'cors';

const typeDefs = `
  type Query { ants: [Ant] }
  type Ant { name: String, colony: String }
`;

// Put together a schema
const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

// Initialize the app
const app = express();

// Enable Cors policy
app.use(cors());

// The GraphQL endpoint
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));

// GraphiQL, a visual editor for queries
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

// Start the server
app.listen(4200, () => {
  console.log('Go to http://localhost:4200/graphiql to run queries! Nah though');
});
