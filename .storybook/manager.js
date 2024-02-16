import { addons } from '@storybook/manager-api';
import minifyTheme from './minifyTheme';

addons.setConfig({
  theme: minifyTheme,
});
