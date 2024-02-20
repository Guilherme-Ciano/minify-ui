const globalvariables = {
  /* Fontes */
  fontFamilySansSerif: "'Roboto', sans-serif",
  fontFamilySerif: "'Roboto Slab', serif",
  fontSizeBase: '16px',
  fontColor: '#131313',

  /* Cores */
  colorWhite: '#fafafa',
  colorBlack: '#131313',
  colorPrimary: '#4285f4' /* Azul */,
  colorSecondary: '#34a853' /* Verde */,
  colorTertiary: '#fbbc05' /* Amarelo */,
  colorQuaternary: '#ea4335' /* Vermelho */,

  /* Pesos das Fontes */
  fontWeightLight: 100,
  fontWeightNormal: 400,
  fontWeightLightBold: 600,
  fontWeightBold: 700,
  fontWeightBolder: 900,

  /* Espaçamento */
  spacingSmall: '0.8rem' /* 8px */,
  spacingMedium: '1.6rem' /* 16px */,
  spacingLarge: '2.4rem' /* 24px */,

  /* Bordas */
  borderRadiusSmall: '0.2rem',
  borderRadiusMedium: '0.4rem',
  borderRadiusLarge: '0.8rem',
  borderWidth: '1px',
  borderStyle: 'solid',

  /* Transições */
  transitionDuration: '0.3s',

  /* Margens e Preenchimentos */
  marginSmall: '0.8rem' /* 8px */,
  marginMedium: '1.6rem' /* 16px */,
  marginLarge: '2.4rem' /* 24px */,
  paddingSmall: '0.8rem' /* 8px */,
  paddingMedium: '1.6rem' /* 16px */,
  paddingLarge: '2.4rem' /* 24px */,

  /* Altura e Largura */
  widthSmall: '20rem' /* 200px */,
  widthMedium: '40rem' /* 400px */,
  widthLarge: '60rem' /* 600px */,
  heightSmall: '20rem' /* 200px */,
  heightMedium: '40rem' /* 400px */,
  heightLarge: '60rem' /* 600px */,

  /* Opacidade */
  opacityLight: 0.5,
  opacityMedium: 0.7,
  opacityHeavy: 0.9,

  /* Z-Index */
  zIndexLow: 10,
  zIndexMedium: 50,
  zIndexHigh: 100,

  /* Posicionamento */
  positionRelative: 'relative',
  positionAbsolute: 'absolute',
  positionFixed: 'fixed',
  positionStatic: 'static',

  /* Button */
  buttonPadding: '0.2rem 0.5rem',
};

export const lightThemeVariables = {
  ...globalvariables,

  /* Cores de transição */
  backgroundColor: globalvariables.colorBlack,
  shadowColor: globalvariables.colorWhite,
  textColor: globalvariables.colorWhite,
};

export const darkThemeVariables = {
  ...globalvariables,

  /* Cores de transição */
  backgroundColor: globalvariables.colorWhite,
  fontColor: globalvariables.colorBlack,
  shadowColor: globalvariables.colorBlack,
  textColor: globalvariables.colorBlack,
};

export type Theme = 'light' | 'dark';
