import { ApolloServer, gql } from 'apollo-server-lambda';

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: () => 'Hello world!',
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  formatError: (error) => {
    console.log(JSON.stringify(error, null, 2));
    return error;
  },
  formatResponse: (response) => {
    console.log(JSON.stringify(response, null, 2));
    return response;
  },
  context: ({ event, context }) => ({
    headers: event.headers,
    functionName: context.functionName,
    event,
    context,
  }),
  playground: {
    endpoint: 'http://localhost:3100/dev/graphql',
  },
  tracing: true,
});

export const main = server.createHandler();
