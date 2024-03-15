import { Outlet, Navigate, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

export default function RootElement() {
  let location = useLocation();

  return (
    <HelmetProvider>
      {location.pathname === '/' && <Navigate to="/index" replace />}
      <Outlet />
    </HelmetProvider>
  );
}
