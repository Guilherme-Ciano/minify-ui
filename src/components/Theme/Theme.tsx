import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';
import { GlobalVariablesProps } from './interfaces';
import React from 'react';
import { globalVariables } from './variables';

export interface MinifyUIThemeProviderProps {
  theme?: GlobalVariablesProps;
  children: JSX.Element | JSX.Element[];
}

export function MinifyUIThemeProvider({
  theme = globalVariables,
  children,
}: MinifyUIThemeProviderProps) {
  return (
    <StyledComponentsThemeProvider theme={theme}>
      {children}
    </StyledComponentsThemeProvider>
  );
}
