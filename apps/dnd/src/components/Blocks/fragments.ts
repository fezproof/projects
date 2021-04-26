import { gql } from '@urql/preact';

export const PARENT_BLOCK_BASE_FRAGMENT = gql`
  fragment ParentBlockBase on ParentBlock {
    id
    __typename
    children {
      id
      __typename
    }
  }
`;

export const BLOCK_BASE_FRAGMENT = gql`
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
  ${PARENT_BLOCK_BASE_FRAGMENT}
`;

export const STRING_BLOCK_BASE_FRAGMENT = gql`
  fragment StringBlockBase on StringBlock {
    id
    __typename
    content
    type
  }
`;
