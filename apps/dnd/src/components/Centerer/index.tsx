import classNames from 'classnames';
import { FunctionalComponent } from 'preact';

const Centerer: FunctionalComponent<JSX.HTMLAttributes> = ({
  children,
  className,
}) => (
  <div
    class={classNames(
      'h-full w-full flex justify-center items-center',
      className,
    )}
  >
    {children}
  </div>
);

export default Centerer;
