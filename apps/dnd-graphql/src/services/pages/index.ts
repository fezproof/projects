import { gql } from 'apollo-server-lambda';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { stitchingDirectives } from '@graphql-tools/stitching-directives';

const {
  stitchingDirectivesTypeDefs,
  stitchingDirectivesValidator,
} = stitchingDirectives();

export const pagesData = {
  '12345': {
    slug: 'jericho',
    type: 'player',
  },
  abcde: {
    slug: 'whiskers',
    type: 'player',
  },
  abcdef: {
    slug: 'bridgetown',
    type: 'place',
  },
};

const typeDefs = gql`
  type Page @canonical {
    id: ID!
    slug: String!
    type: String!
  }

  type Query {
    page(id: ID!): Page @merge(keyField: "id")
    pages(type: String): [Page]
  }
  ${stitchingDirectivesTypeDefs}
`;

const resolvers = {
  Query: {
    page: (_, { id }) => {
      return pagesData[id] ? { id, ...pagesData[id] } : null;
    },

    pages: (_, { type }) =>
      Object.entries(pagesData)
        .filter(([, data]) => (type ? data.type === type : true))
        .map(([id, data]) => ({ id, ...data })),
  },
  Page: {
    id: ({ id }) => {
      return pagesData[id] ? id : null;
    },
    slug: ({ id }) => {
      return pagesData[id].slug;
    },
    type: ({ id }) => {
      return pagesData[id].type;
    },
  },
};

const pagesSchema = makeExecutableSchema({
  typeDefs,
  resolvers,
  schemaTransforms: [stitchingDirectivesValidator],
});

export default pagesSchema;
