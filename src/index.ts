import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import { resolvers } from './resolvers/resolvers';
import cors from 'cors';
import { typeDefs } from './schemas/schema';
import { healthCheck, moveAnts } from './model';

const port = 4200;

// Initialize the app
const app = express();

// Put together a schema
const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

// Enable Cors policy
app.use(cors());

// The GraphQL endpoint
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));

// GraphiQL, a visual editor for queries
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

// Start the server
app.listen({ port }, () => {
  console.log(`Go to http://localhost:${port}/graphiql to run queries!`);
});

// Start the ticking
setInterval(() => {
  // Move the ants
  moveAnts();
  // Check their health
  healthCheck()
}, 500);
