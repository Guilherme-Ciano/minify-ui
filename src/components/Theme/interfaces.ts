export enum EThemeMode {
  dark = 'dark',
  light = 'light',
}

interface FontSizesDefinition {
  Heading1?: string;
  Heading2?: string;
  Heading3?: string;
  Normal?: string;
  Small?: string;
}

interface WeightDefinition {
  Light?: number;
  Normal?: number;
  LightBold?: number;
  Bold?: number;
  Bolder?: number;
}

export interface ColorDefinition {
  100?: string;
  200?: string;
  300?: string;
  400?: string;
  500?: string;
  600?: string;
  700?: string;
  800?: string;
  900?: string;
}

interface ColorEventDefinition {
  Success: ColorDefinition;
  Warning: ColorDefinition;
  Danger: ColorDefinition;
}

interface SizeDefinition {
  sxsm?: string;
  xsm?: string;
  sm?: string;
  md?: string;
  lg?: string;
  xl?: string;
  sxl?: string;
}

interface FontVariables {
  Family?: string;
  Sizes?: FontSizesDefinition;
  Weight?: WeightDefinition;
}

interface ColorVariables {
  TextColor?: string;
  Primary?: ColorDefinition;
  Secondary?: ColorDefinition;
  Events?: ColorEventDefinition;
  Neutral?: ColorDefinition;
  BW?: ColorDefinition;
}

export interface GlobalVariablesProps {
  Font?: FontVariables;
  Colors?: ColorVariables;
  Size?: SizeDefinition;
}
