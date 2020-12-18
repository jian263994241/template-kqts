import { types, getEnv } from 'mobx-state-tree';
import { HomeStore } from './homeStore';

const Stores = types
  .model('Stores', {
    home: types.optional(HomeStore, {})
  })
  .views((self) => {
    return {
      get fetch() {
        return getEnv(self).fetch;
      }
    };
  });

export default Stores;
