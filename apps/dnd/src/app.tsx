import { Provider } from '@urql/preact';
import { Suspense } from 'preact/compat';
import { BrowserRouter } from 'react-router-dom';
import Loading from './components/Loading';
import { client } from './libs/urqlClient';
import Router from './router';

export function App() {
  return (
    <BrowserRouter>
      <Provider value={client}>
        {/* <Nav /> */}

        <Suspense fallback={<Loading />}>
          <Router />
        </Suspense>
      </Provider>
    </BrowserRouter>
  );
}
