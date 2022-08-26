import { lazy, Suspense } from 'react';

const lazyElement = (load: () => Promise<{ default: React.ComponentType }>) => {
  const Component = lazy(load);
  return (
    <Suspense fallback={<div></div>}>
      <Component />
    </Suspense>
  );
};

export default lazyElement;
