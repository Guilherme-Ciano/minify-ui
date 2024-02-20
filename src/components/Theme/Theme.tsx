import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';
import { GlobalVariablesProps } from './interfaces';
import React from 'react';
import { globalVariables } from './variables';

export interface ThemeProviderProps {
  theme?: GlobalVariablesProps;
  children: JSX.Element;
}

const MinimalUIThemeProvider: React.FC<ThemeProviderProps> = ({
  theme = globalVariables,
  children,
}) => (
  <StyledComponentsThemeProvider theme={theme}>
    {children}
  </StyledComponentsThemeProvider>
);

export default MinimalUIThemeProvider;
