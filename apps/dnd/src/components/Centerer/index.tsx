import { FunctionalComponent } from 'preact';

const Centerer: FunctionalComponent = ({ children }) => (
  <div class="h-full w-full flex justify-center items-center">
    <div>{children}</div>
  </div>
);

export default Centerer;
