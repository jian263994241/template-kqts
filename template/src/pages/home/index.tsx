import * as React from 'react';
import { observer } from 'mobx-react';
import { createUseStyles } from '@wonder-ui/styles';
import useStore from 'src/hooks/useStore';

const useStyles = createUseStyles({
  root: {
    textAlign: 'center'
  },
  header: {
    backgroundColor: '#282c34',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(10px + 2vmin)',
    color: 'white'
  },
  link: {
    color: '#61dafb'
  }
});

export default observer(function HomePage(): JSX.Element {
  const {
    store: { home }
  } = useStore();

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <header className={classes.header}>
        {home.title}
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className={classes.link}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
});
