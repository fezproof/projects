export interface Player {
  slug: string;
  quote: string;
  image: string;
  name: string;
  class: string;
  race: string;
}

import halionImage from '../images/halion.png';
import limyeImage from '../images/limye.png';
import whistlerImage from '../images/whistler.png';
import marshaksImage from '../images/marshaks.png';

const players: Player[] = [
  {
    slug: 'limye',
    quote:
      'I am finally free of this bond... I suppose I should find others who can be freed...',
    image: limyeImage,
    name: 'Limye',
    class: 'Cleric',
    race: 'Tiefling',
  },
  {
    slug: 'marshaks',
    quote: 'I always knew adventuring would look this good',
    image: marshaksImage,
    name: 'Marshaks the Clanless',
    class: 'Sorcerer',
    race: 'Dragonborn',
  },
  {
    slug: 'whistler',
    quote: 'Oh dear, I hope Master Wei and I can be friends some day',
    image: whistlerImage,
    name: 'Whistler',
    class: 'Kensei Monk',
    race: 'Kenku',
  },
  {
    slug: 'halion',
    quote: 'This is a temp quote',
    image: halionImage,
    name: 'Halion',
    class: 'Tempest Cleric',
    race: 'Wood Elf',
  },
];

export default players;
