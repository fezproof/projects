import { Box, useColorModeValue } from '@chakra-ui/react';
import { GradientPinkBlue } from '@visx/gradient';
import { ParentSize } from '@visx/responsive';
import { AnimatePresence, motion } from 'framer-motion';
import { FC } from 'react';
import DaySky from './DaySky';
import Moon from './Moon';
import NightSky from './NightSky';
import Stars from './Stars';

const StarrySkySVG: FC = () => {
  const isLightMode = useColorModeValue(true, false);
  return (
    <AnimatePresence>
      <ParentSize>
        {({ width, height }) => (
          <svg width={width} height={height}>
            {isLightMode ? <DaySky id="sky" /> : <NightSky id="sky" />}
            <motion.rect width={width} height={height} fill="url(#sky)" />
            {!isLightMode && <Stars width={width} height={height} />}
            <Moon width={width} height={height} />
          </svg>
        )}
      </ParentSize>
    </AnimatePresence>
  );
};

const StarrySky: FC = () => (
  <Box position="fixed" top="0" left="0" right="0" height="100vh">
    <StarrySkySVG />
  </Box>
);

export default StarrySky;
