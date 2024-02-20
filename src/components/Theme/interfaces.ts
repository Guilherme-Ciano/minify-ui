interface FontVariables {
  fontFamilySansSerif: string;
  fontFamilySerif: string;
  fontSizeBase: string;
  fontColor: string;

  fontWeightLight: number;
  fontWeightNormal: number;
  fontWeightLightBold: number;
  fontWeightBold: number;
  fontWeightBolder: number;
}

interface ColorVariables {
  colorWhite: string;
  colorBlack: string;

  colorPrimary: string;
  colorSecondary: string;

  colorError: string;
  colorSuccess: string;
  colorWarning: string;
}

interface BorderVariables {
  borderRadiusSmall: string;
  borderRadiusMedium: string;
  borderRadiusLarge: string;
  borderWidth: string;
  borderStyle: string;
}

interface SpacingVariables {
  spacingSmall: string;
  spacingMedium: string;
  spacingLarge: string;
}

interface SizeVariables {
  widthSmall: string;
  widthMedium: string;
  widthLarge: string;
  widthFullWidthView: string;

  heightSmall: string;
  heightMedium: string;
  heightLarge: string;
  heightFullHeightView: string;
}

interface OpacityVariables {
  opacityLight: number;
  opacityMedium: number;
  opacityHeavy: number;
}

export interface GlobalVariablesProps {
  fontVariables: FontVariables;
  colorVariables: ColorVariables;
  borderVariables: BorderVariables;
  spacingVariables: SpacingVariables;
  sizeVariables: SizeVariables;
  opacityVariables: OpacityVariables;
}
