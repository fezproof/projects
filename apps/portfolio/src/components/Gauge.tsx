import { Box, chakra, Flex, Text, useColorModeValue } from '@chakra-ui/react';
import { FC } from 'react';

interface GaugeProps {
  value: number;
  className?: string;
}

const Gauge: FC<GaugeProps> = ({ value, className }) => {
  const color = useColorModeValue('#1A202C', '#EDF2F7 ');
  return (
    <Box className={className} position="relative">
      <chakra.svg
        viewBox="0 0 120 120"
        width="100%"
        height="100%"
        strokeLinecap="round"
      >
        <chakra.circle
          opacity="0.1"
          stroke={color}
          strokeWidth="8"
          r="56"
          cx="60"
          cy="60"
        />
        <chakra.circle
          stroke={color}
          fill="none"
          strokeWidth="8"
          r="56"
          cx="60"
          cy="60"
          transform="rotate(-90deg)"
          transformOrigin="50% 50%"
          strokeDasharray={`${(value / 100) * 360}, 360`}
        />
      </chakra.svg>
      <Flex
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        alignItems="center"
        justifyContent="center"
      >
        <Text>
          <b>{value}</b>
        </Text>
      </Flex>
    </Box>
  );
};

export default chakra(Gauge);
