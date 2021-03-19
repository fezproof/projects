export interface Player {
  slug: string;
  quote: string;
  image: string;
  name: string;
  class: string;
  race: string;
}

const players: Player[] = [
  {
    slug: '3ch0',
    quote:
      'I am finally free of this bond... I suppose I should find others who can be freed...',
    image:
      'https://www.dndbeyond.com/avatars/13962/240/1581111423-39379237.jpeg?width=300&height=300&fit=crop&quality=95&auto=web',
    name: '3CH0',
    class: 'Monk, Way of the Open Hand',
    race: 'Warforged',
  },
  {
    slug: 'damian',
    quote: 'Ohh dear, I hope Master Wei and I can be friends some day',
    image:
      'https://www.dndbeyond.com/avatars/12302/804/1581111423-33880218.jpeg?width=300&height=300&fit=crop&quality=95&auto=web',
    name: 'Damian von Hresvelg',
    class: 'Sorcerer, Shadow Magic',
    race: 'Human',
  },
];

export default players;
