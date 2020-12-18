import React from 'react';
import { Provider } from 'mobx-react';
import Store from './store';
import { fetch } from 'src/service';

import HomePage from './pages/home';

const store = Store.create({}, { fetch });

function MyApp() {
  return (
    <Provider store={store}>
      <HomePage />
    </Provider>
  );
}

export default MyApp;
