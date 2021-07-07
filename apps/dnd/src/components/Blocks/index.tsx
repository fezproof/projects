import { FunctionalComponent } from 'preact';
import { BlockBaseFragment } from '../../generated/graphql';
import ParentBlock from './ParentBlock';
import StringBlock from './StringBlock';

interface BlockProps {
  block: BlockBaseFragment;
}

const Block: FunctionalComponent<BlockProps> = ({ block }) => {
  if (block.__typename === 'ParentBlock') return <ParentBlock block={block} />;
  if (block.__typename === 'StringBlock') return <StringBlock block={block} />;
  return null;
};

export default Block;
