import { createBrowserRouter, createHashRouter } from 'react-router-dom';
import Root from './pages/root';

export const router = createHashRouter(
  [
    {
      path: '/',
      element: <Root />,
      children: [
        {
          path: '/login',
          lazy: () => import('./pages/index')
        }
      ]
    }
  ]
  // { basename: process.env.PUBLIC_URL }
);

window.app = router;
