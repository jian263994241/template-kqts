import { createHashRouter } from 'react-router-dom';
import Root from './pages/root';

export const router = createHashRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/index',
        lazy: () => import('./pages/index')
      }
    ]
  }
]);

window.app = router;

declare global {
  interface Window {
    __ENV__: {
      name: 'st02' | 'prod';
    };
    app: typeof router;
  }
}
