import { GlobalVariablesProps } from './interfaces';

export const globalVariables: GlobalVariablesProps = {
  Font: {
    Family: "'Inter', sans-serif",
    Sizes: {
      Heading1: '2.5rem',
      Heading2: '2rem',
      Heading3: '1.5rem',
      Normal: '1rem',
      Small: '0.75rem',
    },
    Weight: {
      Light: 100,
      Normal: 400,
      LightBold: 600,
      Bold: 700,
      Bolder: 900,
    },
  },

  Colors: {
    Primary: {
      '100': '#D6EBFF',
      '200': '#ADD8FF',
      '300': '#70BAFF',
      '400': '#47A6FF',
      '500': '#004E98',
      '600': '#003566',
      '700': '#002A52',
      '800': '#00203D',
      '900': '#001529',
    },

    Secondary: {
      '100': '#FDE0C4',
      '200': '#FBCC9D',
      '300': '#F9B877',
      '400': '#F7A350',
      '500': '#F58F29',
      '600': '#EA7A0B',
      '700': '#C36609',
      '800': '#271402',
      '900': '#130A01',
    },

    Events: {
      Success: {
        '300': '#8ef0b0',
        '400': '#82dca2',
        '500': '#76c893',
        '600': '#6ab484',
        '700': '#5ea076',
      },
      Warning: {
        '300': '#ffff71',
        '400': '#fffb67',
        '500': '#FFE45E',
        '600': '#e6cd55',
        '700': '#ccb64b',
      },
      Danger: {
        '300': '#ff4347',
        '400': '#fc3e41',
        '500': '#E5383B',
        '600': '#ce3235',
        '700': '#b72d2f',
      },
    },

    Neutral: {
      '300': '#E2E8F0',
      '400': '#94A3B8',
      '500': '#64748B',
      '600': '#334155',
      '700': '#020617',
    },

    BW: {
      '100': '#ffffff',
      '200': '#fbfbfb',
      '300': '#d3d3d3',
      '400': '#00000073',
      '500': '#8b8b8b',
      '600': '#000000a6',
      '700': '#000000bf',
      '800': '#000000d9',
      '900': '#000000f2',
    },
  },

  Size: {
    sxsm: '0.5rem',
    xsm: '0.8rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '4rem',
    sxl: '6rem',
  },
};
