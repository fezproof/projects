import { Fade, Slide, useColorModeValue } from '@chakra-ui/react';
import { Group } from '@visx/group';
import { Circle } from '@visx/shape';
import { motion } from 'framer-motion';
import React, { ComponentProps, FC } from 'react';

type CircleProps = ComponentProps<typeof Circle>;

interface MoonProps extends CircleProps {
  width: number;
  height: number;
}
const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: -120,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const Moon: FC<MoonProps> = ({
  width,
  height,
  r = 120,
  fill = '#fcfcfc',
  ...rest
}) => {
  const isMoon = useColorModeValue('closed', 'open');
  return (
    <motion.g variants={variants} animate={isMoon} opacity="0">
      <Group top={0} left={width / 2}>
        <Circle r={r} fill={fill} {...rest}></Circle>
        <Circle r={30} cx={-30} cy={20} fill="#f4f4f4"></Circle>
        <Circle r={12} cx={-80} cy={-40} fill="#f4f4f4"></Circle>
        <Circle r={20} cx={40} cy={60} fill="#f4f4f4"></Circle>
        <Circle r={10} cx={-15} cy={90} fill="#f4f4f4"></Circle>
        <Circle r={22} cx={50} cy={-70} fill="#f4f4f4"></Circle>
      </Group>
    </motion.g>
  );
};

export default Moon;
