import { gql } from '@urql/preact';
import { FunctionComponent } from 'preact';
import { useParams } from 'react-router';
import Block from '../../components/Blocks';
import { BLOCK_BASE_FRAGMENT } from '../../components/Blocks/fragments';
import Centerer from '../../components/Centerer';
import Loading from '../../components/Loading';
import { usePlayerPageQuery } from '../../generated/graphql';
import JerichoImg from '../../images/jericho2.jpg';

interface PlayerPageParams {
  id: string;
}

gql`
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
  ${BLOCK_BASE_FRAGMENT}
`;

const PlayerPage: FunctionComponent = () => {
  const { id } = useParams<PlayerPageParams>();

  const [{ data, fetching, error }] = usePlayerPageQuery({ variables: { id } });

  if (fetching) {
    return (
      <Centerer>
        <Loading />
      </Centerer>
    );
  }

  if (error) {
    return <div>{JSON.stringify(error)}</div>;
  }

  return (
    <>
      <nav class="fixed top-0 left-0 right-0 z-10">
        {/* transparent nav */}
        {/* This is the nav */}
      </nav>
      <header class="container mx-auto h-screen lg:h-5/6 flex flex-col lg:flex-row">
        <div class="flex justify-center items-center flex-grow">
          <div class="relative h-full w-full">
            <img
              src={JerichoImg}
              class="absolute inset-0 h-full w-full object-top object-cover"
            />
            <div class="absolute inset-0 bg-gradient-to-b from-skin-fill via-transparent to-skin-fill"></div>
            <div class="absolute inset-0 bg-gradient-to-r from-skin-fill via-transparent to-skin-fill"></div>
          </div>
        </div>
        <div class="p-8 flex flex-col justify-center">
          <h1 class="font-bold text-7xl font-serif mb-4">
            {data?.page?.title}
          </h1>
          <blockquote class="font-semibold text-lg font-serif">
            “{data?.page?.snippet || 'No quote provided...'}”
          </blockquote>
        </div>
      </header>
      <main class="max-w-5xl mx-auto p-8">
        {data?.page?.blocks?.map((block) => {
          if (block) return <Block block={block} />;
          return null;
        })}
      </main>
    </>
  );
};

export default PlayerPage;
