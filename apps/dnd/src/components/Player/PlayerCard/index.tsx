import { gql } from '@urql/core';
import { FunctionComponent } from 'preact';
import { PlayerCardFragment } from '../../../generated/graphql';
import halion from '../../../images/halion.png';

export const PLAYER_CARD_FRAGMENT = gql`
  fragment PlayerCard on Page {
    id
    title
    snippet
    hero
  }
`;

const PlayerCard: FunctionComponent<PlayerCardFragment> = ({
  id,
  title,
  hero,
  snippet,
}) => (
  <figure class="rounded-lg overflow-hidden w-full max-w-sm bg-[#EFEEE9] h-full border-solid border-8">
    <div class="text-center h-full">
      <figcaption class="font-medium text-center mx-4 mt-6 h-32">
        <div class="text-gray-900 text-3xl">{title || 'No title'}</div>
        <div class="text-gray-600">
          {'race'} {'classs'}
        </div>
      </figcaption>
      <img
        class="w-full h-96 lg:rounded-none rounded-full object-scale-down"
        src={halion}
        alt={title || id}
      />
      <blockquote class="mx-4 mb-6">
        <p class="text-lg font-semibold text-gray-800 italic">
          “{snippet || 'No quote provided...'}”
        </p>
      </blockquote>
    </div>
  </figure>
);

export default PlayerCard;
