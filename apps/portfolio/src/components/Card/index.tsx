import { chakra } from '@chakra-ui/react';

const Card = chakra('div', {
  baseStyle: {
    display: 'inline-block',
    background: 'rgba(255,255,255,0.2)',
    padding: '1rem',
    borderRadius: '1rem',
    position: 'relative',
    backdropFilter: 'blur(64px)',
    backgroundClip: 'padding-box',
    border: 'solid 2px transparent',
  },
  label: 'Card',
});

export default Card;
