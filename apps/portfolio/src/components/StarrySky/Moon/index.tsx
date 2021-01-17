import { Circle } from '@visx/shape';
import { ComponentProps, FC } from 'react';

type CircleProps = ComponentProps<typeof Circle>;

interface MoonProps extends CircleProps {
  width: number;
  height: number;
}

const Moon: FC<MoonProps> = ({
  width,
  height,
  r = 120,
  fill = '#ffffff',
  ...rest
}) => {
  const cx = width / 2;
  const cy = 0;
  return <Circle r={r} fill={fill} cx={cx} cy={cy} {...rest}></Circle>;
};

export default Moon;
