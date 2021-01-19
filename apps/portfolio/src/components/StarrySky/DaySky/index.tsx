import { LinearGradient } from '@visx/gradient';
import { LinearGradientProps } from '@visx/gradient/lib/gradients/LinearGradient';
import { FC } from 'react';

const DaySky: FC<LinearGradientProps> = ({
  from = '#89e7ff',
  to = '#facda8',
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

export default DaySky;
