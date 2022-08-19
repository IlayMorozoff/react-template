import React from 'react';
import { Button } from './components/button/button';
import { Portal } from './components/portal/portal';

export const App: React.FC = () => {
  return (
    <Portal>
      <Button>Hello</Button>
    </Portal>
  );
};
