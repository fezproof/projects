import { gql } from 'apollo-server-lambda';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { stitchingDirectives } from '@graphql-tools/stitching-directives';

const {
  stitchingDirectivesTypeDefs,
  stitchingDirectivesValidator,
} = stitchingDirectives();

const blocksData = {
  'block-1234': {
    content: [
      { value: 'This is some content to render', type: 'h1' },
      { id: 'subblock' },
    ],
    pageId: '12345',
  },
  subblock: {
    pageId: '12345',
    content: [{ value: 'value', type: 'p' }],
  },
};

const typeDefs = gql`
  type Block @canonical {
    id: ID!
    content: [BlockContent]
    page: Page!
  }

  type StringBlock {
    value: String!
    type: String!
  }

  union BlockContent = Block | StringBlock

  type Page @key(selectionSet: "{ id }") {
    id: ID!
    "Blocks for this page"
    blocks: [Block]
  }

  input PageKey {
    id: ID!
  }

  type Query {
    block(id: ID!): Block @merge(keyField: "id")
    _pages(keys: [PageKey!]!): [Page]! @merge
  }
  ${stitchingDirectivesTypeDefs}
`;

const resolvers = {
  Query: {
    block: (_, { id }) => (blocksData[id] ? { id, ...blocksData[id] } : null),
    _pages: (_, { keys }) => keys,
  },
  Page: {
    blocks: ({ id }) =>
      Object.entries(blocksData)
        .filter(([_, block]) => block.pageId === id)
        .map(([blockId, block]) => ({ id: blockId, ...block })),
  },
  Block: {
    page: ({ pageId }) => ({ id: pageId }),
    content: ({ id }) => {
      return blocksData[id]?.content;
    },
  },
  BlockContent: {
    __resolveType: (obj) => {
      console.log(obj);
      if (obj.filename) {
        return 'File';
      }
      if (obj.id) {
        return 'Block';
      }
      if (obj.value) {
        return 'StringBlock';
      }
      return null; // GraphQLError is thrown
    },
  },
};

const blocksSchema = makeExecutableSchema({
  typeDefs,
  resolvers,
  schemaTransforms: [stitchingDirectivesValidator],
});

export default blocksSchema;
