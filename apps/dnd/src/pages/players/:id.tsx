import { gql } from '@urql/preact';
import { FunctionComponent } from 'preact';
import { useParams } from 'react-router';
import Centerer from '../../components/Centerer';
import Header from '../../components/Header';
import Loading from '../../components/Loading';
import { usePlayerPageQuery } from '../../generated/graphql';

interface PlayerPageParams {
  id: string;
}

gql`
  query PlayerPage($id: ID!) {
    page(id: $id) {
      id
      title
    }
  }
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
    <div>
      <Header title={data?.page?.title || 'Failed'} />
      <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div class="px-4 py-6 sm:px-0">
          <div class="border-4 border-dashed border-gray-200 rounded-lg h-96"></div>
        </div>
      </div>
    </div>
  );
};

export default PlayerPage;
