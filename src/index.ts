import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';

const ants = [
    {
        name: 'Dave',
        colony: 'red'
    },
    {
        name: 'Steve',
        colony: 'blue'
    },

]

const typeDefs = `
  type Query { ants: [Ant] }
  type Ant { name: String, colony: String }
`;

// The resolvers
const resolvers = {
  Query: { ants: () => ants },
};

// Put together a schema
const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

// Initialize the app
const app = express();

// The GraphQL endpoint
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));

// GraphiQL, a visual editor for queries
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

// Start the server
app.listen(3000, () => {
  console.log('Go to http://localhost:3000/graphiql to run queries! Nah though');
});
