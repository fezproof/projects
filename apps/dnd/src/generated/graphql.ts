import gql from 'graphql-tag';
import * as Urql from '@urql/preact';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  page?: Maybe<Page>;
  pages?: Maybe<Array<Maybe<Page>>>;
  block?: Maybe<Block>;
  _pages: Array<Maybe<Page>>;
};


export type QueryPageArgs = {
  id: Scalars['ID'];
};


export type QueryPagesArgs = {
  type?: Maybe<Scalars['String']>;
};


export type QueryBlockArgs = {
  id: Scalars['ID'];
};


export type Query_PagesArgs = {
  keys: Array<PageKey>;
};

export type Page = {
  __typename?: 'Page';
  id: Scalars['ID'];
  /** Blocks for this page */
  blocks?: Maybe<Array<Maybe<Block>>>;
  /** The page type */
  type: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  snippet?: Maybe<Scalars['String']>;
  hero?: Maybe<Scalars['String']>;
};

export type Parent = Page | ParentBlock;

export type Block = {
  id: Scalars['ID'];
  parent: Parent;
};

export enum StringBlockType {
  H1 = 'H1',
  H2 = 'H2',
  H3 = 'H3',
  H4 = 'H4',
  H5 = 'H5',
  H6 = 'H6',
  Paragraph = 'PARAGRAPH',
  Quote = 'QUOTE'
}

export type StringBlock = Block & {
  __typename?: 'StringBlock';
  id: Scalars['ID'];
  parent: Parent;
  content: Scalars['String'];
  type: StringBlockType;
};

export type ParentBlock = Block & {
  __typename?: 'ParentBlock';
  id: Scalars['ID'];
  parent: Parent;
  children: Array<Maybe<Block>>;
};

export type PageKey = {
  id: Scalars['ID'];
};

export type ParentBlockChildrenQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type ParentBlockChildrenQuery = (
  { __typename?: 'Query' }
  & { block?: Maybe<{ __typename?: 'StringBlock' } | (
    { __typename?: 'ParentBlock' }
    & Pick<ParentBlock, 'id'>
    & { children: Array<Maybe<(
      { __typename?: 'StringBlock' }
      & BlockBase_StringBlock_Fragment
    ) | (
      { __typename?: 'ParentBlock' }
      & BlockBase_ParentBlock_Fragment
    )>> }
  )> }
);

export type ParentBlockBaseFragment = (
  { __typename: 'ParentBlock' }
  & Pick<ParentBlock, 'id'>
  & { children: Array<Maybe<(
    { __typename: 'StringBlock' }
    & Pick<StringBlock, 'id'>
  ) | (
    { __typename: 'ParentBlock' }
    & Pick<ParentBlock, 'id'>
  )>> }
);

type BlockBase_StringBlock_Fragment = (
  { __typename: 'StringBlock' }
  & Pick<StringBlock, 'content' | 'type' | 'id'>
);

type BlockBase_ParentBlock_Fragment = (
  { __typename: 'ParentBlock' }
  & Pick<ParentBlock, 'id'>
  & ParentBlockBaseFragment
);

export type BlockBaseFragment = BlockBase_StringBlock_Fragment | BlockBase_ParentBlock_Fragment;

export type StringBlockBaseFragment = (
  { __typename: 'StringBlock' }
  & Pick<StringBlock, 'id' | 'content' | 'type'>
);

export type PlayerCardFragment = (
  { __typename?: 'Page' }
  & Pick<Page, 'id' | 'title' | 'snippet' | 'hero'>
);

export type PlayerPagesQueryVariables = Exact<{ [key: string]: never; }>;


export type PlayerPagesQuery = (
  { __typename?: 'Query' }
  & { pages?: Maybe<Array<Maybe<(
    { __typename?: 'Page' }
    & PlayerCardFragment
  )>>> }
);

export type PlayerPageQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type PlayerPageQuery = (
  { __typename?: 'Query' }
  & { page?: Maybe<(
    { __typename?: 'Page' }
    & Pick<Page, 'id' | 'title' | 'snippet'>
    & { blocks?: Maybe<Array<Maybe<(
      { __typename?: 'StringBlock' }
      & BlockBase_StringBlock_Fragment
    ) | (
      { __typename?: 'ParentBlock' }
      & BlockBase_ParentBlock_Fragment
    )>>> }
  )> }
);

export const ParentBlockBaseFragmentDoc = gql`
    fragment ParentBlockBase on ParentBlock {
  id
  __typename
  children {
    id
    __typename
  }
}
    `;
export const BlockBaseFragmentDoc = gql`
    fragment BlockBase on Block {
  id
  __typename
  ... on ParentBlock {
    ...ParentBlockBase
  }
  ... on StringBlock {
    content
    type
  }
}
    ${ParentBlockBaseFragmentDoc}`;
export const StringBlockBaseFragmentDoc = gql`
    fragment StringBlockBase on StringBlock {
  id
  __typename
  content
  type
}
    `;
export const PlayerCardFragmentDoc = gql`
    fragment PlayerCard on Page {
  id
  title
  snippet
  hero
}
    `;
export const ParentBlockChildrenDocument = gql`
    query ParentBlockChildren($id: ID!) {
  block(id: $id) {
    ... on ParentBlock {
      id
      children {
        ...BlockBase
      }
    }
  }
}
    ${BlockBaseFragmentDoc}`;

export function useParentBlockChildrenQuery(options: Omit<Urql.UseQueryArgs<ParentBlockChildrenQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<ParentBlockChildrenQuery>({ query: ParentBlockChildrenDocument, ...options });
};
export const PlayerPagesDocument = gql`
    query playerPages {
  pages(type: "player") {
    ...PlayerCard
  }
}
    ${PlayerCardFragmentDoc}`;

export function usePlayerPagesQuery(options: Omit<Urql.UseQueryArgs<PlayerPagesQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<PlayerPagesQuery>({ query: PlayerPagesDocument, ...options });
};
export const PlayerPageDocument = gql`
    query PlayerPage($id: ID!) {
  page(id: $id) {
    id
    title
    snippet
    blocks {
      ...BlockBase
    }
  }
}
    ${BlockBaseFragmentDoc}`;

export function usePlayerPageQuery(options: Omit<Urql.UseQueryArgs<PlayerPageQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<PlayerPageQuery>({ query: PlayerPageDocument, ...options });
};