import { Box, chakra } from '@chakra-ui/react';
import { FC } from 'react';

const BasicCard: FC = chakra(Box, {
  baseStyle: {
    borderRadius: 'md',
    borderWidth: '2px',
    p: '0.5rem',
  },
});

export default BasicCard;
