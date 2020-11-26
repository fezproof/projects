import { Box, chakra } from '@chakra-ui/react';

const BasicCard = chakra(Box, {
  baseStyle: {
    borderRadius: 'md',
    borderWidth: '2px',
    p: '0.75rem',
  },
});

export default BasicCard;
