import { FunctionComponent } from 'preact';
import { useState } from 'preact/hooks';
import { Link } from 'react-router-dom';
import Hero from '../components/Home/Hero';
import PlayerCard from '../components/PlayerCard';
import players from '../data/players';

const IndexPage: FunctionComponent = () => (
  <div>
    <Hero />
    <main class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div class="my-4">
        <h2 class="mx-auto text-center text-4xl mb-8 font-serif">
          The Players
        </h2>
        <div class="mx-2 mb-8 grid grid-flow-row grid-cols-1 gap-8 md:grid-cols-2">
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
      <div class="my-4">
        <h2 class="mx-auto text-center text-4xl mt-2 mb-8 font-serif">
          The Nations
        </h2>
      </div>
      <div class="my-4">
        <h2 class="mx-auto text-center text-4xl mt-2 mb-8 font-serif">
          The Lands
        </h2>
      </div>
    </main>
  </div>
);

export default IndexPage;
