import { Fragment } from 'react';

interface NoSnapProps {
  children?: React.ReactNode;
  placeholder?: React.ReactNode;
}

export default function NoSnap(props: NoSnapProps) {
  const { children, placeholder = null } = props;
  const inReactSnap = navigator.userAgent === 'ReactSnap';

  return <Fragment>{!inReactSnap ? children : placeholder}</Fragment>;
}
