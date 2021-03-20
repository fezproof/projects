import { FunctionComponent } from 'preact';
import { lazy, Suspense } from 'preact/compat';
import Hero from '../components/Home/Hero';
import Loading from '../components/Loading';

const PlayerList = lazy(() => import('../components/Player/PlayerList'));

const IndexPage: FunctionComponent = () => (
  <div>
    <Hero />
    <main class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <Suspense fallback={<Loading />}>
        <PlayerList />
      </Suspense>
      <div class="my-4">
        <h2 class="text-gray-800 mx-auto text-center text-4xl mt-2 mb-8 font-serif">
          The Nations
        </h2>
      </div>
      <div class="my-4">
        <h2 class="text-gray-800 mx-auto text-center text-4xl mt-2 mb-8 font-serif">
          The Lands
        </h2>
      </div>
    </main>
  </div>
);

export default IndexPage;
