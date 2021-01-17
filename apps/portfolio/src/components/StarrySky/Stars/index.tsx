import React, { FC, useMemo } from 'react';
import { Group } from '@visx/group';
import { Circle } from '@visx/shape';
import { scaleLinear } from '@visx/scale';
import genRandomNormalPoints, {
  PointsRange,
} from '@visx/mock-data/lib/generators/genRandomNormalPoints';

const x = ([d]: PointsRange) => d;
const y = ([, d]: PointsRange) => d;
const z = ([, , d]: PointsRange) => d;

export type DotsProps = {
  width: number;
  height: number;
};

const Stars: FC<DotsProps> = ({ width, height }) => {
  if (width < 10) return null;
  console.log(width);

  const points = useMemo(() => {
    const count = Math.floor(width / 2);
    return genRandomNormalPoints(count).filter((_, i) => i < count);
  }, [width]);

  const xScale = useMemo(
    () =>
      scaleLinear<number>({
        domain: [1.3, 2.2],
        range: [0, width],
        clamp: true,
      }),
    [width],
  );
  const yScale = useMemo(
    () =>
      scaleLinear<number>({
        domain: [0.5, 2],
        range: [0, height],
        clamp: true,
      }),
    [height],
  );

  const opacityScale = useMemo(
    () =>
      scaleLinear<number>({
        domain: [0, height],
        range: [1, 0],
        clamp: true,
      }),
    [height],
  );

  return (
    <Group pointerEvents="none">
      {points.map((point, i) => {
        const cx = xScale(x(point));
        const cy = yScale(y(point));
        const r = i % 3;

        const opacity = opacityScale(cy);
        return (
          <Circle
            key={`point-${point[0]}-${i}`}
            className="dot"
            cx={cx}
            cy={cy}
            r={r}
            fill="white"
            opacity={opacity}
          />
        );
      })}
    </Group>
  );
};

export default Stars;
