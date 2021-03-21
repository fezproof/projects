import { gql, UserInputError } from 'apollo-server-lambda';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { stitchingDirectives } from '@graphql-tools/stitching-directives';
import { Page, Resolvers } from 'src/generated/graphql';

const {
  stitchingDirectivesTypeDefs,
  stitchingDirectivesValidator,
} = stitchingDirectives();

export const pagesData: Record<string, Page> = {
  '12345': {
    id: '12345',
    slug: 'jericho',
    type: 'player',
  },
  abcde: {
    id: 'abcde',
    slug: 'whiskers',
    type: 'player',
  },
  abcdef: {
    id: 'abcdef',
    slug: 'bridgetown',
    type: 'place',
  },
};

const typeDefs = gql`
  type Page @canonical {
    id: ID!
    "Slug to appear in the URL for this page"
    slug: String!
    "The page type"
    type: String!
  }

  type Query {
    page(id: ID!): Page @merge(keyField: "id")
    pages(type: String): [Page]
  }
  ${stitchingDirectivesTypeDefs}
`;

const resolvers: Resolvers = {
  Query: {
    page: (_, { id }) => {
      const page = pagesData[id]
      return !!page ? page : null;
    },
    pages: (_, { type }) =>
      Object.entries(pagesData)
        .filter(([, data]) => (type ? data.type === type : true))
        .map(([, data]) => data),
  },
  Page: {
    id: ({ id }) => {
      if (pagesData[id]) {
        return id;
      }
      throw new UserInputError('Page not found');
    },
    slug: ({ id }) => {
      const page = pagesData[id];
      if (page) {
        return page.slug;
      }
      throw new UserInputError('Page not found');
    },
    type: ({ id }) => {
      const page = pagesData[id];
      if (page) {
        return page.type;
      }
      throw new UserInputError('Page not found');
    },
  },
};

const pagesSchema = makeExecutableSchema({
  typeDefs,
  resolvers,
  schemaTransforms: [stitchingDirectivesValidator],
});

export default pagesSchema;
