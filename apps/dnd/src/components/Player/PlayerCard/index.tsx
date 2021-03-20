import { FunctionComponent } from 'preact';
import { Player } from '../../../data/players';

const PlayerCard: FunctionComponent<Player> = ({
  quote,
  image,
  name,
  class: playerClass,
  race,
}) => (
  <figure
    style={{ backgroundColor: '#EFEEE9' }}
    class="rounded-lg overflow-hidden w-full max-w-sm h-full border-solid border-8"
  >
    <div class="text-center h-full">
      <figcaption class="font-medium text-center mx-4 mt-6 h-32">
        <div class="text-gray-900 text-3xl">{name}</div>
        <div class="text-gray-600">{race} {playerClass}</div>
      </figcaption>
      <img
        class="w-full h-96 lg:rounded-none rounded-full object-scale-down"
        src={image}
        alt={name}
      />
      <blockquote class="mx-4 mb-6">
        <p class="text-lg font-semibold text-gray-800 italic">“{quote}”</p>
      </blockquote>
    </div>
  </figure>
);

export default PlayerCard;
