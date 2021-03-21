import { gql, UserInputError } from 'apollo-server-lambda';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { stitchingDirectives } from '@graphql-tools/stitching-directives';
import { Resolvers, StringBlockType } from 'src/generated/graphql';

const {
  stitchingDirectivesTypeDefs,
  stitchingDirectivesValidator,
} = stitchingDirectives();

interface BaseBlockStore {
  id: string;
  parentId: string;
}

interface StringBlockStore extends BaseBlockStore {
  content: string;
  type: StringBlockType;
}

interface ParentBlockStore extends BaseBlockStore {
  children: { id: string }[];
}

const blocksData: Record<string, StringBlockStore | ParentBlockStore> = {
  'header-block': {
    id: 'header-block',
    parentId: 'Page|12345',
    content: 'Hi I am the header',
    type: StringBlockType.H1,
  },
  'block-1234': {
    id: 'block-1234',
    parentId: 'Page|12345',
    children: [{ id: 'string-block' }, { id: 'sub-block' }],
  },
  'string-block': {
    id: 'string-block',
    parentId: 'ParentBlock|block-1234',
    content: 'Hi I am some content',
    type: StringBlockType.Paragraph,
  },
  'sub-block': {
    id: 'sub-block',
    parentId: 'ParentBlock|block-1234',
    content: 'This is a quote',
    type: StringBlockType.Quote,
  },
};

const typeDefs = gql`
  union Parent = Page | ParentBlock

  interface Block @canonical {
    id: ID!
    parent: Parent!
  }

  enum StringBlockType {
    H1
    H2
    H3
    H4
    H5
    H6
    PARAGRAPH
    QUOTE
  }

  type StringBlock implements Block {
    id: ID!
    parent: Parent!
    content: String!
    type: StringBlockType!
  }

  type ParentBlock implements Block {
    id: ID!
    parent: Parent!
    children: [Block]!
  }

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

const resolvers: Resolvers = {
  Query: {
    block: (_, { id }) => {
      const block = blocksData[id];
      if (block) {
        return block;
      }
      return null;
    },
    _pages: (_, { keys }) => keys,
  },
  Page: {
    blocks: ({ id }) =>
      Object.entries(blocksData)
        .filter(([_, block]) => {
          const [type, parentId] = block.parentId.split('|');
          return type === 'Page' && parentId === id;
        })
        .map(([, block]) => block),
  },
  StringBlock: {
    id: ({ id }) => {
      if (blocksData[id]) {
        return id;
      }
      throw new UserInputError('Block not found');
    },
    parent: ({ id }) => {
      const block = blocksData[id];
      if (block) {
        const [type, id] = block.parentId.split('|');
        if (id && type) return { id, type };
      }
      throw new UserInputError('Parent not found');
    },
    content: ({ id }) => {
      const block = blocksData[id];
      if (block && (<StringBlockStore>block).content) {
        return (<StringBlockStore>block).content;
      }
      throw new UserInputError('Block not found');
    },
    type: ({ id }) => {
      const block = blocksData[id];
      if (block && (<StringBlockStore>block).type) {
        return (<StringBlockStore>block).type;
      }
      throw new UserInputError('Block not found');
    },
  },
  ParentBlock: {
    id: ({ id }) => {
      const [, blockId] = id.split('|');
      const block = blocksData[blockId || id];
      if (block) {
        return block.id;
      }
      throw new UserInputError('Block id not found');
    },
    parent: ({ id }) => {
      const block = blocksData[id];
      if (block) {
        const [type, id] = block.parentId.split('|');
        if (id && type) return { id, type };
      }
      throw new UserInputError('Parent not found');
    },
    children: ({ id }) => {
      const block = blocksData[id];
      if (block && (<ParentBlockStore>block).children) {
        return (<ParentBlockStore>block).children;
      }
      throw new UserInputError('Block children not found');
    },
  },
  Block: {
    __resolveType: ({ id }) => {
      const block = blocksData[id];
      if (!block) {
        return null;
      }
      if ((<ParentBlockStore>block).children) {
        return 'ParentBlock';
      }
      if ((<StringBlockStore>block).content) {
        return 'StringBlock';
      }
      return null; // GraphQLError is thrown
    },
  },
  Parent: {
    __resolveType: ({ id, type }) => {
      console.log(id, type);
      return type === 'ParentBlock' || type === 'Page' ? type : null;
    },
  },
};

const blocksSchema = makeExecutableSchema({
  typeDefs,
  resolvers,
  schemaTransforms: [stitchingDirectivesValidator],
});

export default blocksSchema;
