import { makeExecutableSchema } from '@graphql-tools/schema';
import { stitchingDirectives } from '@graphql-tools/stitching-directives';
import { gql, UserInputError } from 'apollo-server-lambda';
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
  'p-block': {
    id: 'p-block',
    parentId: 'Page|12345',
    content: 'Hi I am the paragraph',
    type: StringBlockType.H2,
  },
  'string-block': {
    id: 'string-block',
    parentId: 'ParentBlock|block-1234',
    content: `Irony direct trade wayfarers, ugh beard poke blog kitsch lo-fi +1 twee slow-carb scenester. Kogi chillwave lumbersexual tacos pickled shaman godard mumblecore next level you probably haven't heard of them austin farm-to-table fingerstache. Jean shorts chia whatever deep v, vaporware artisan farm-to-table taxidermy quinoa vice next level. Single-origin coffee tumblr letterpress green juice forage plaid stumptown you probably haven't heard of them organic food truck vaporware williamsburg kickstarter. Meggings trust fund pickled austin taxidermy knausgaard. Helvetica occupy biodiesel, williamsburg health goth organic lomo bicycle rights intelligentsia kitsch meh. Gentrify live-edge hammock, literally intelligentsia enamel pin scenester waistcoat occupy adaptogen austin knausgaard four dollar toast drinking vinegar pickled.`,
    type: StringBlockType.Paragraph,
  },
  'sub-block': {
    id: 'sub-block',
    parentId: 'ParentBlock|block-1234',
    content: `Marfa vexillologist knausgaard gentrify meh literally plaid air plant forage fanny pack. Hexagon photo booth fashion axe hammock master cleanse crucifix. Butcher cred jean shorts PBR&B swag fingerstache. Vape air plant pabst, prism artisan actually fingerstache knausgaard raclette neutra. Church-key everyday carry dreamcatcher pour-over scenester. Skateboard wayfarers quinoa, sustainable ugh hammock hexagon hoodie brooklyn echo park meh normcore. Next level selvage yr quinoa crucifix af, gluten-free meditation ethical freegan cred godard polaroid.`,
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
    __resolveType: ({ type }) =>
      type === 'ParentBlock' || type === 'Page' ? type : null,
  },
};

const blocksSchema = makeExecutableSchema({
  typeDefs,
  resolvers,
  schemaTransforms: [stitchingDirectivesValidator],
});

export default blocksSchema;
