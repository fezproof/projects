import { ApolloServer, gql } from 'apollo-server-lambda';

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Block {
    id: ID!
    content: String
    children: [Block]
    page: Page!
  }

  type Page {
    id: ID!
    blocks: [Block]
    slug: String!
    snippet: Block
  }

  type Query {
    page(id: ID!): Page
    pages: [Page]

    block(id: ID!): Block

    # user...
  }
`;

const blocks = [
  { id: 'block-1', content: 'This is some content to render', pageId: '1' },
];

const pages = [{ id: '1', slug: 'human' }];

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    page: (parent, { id }, context, info) =>
      pages.find((page) => page.id === id),

    pages: () => pages,
    block: (_, { id }) => blocks.find((block) => block.id === id),
  },
  Page: {
    blocks: ({ id }) => blocks.filter((block) => block.pageId === id),
  },
  Block: {
    page: ({ pageId }) => pages.find((page) => page.id === pageId),
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
