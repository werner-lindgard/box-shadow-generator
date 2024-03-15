/**
 * The Box Shadow Generator application.
 *
 * Heavily inspired by the Box Shadow Generator tutorial by Coding Artist.
 *
 * This is an expanded React version fo the same project.
 */

import React from 'react';

import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from 'src/theme';

import { AppContainer, Editor, Header } from 'src/components';

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header>Box Shadow Generator</Header>
        <AppContainer>
          <Editor></Editor>
        </AppContainer>
      </ThemeProvider>
    </>
  );
};

export { App };
