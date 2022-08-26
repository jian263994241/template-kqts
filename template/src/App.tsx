import { useRoutes } from 'react-router-dom';
import lazyElement from 'src/utils/lazyElement';

function MyApp() {
  return useRoutes([
    {
      path: '/',
      element: lazyElement(() => import('src/pages/index'))
    }
  ]);
}

export default MyApp;
