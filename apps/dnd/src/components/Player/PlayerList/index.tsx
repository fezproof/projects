import { gql } from '@urql/preact';
import { Link } from 'react-router-dom';
import { usePlayerPagesQuery } from '../../../generated/graphql';
import Centerer from '../../Centerer';
import Loading from '../../Loading';
import PlayerCard, { PLAYER_CARD_FRAGMENT } from '../PlayerCard';

gql`
  query playerPages {
    pages(type: "player") {
      ...PlayerCard
    }
  }
  ${PLAYER_CARD_FRAGMENT}
`;

const PlayerList = () => {
  const [{ data, fetching, stale }] = usePlayerPagesQuery();
  return (
    <div class="my-4">
      <h2 class="text-gray-800 mx-auto text-center text-4xl mb-8 font-serif">
        The Players
      </h2>
      {fetching && (
        <Centerer>
          <Loading />
        </Centerer>
      )}
      <div class="mx-2 mb-8 grid grid-flow-row grid-cols-1 gap-6 justify-items-center sm:grid-cols-2 lg:grid-cols-3">
        {data?.pages?.map(
          (player) =>
            player && (
              <Link
                key={player.id}
                to={`/players/${player.id}`}
                className="transform transition-all ease-out duration-300 rounded-lg hover:scale-105 hover:shadow-md"
              >
                <span class="sr-only">{player?.title || 'No title'}</span>
                <PlayerCard {...player} />
              </Link>
            ),
        )}
      </div>
    </div>
  );
};

export default PlayerList;
