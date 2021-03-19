import { FunctionalComponent } from 'preact';
import { FunctionComponent, lazy } from 'preact/compat';
import { Route, Switch } from 'react-router-dom';

const pageModules = import.meta.glob('./pages/**/*.tsx');

// Rewrite path as route
const getRotueFromPath = (path: string) =>
  path.replaceAll(/(.\/pages)|(index.tsx)|(.tsx)/g, '');

const pages = Object.entries(pageModules)
  .map(([path, pageModule]) => {
    const route = getRotueFromPath(path);

    return {
      route,
      depth: route.split('/').length,
      Component: lazy(
        pageModule as () => Promise<{ default: FunctionalComponent }>,
      ),
    };
  })
  .sort(function (a, b) {
    if (a.depth !== b.depth) {
      return b.depth - a.depth;
    }

    var nameA = a.route.toUpperCase(); // ignore upper and lowercase
    var nameB = b.route.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return 1;
    }
    if (nameA > nameB) {
      return -1;
    }

    // names must be equal
    return 0;
  });

const Router: FunctionComponent = () => (
  <Switch>
    {pages.map(({ route, Component }) => (
      <Route exact path={route} key={route}>
        <Component />
      </Route>
    ))}
    <Route>
      <div>Not found</div>
    </Route>
  </Switch>
);

export const allRoutes = pages.map(({ route }) => route);

export default Router;
