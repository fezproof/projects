import { gql } from '@urql/preact';
import { FunctionalComponent } from 'preact';
import Block from '.';
import {
  ParentBlockBaseFragment,
  useParentBlockChildrenQuery,
} from '../../generated/graphql';
import Centerer from '../Centerer';
import Loading from '../Loading';
import { BLOCK_BASE_FRAGMENT } from './fragments';

gql`
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
  ${BLOCK_BASE_FRAGMENT}
`;

export interface ParentBlockProps {
  block: ParentBlockBaseFragment;
}

const ParentBlock: FunctionalComponent<ParentBlockProps> = ({ block }) => {
  const [{ data, fetching }] = useParentBlockChildrenQuery({
    variables: { id: block.id },
  });

  if (fetching) {
    return (
      <Centerer>
        <Loading />
      </Centerer>
    );
  }

  if (data?.block?.__typename === 'ParentBlock')
    return (
      <div class="grid grid-flow-row gap-8 md:grid-flow-col">
        {data?.block?.children.map((child) =>
          child ? <Block block={child} /> : null,
        )}
      </div>
    );

  return null;
};

export default ParentBlock;
