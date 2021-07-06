import { createElement } from 'preact';
import { useState } from 'preact/hooks';
import { useAsync } from 'react-use';
import rehype2react from 'rehype-react';
import markdown from 'remark-parse';
import remark2rehype from 'remark-rehype';
// @ts-ignore
import slug from 'remark-slug';
import toc from 'remark-toc';
import unified from 'unified';

const reactProcessor = unified()
  .use(markdown)
  .use(slug)
  .use(toc)
  .use(remark2rehype)
  .use(rehype2react, {
    createElement: createElement,
    passNode: true,
    components: {
      p: (props) => {
        console.log(props);
        return <p>{props.children}</p>;
      },
    },
  });

const astProcessor = unified().use(markdown).use(slug).use(toc);

const MDPage = () => {
  const [text, setText] = useState('# Hello\n\n## Table of Contents\n\n');

  const reactResult = useAsync(async () => {
    const result = (await reactProcessor.process(text)).result as Element;
    return result;
  }, [text]);

  const astResult = useAsync(async () => {
    const result = (await astProcessor.process(text)).toString();
    return result;
  }, [text]);

  return (
    <div class="grid grid-flow-col h-screen gap-8 auto-cols-fr">
      <div>
        <textarea
          value={text}
          onChange={(e) => {
            const target = e.target as HTMLTextAreaElement;
            return setText(target.value);
          }}
          class="bg-black h-full w-full"
        />
      </div>
      <div>{reactResult.value}</div>
      <div>
        <pre>{JSON.stringify(astResult.error)}</pre>
      </div>
    </div>
  );
};

export default MDPage;
