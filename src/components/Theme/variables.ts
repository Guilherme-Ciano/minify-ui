import { GlobalVariablesProps } from './interfaces';

export const globalVariables: GlobalVariablesProps = {
  fontVariables: {
    fontFamilySansSerif: "'Roboto', sans-serif",
    fontFamilySerif: "'Roboto Slab', serif",
    fontSizeBase: '16px',
    fontColor: '#131313',

    fontWeightLight: 100,
    fontWeightNormal: 400,
    fontWeightLightBold: 600,
    fontWeightBold: 700,
    fontWeightBolder: 900,
  },

  colorVariables: {
    colorWhite: '#fafafa',
    colorBlack: '#001524',

    colorPrimary: '#168aad',
    colorSecondary: '#1e6091',

    colorError: '#e5383b',
    colorSuccess: '#76c893',
    colorWarning: '#ffe45e',
  },

  sizeVariables: {
    widthSmall: '20rem',
    widthMedium: '40rem',
    widthLarge: '60rem',
    widthFullWidthView: '100vw',

    heightSmall: '20rem',
    heightMedium: '40rem',
    heightLarge: '60rem',
    heightFullHeightView: '100vh',
  },

  borderVariables: {
    borderRadiusSmall: '0.2rem',
    borderRadiusMedium: '0.4rem',
    borderRadiusLarge: '0.8rem',
    borderWidth: '1px',
    borderStyle: 'solid',
  },

  spacingVariables: {
    spacingSmall: '0.8rem',
    spacingMedium: '1.6rem',
    spacingLarge: '2.4rem',
  },

  opacityVariables: {
    opacityLight: 0.5,
    opacityMedium: 0.7,
    opacityHeavy: 0.9,
  },
};
