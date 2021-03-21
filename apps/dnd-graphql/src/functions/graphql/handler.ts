import blocksSchema from '@functions/services/blocks';
import pagesSchema from '@functions/services/pages';
import { stitchSchemas } from '@graphql-tools/stitch';
import { ApolloServer } from 'apollo-server-lambda';
import { stitchingDirectives } from '@graphql-tools/stitching-directives';

const { stitchingDirectivesTransformer } = stitchingDirectives();

const schema = stitchSchemas({
  subschemaConfigTransforms: [stitchingDirectivesTransformer],
  subschemas: [
    {
      schema: pagesSchema,
    },
    {
      schema: blocksSchema,
    },
  ],
});

const server = new ApolloServer({
  schema,
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
