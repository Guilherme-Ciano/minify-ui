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
      '300': '#A8D4FF',
      '400': '#578BBD',
      '500': '#235789',
      '600': '#163757',
      '700': '#091724',
    },

    Secondary: {
      '300': '#E5FFF8',
      '400': '#C5EDE2',
      '500': '#75BBA7',
      '600': '#558779',
      '700': '#15211E',
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
      '300': '#FAFAF9',
      '400': '#E7E5E4',
      '500': '#A5A5A5',
      '600': '#18181B',
      '700': '#09090B',
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
