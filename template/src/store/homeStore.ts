import { types } from 'mobx-state-tree';

export const HomeStore = types.model('HomeStore', {
  title: types.optional(types.string, 'home')
});
