import { makeExecutableSchema } from '@graphql-tools/schema';
import { stitchingDirectives } from '@graphql-tools/stitching-directives';
import { gql, UserInputError } from 'apollo-server-lambda';
import { Page, Resolvers } from 'src/generated/graphql';

const {
  stitchingDirectivesTypeDefs,
  stitchingDirectivesValidator,
} = stitchingDirectives();

export const pagesData: Record<string, Page> = {
  '12345': {
    id: '12345',
    title: 'Jericho',
    type: 'player',
    snippet: 'This is a quote from the hero Jericho',
  },
  abcde: {
    id: 'abcde',
    title: 'Whiskers',
    type: 'player',
    snippet: 'This is a quote from the hero Whiskers',
  },
  abcdef: {
    id: 'abcdef',
    title: 'Bridgetown',
    type: 'place',
  },
};

const typeDefs = gql`
  type Page @canonical {
    id: ID!
    "The page type"
    type: String!
    title: String
    snippet: String
    hero: String
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
      const page = pagesData[id];
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
    title: ({ id }) => {
      const page = pagesData[id];
      return page?.title ?? null;
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
