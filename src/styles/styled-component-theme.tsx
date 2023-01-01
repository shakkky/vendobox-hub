import muiTheme, { breakpoints, palette } from './mui-theme';
import colors from './colors';
import variables from './variables';
import { DefaultTheme } from 'styled-components';

const generateBreakpoint = (width: number, ...cssMarkup: string[]) => `
  @media screen and (max-width: ${width}px) {
    ${cssMarkup};
  }
`;

const styledComponentTheme: DefaultTheme = {
  ...muiTheme,
  ...variables,
  breakpoints,
  palette,
  colors,
  badge: {
    primary: colors.blue,
    secondary: colors.regentGrey,
    warning: colors.warning,
    danger: colors.error,
    purple: colors.lightPurple,
    info: colors.turquoise,
    grey: colors.betaGrey,
    dark: colors.darkPurple,
    light: [colors.alabaster, colors.regentGrey],
    blue: colors.darkBlue,
    white: colors.white,
    hold: colors.brown,
  },
  button: {
    primary: colors.jade,
    secondary: colors.regentGrey,
    danger: colors.error,
    hold: colors.brown,
    link: colors.persian,
    white: colors.white,
    warning: colors.warning,
  },
  checkbox: {
    primary: colors.blue,
  },
  generateBreakpoint,
  media: Object.keys(breakpoints).reduce((acc, label) => {
    acc[label] = (args: TemplateStringsArray) =>
      generateBreakpoint(
        breakpoints[label as keyof typeof breakpoints],
        ...args
      );

    return acc;
  }, {} as Record<string, (args: TemplateStringsArray) => string>),
};

export default styledComponentTheme;
