import { Suspense } from 'preact/compat';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Loading from './components/Loading';
import Nav from './components/Nav';
import Router from './router';

export function App() {
  return (
    <BrowserRouter>
      {/* <Nav /> */}

      <Suspense fallback={<Loading />}>
        <Router />
      </Suspense>
    </BrowserRouter>
  );
}
