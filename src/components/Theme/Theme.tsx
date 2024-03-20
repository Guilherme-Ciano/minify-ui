import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';
import { EThemeMode, GlobalVariablesProps } from './interfaces';
import React from 'react';
import { globalVariables } from './variables';
import {
  generateColorScheme,
  generateColorSchemeProps,
} from './generateColorScheme';

export interface MinifyUIThemeProviderProps {
  theme?: GlobalVariablesProps;
  themeMode?: EThemeMode;
  colorScheme?: generateColorSchemeProps;
  children: JSX.Element | JSX.Element[];
}

export function MinifyUIThemeProvider({
  themeMode = EThemeMode.light,
  theme = globalVariables,
  colorScheme,
  children,
}: MinifyUIThemeProviderProps) {
  const createColorScheme = generateColorScheme({
    themeMode,
    Neutral: colorScheme?.Neutral,
    Primary: colorScheme?.Primary,
    Secondary: colorScheme?.Secondary,
    Danger: colorScheme?.Danger,
    Success: colorScheme?.Success,
    Warning: colorScheme?.Warning,
  });

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
