import { chakra } from '@chakra-ui/react';

const PrintHidden = chakra('div', {
  baseStyle: {
    '@media print': {
      display: 'none !important',
    },
  },
});

export default PrintHidden;
