import { LinearGradient } from '@visx/gradient';
import { LinearGradientProps } from '@visx/gradient/lib/gradients/LinearGradient';
import { motion } from 'framer-motion';
import { FC } from 'react';

const NightSky: FC<LinearGradientProps> = ({
  from = '#080820',
  to = '#30194d',
  fromOffset = '0.5',
  toOffset = '1',
  ...rest
}) => {
  console.log(to, from, fromOffset, toOffset);
  return (
    <LinearGradient
      from={from}
      fromOffset={fromOffset}
      to={to}
      toOffset={toOffset}
      {...rest}
    >
      <motion.stop offset={fromOffset} stopColor={from} stopOpacity="1" />
      <motion.stop offset={toOffset} stopColor={to} stopOpacity="1" />
    </LinearGradient>
  );
};

export default NightSky;
