import { Link } from 'react-router-dom';
import players from '../../../data/players';
import PlayerCard from '../PlayerCard';

const PlayerList = () => (
  <div class="my-4">
    <h2 class="text-gray-800 mx-auto text-center text-4xl mb-8 font-serif">
      The Players
    </h2>
    <div class="mx-2 mb-8 grid grid-flow-row grid-cols-1 gap-6 justify-items-center sm:grid-cols-2 lg:grid-cols-3">
      {players.map((player) => (
        <Link
          to={`/players/${player.slug}`}
          className="transform transition-all ease-out duration-300 hover:scale-105 hover:shadow-md"
        >
          <span class="sr-only">{player.name}</span>
          <PlayerCard {...player} />
        </Link>
      ))}
    </div>
  </div>
);

export default PlayerList;
