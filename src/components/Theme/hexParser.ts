import { ColorDefinition } from './interfaces';

function lightenColor(hex: string, percent: number): string {
  const bigint = parseInt(hex.replace('#', ''), 16);
  const factor = 1 + percent / 100;

  let r = (bigint >> 16) & 255;
  let g = (bigint >> 8) & 255;
  let b = bigint & 255;

  r = Math.min(Math.round(r * factor), 255);
  g = Math.min(Math.round(g * factor), 255);
  b = Math.min(Math.round(b * factor), 255);

  return '#' + ((r << 16) | (g << 8) | b).toString(16).padStart(6, '0');
}

function darkenColor(hex: string, percent: number): string {
  const bigint = parseInt(hex.replace('#', ''), 16);
  const factor = 1 - percent / 100;

  let r = (bigint >> 16) & 255;
  let g = (bigint >> 8) & 255;
  let b = bigint & 255;

  r = Math.max(Math.round(r * factor), 0);
  g = Math.max(Math.round(g * factor), 0);
  b = Math.max(Math.round(b * factor), 0);

  return '#' + ((r << 16) | (g << 8) | b).toString(16).padStart(6, '0');
}

export function parseColor(hexColor: string): ColorDefinition {
  const lighter10 = lightenColor(hexColor, 10);
  const lighter20 = lightenColor(hexColor, 20);
  const darker10 = darkenColor(hexColor, 10);
  const darker20 = darkenColor(hexColor, 20);

  return {
    300: lighter20,
    400: lighter10,
    500: hexColor,
    600: darker10,
    700: darker20,
  };
}
