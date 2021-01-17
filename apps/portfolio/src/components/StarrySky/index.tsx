import { Box } from '@chakra-ui/react';
import { ParentSize } from '@visx/responsive';
import { FC } from 'react';
import Moon from './Moon';
import NightSky from './NightSky';
import Stars from './Stars';

const StarrySkySVG: FC = () => (
  <ParentSize>
    {({ width, height }) => (
      <svg width={width} height={height}>
        <NightSky id="night-sky" />
        <rect width={width} height={height} fill="url(#night-sky)" />
        <Stars width={width} height={height} />
        <Moon width={width} height={height} />
      </svg>
    )}
  </ParentSize>
);

const StarrySky: FC = () => (
  <Box position="fixed" top="0" left="0" right="0" height="100vh">
    <StarrySkySVG />
  </Box>
);

export default StarrySky;
