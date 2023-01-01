import React from 'react';
import { ThemeOptions } from '@material-ui/core';
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from 'styled-components';

import './custom-bootstrap.scss';
import styledComponentTheme from './styled-component-theme';
import muiTheme from './styled-component-theme';

const muiThemeObject = createTheme((muiTheme as unknown) as ThemeOptions);

export const withMaterialUITheme = (wrappedComponent: React.ReactNode) => (
  <MuiThemeProvider theme={muiThemeObject}>{wrappedComponent}</MuiThemeProvider>
);

export const withStyledComponentTheme = (wrappedComponent: React.ReactNode) => (
  <ThemeProvider theme={styledComponentTheme}>{wrappedComponent}</ThemeProvider>
);

export const ThemedApp = ({ children }: { children: React.ReactNode }) => (
  <MuiThemeProvider theme={muiThemeObject}>
    <ThemeProvider theme={styledComponentTheme}>{children}</ThemeProvider>
  </MuiThemeProvider>
);
