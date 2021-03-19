import { FunctionComponent } from 'preact';
import { Player } from '../../data/players';

const PlayerCard: FunctionComponent<Player> = ({
  quote,
  image,
  name,
  class: playerClass,
  race,
}) => (
  <figure class="lg:flex bg-gray-100 rounded-lg p-8 lg:p-0 overflow-hidden h-full w-full">
    <img
      class="w-32 h-32 lg:w-48 lg:h-auto lg:rounded-none rounded-full mx-auto object-cover"
      src={image}
      alt={name}
      width="150"
      height="150"
    />
    <div class="pt-6 lg:p-8 text-center lg:text-left space-y-4">
      <blockquote>
        <p class="text-lg font-semibold text-gray-800 italic">“{quote}”</p>
      </blockquote>
      <figcaption class="font-medium">
        <div class="text-cyan-600">{name}</div>
        <div class="text-gray-500">{race}</div>
        <div class="text-gray-500">{playerClass}</div>
      </figcaption>
    </div>
  </figure>
);

export default PlayerCard;
