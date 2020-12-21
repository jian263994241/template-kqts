import * as React from 'react';
import { MobXProviderContext } from 'mobx-react';
import { Instance } from 'mobx-state-tree';
import Stores from 'src/store';

export default function useStore() {
  return React.useContext<Record<'store', Instance<typeof Stores>>>(
    MobXProviderContext
  );
}
