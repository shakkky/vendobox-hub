import colors from './colors';
import { breakpoints, palette } from './mui-theme';
import variables from './variables';
// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: typeof colors;
    breakpoints: typeof breakpoints;
    badge: {
      primary: typeof colors['blue'];
      secondary: typeof colors['regentGrey'];
      warning: typeof colors['warning'];
      danger: typeof colors['error'];
      purple: typeof colors['lightPurple'];
      info: typeof colors['turquoise'];
      grey: typeof colors['betaGrey'];
      dark: typeof colors['darkPurple'];
      light: [typeof colors['alabaster'], typeof colors['regentGrey']];
      blue: typeof colors['darkBlue'];
      white: typeof colors['white'];
      hold: typeof colors['brown'];
    };
    button: {
      primary: string;
      secondary: string;
      danger: string;
      hold: string;
      link: string;
      white: string;
      warning: string;
    };
    checkbox: {
      primary: string;
    };
    generateBreakpoint: (width: number, ...cssMarkup: string[]) => string;
    media: Record<string, (args: TemplateStringsArray) => string>;

    palette: typeof palette;
    toolbarHeight: typeof variables['toolbarHeight'];
    sizes: typeof variables['sizes'];
    fonts: typeof variables['fonts'];
    fontSize: typeof variables['fontSize'];
  }
}
