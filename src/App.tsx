import React, { FC } from 'react';
import { BackendProvider } from '@gooddata/sdk-ui';

import AppRouter from './routes/AppRouter';
import { useAuth } from './contexts/Auth';
import { WorkspaceListProvider } from './contexts/WorkspaceList';

const App: FC = () => {
  const { backend } = useAuth();

  return (
    <BackendProvider backend={backend}>
      <WorkspaceListProvider>
        <AppRouter />
      </WorkspaceListProvider>
    </BackendProvider>
  );
};

export default App;
