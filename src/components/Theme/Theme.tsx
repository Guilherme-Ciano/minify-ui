import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';
import { GlobalVariablesProps } from './interfaces';
import React from 'react';
import { globalVariables } from './variables';
import {
  generateColorScheme,
  generateColorSchemeProps,
} from './generateColorScheme';

export interface MinifyUIThemeProviderProps {
  theme?: GlobalVariablesProps;
  colorScheme?: generateColorSchemeProps;
  children: JSX.Element | JSX.Element[];
}

export function MinifyUIThemeProvider({
  theme = globalVariables,
  colorScheme,
  children,
}: MinifyUIThemeProviderProps) {
  const createColorScheme = generateColorScheme({
    Neutral: colorScheme?.Neutral,
    Primary: colorScheme?.Primary,
    Secondary: colorScheme?.Secondary,
    Danger: colorScheme?.Danger,
    Success: colorScheme?.Success,
    Warning: colorScheme?.Warning,
  });

  console.log('colors:', createColorScheme);

  return (
    <StyledComponentsThemeProvider
      theme={{
        ...globalVariables,
        ...theme,
        ...createColorScheme,
      }}
    >
      {children}
    </StyledComponentsThemeProvider>
  );
}
