import { FunctionComponent } from 'preact';
import { useParams } from 'react-router';
import Header from '../../components/Header';
import players from '../../data/players';

interface PlayerPageParams {
  id: string;
}

const PlayerPage: FunctionComponent = () => {
  const { id } = useParams<PlayerPageParams>();

  const player = players.find((p) => p.slug === id);

  if (!player) {
    return <div>Not Found!</div>;
  }

  return (
    <div>
      <Header title={player?.name} />
      <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div class="px-4 py-6 sm:px-0">
          <div class="border-4 border-dashed border-gray-200 rounded-lg h-96"></div>
        </div>
      </div>
    </div>
  );
};

export default PlayerPage;
