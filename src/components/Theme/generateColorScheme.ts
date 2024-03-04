import { MinifyUITheme, MinifyUIThemeProps } from '.';
import { parseColor } from './hexParser';

export interface generateColorSchemeProps {
  Primary?: string;
  Secondary?: string;
  Neutral?: string;
  Success?: string;
  Warning?: string;
  Danger?: string;
}

export function generateColorScheme({
  Primary = undefined,
  Secondary = undefined,
  Neutral = undefined,
  Success = undefined,
  Warning = undefined,
  Danger = undefined,
}: generateColorSchemeProps): MinifyUIThemeProps {
  const primaryColor = () => {
    if (!Primary) return MinifyUITheme.Colors?.Primary;
    return parseColor(Primary);
  };

  const secondaryColor = () => {
    if (!Secondary) return MinifyUITheme.Colors?.Secondary;
    return parseColor(Secondary);
  };

  const neutralColor = () => {
    if (!Neutral) return MinifyUITheme.Colors?.Neutral;
    return parseColor(Neutral);
  };

  const successColor = () => {
    if (!Success) return parseColor('#76c893');
    return parseColor(Success);
  };

  const warningColor = () => {
    if (!Warning) return parseColor('#FFE45E');
    return parseColor(Warning);
  };

  const dangerColor = () => {
    if (!Danger) return parseColor('#E5383B');
    return parseColor(Danger);
  };

  return {
    Colors: {
      BW: { ...MinifyUITheme.Colors?.BW },
      Neutral: { ...neutralColor() },
      Primary: { ...primaryColor() },
      Secondary: { ...secondaryColor() },
      Events: {
        Success: { ...successColor() },
        Warning: { ...warningColor() },
        Danger: { ...dangerColor() },
      },
    },
  };
}
