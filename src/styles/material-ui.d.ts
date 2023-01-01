import colors from './colors';

declare module '@material-ui/core/styles/createTheme' {
  export interface Theme {
    colors: colors;
    breakpoints: Breakpoints & {
      xxl: number;
    };
    fonts: Record<string, string>;
  }
  export interface ThemeOptions {
    fonts: Record<string, string>;
    colors: colors;
  }
}

declare module '@material-ui/core/styles/createPalette' {
  interface Palette {
    danger: Palette['primary'];
  }
  interface PaletteOptions {
    danger: PaletteOptions['primary'];
  }
}

declare module '@material-ui/core/styles/createBreakpoints' {
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    xxl: true;
    tablet: true;
    phone: true;
  }
}
