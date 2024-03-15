import React from 'react';

import { AppContainerWrapper } from './AppContainer.styles';

type AppContainerProps = {
  children?: React.ReactNode;
};

const AppContainer = ({ children }: AppContainerProps) => {
  return <AppContainerWrapper as="main">{children}</AppContainerWrapper>;
};

export { AppContainer };
