import { LinearGradient } from '@visx/gradient';
import { LinearGradientProps } from '@visx/gradient/lib/gradients/LinearGradient';
import { FC } from 'react';

const NightSky: FC<LinearGradientProps> = ({
  from = '#080820',
  to = '#30194d',
  fromOffset = '0.5',
  toOffset = '1',
  ...rest
}) => (
  <LinearGradient
    from={from}
    fromOffset={fromOffset}
    to={to}
    toOffset={toOffset}
    {...rest}
  />
);

export default NightSky;
