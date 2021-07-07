import { FunctionalComponent } from 'preact';
import {
  StringBlockBaseFragment,
  StringBlockType,
} from '../../generated/graphql';

const STRING_BLOCK_MAP: Record<
  StringBlockType,
  FunctionalComponent<{ children: string }>
> = {
  H1: ({ children }) => <h1 class="text-4xl mb-6">{children}</h1>,
  H2: ({ children }) => <h2 class="text-3xl mb-4">{children}</h2>,
  H3: ({ children }) => <h3 class="text-2l mb-4">{children}</h3>,
  H4: ({ children }) => <h4 class="text-lg mb-4">{children}</h4>,
  H5: ({ children }) => <h5 class="text-lg mb-4">{children}</h5>,
  H6: ({ children }) => <h6 class="text-lg mb-4">{children}</h6>,
  PARAGRAPH: ({ children }) => <p>{children}</p>,
  QUOTE: ({ children }) => (
    <blockquote class="text-lg">
      <em>“{children}”</em>
    </blockquote>
  ),
};

interface StringBlockProps {
  block: StringBlockBaseFragment;
}

const StringBlock: FunctionalComponent<StringBlockProps> = ({ block }) => {
  const Component = STRING_BLOCK_MAP[block.type];
  return <Component>{block.content}</Component>;
};

export default StringBlock;
