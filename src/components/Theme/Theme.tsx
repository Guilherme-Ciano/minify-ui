import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';
import { GlobalVariablesProps } from './interfaces';
import React from 'react';
import { globalVariables } from './variables';

export interface MinimalUIThemeProviderProps {
  theme?: GlobalVariablesProps;
  children: JSX.Element;
}

export function MinimalUIThemeProvider({
  theme = globalVariables,
  children,
}: MinimalUIThemeProviderProps) {
  return (
    <StyledComponentsThemeProvider theme={theme}>
      {children}
    </StyledComponentsThemeProvider>
  );
}
