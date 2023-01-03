import React from 'react';
import styled from 'styled-components';
import { MenuItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ExpandMore } from '@material-ui/icons';

import { Color } from 'styles/colors';

const StyledMenuItem = styled(MenuItem)<{
  to?: string;
  component?: unknown;
}>`
  padding-top: 12px !important;
  padding-bottom: 12px !important;
  box-sizing: content-box !important;
  margin-left: 'inherit';
  svg {
    margin-right: 25px;
  }
  @media (max-width: 1490px) {
    font-size: 12px !important;
    font-weight: bold;
    margin-left: 12px !important;
    margin-right: 20px;
  }

  @media (max-width: ${props => props.theme.breakpoints.phone}px) {
    font-size: 18px !important;
    margin-left: 5px !important;
  }
`;

const DrawerWrapper = styled.div`
  height: 100%;
  min-height: 94vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${props => props.theme.colors.white};

  @media (max-width: ${props => props.theme.breakpoints.phone}px) {
    #logo {
      height: 42px;
    }
  }
`;

const DrawerMenuContent = styled.div`
  outline: none !important;
`;

const HeaderNavWrapper = styled.div`
  position: absolute;
  right: 50px;

  img {
    border-radius: 50%;
    width: 36px;
    height: 36px;
  }

  button {
    background-color: ${props => props.theme.colors.white};
    color: ${props => props.theme.colors.persian};
    border-color: ${props => props.theme.colors.persian};
    margin-right: 10px;

    &:hover {
      color: ${props => props.theme.colors.persian};
      background-color: ${props =>
        Color(props.theme.colors.white).fade(0.1).string()};
    }
  }

  button.btn-outline {
    background-color: ${props => props.theme.colors.persian};
    color: ${props => props.theme.colors.white};
    border-color: ${props => props.theme.colors.white};

    &:hover {
      color: ${props => props.theme.colors.white};
      background-color: ${props =>
        Color(props.theme.colors.black).fade(0.9).string()};
    }
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px;
  align-items: center;
  margin: auto;

  @media (max-width: ${props => props.theme.breakpoints.phone}px) {
    margin-bottom: 10px;
  }
`;

const LogoCopy = styled.div`
  padding: 10px;

  font-weight: 600;
  font-size: 1.5rem;
  color: ${props => props.theme.colors.jade};
`;

const Content = styled.main`
  padding-left: 17rem;
  padding-right 0.5rem;
  padding-top: 0.5rem;
  @media (max-width: 1440px) {
    padding-left: 13rem;
  }
  flex-grow: 1;
  min-height: 100vh;

  background-color: ${props => props.theme.colors.offWhite};

  @media (max-width: 959px) {
    padding-left: 0.5rem;
  }
`;

const LayoutWrapper = styled.div`
  flex-grow: 1;
  overflow: hidden;
  z-index: 1;
  position: relative;
  width: 100%;
  height: 100%;
`;

const useStyles = makeStyles(theme => ({
  icon: {
    transition: theme.transitions.create(['transform'], {
      duration: theme.transitions.duration.short,
    }),
    cursor: 'pointer',
  },
  expanded: {
    transform: 'rotate(-180deg)',
  },
  collapsed: {
    transform: 'rotate(0)',
  },
}));

const ExpandMoreIconNoMemo = ({
  onClick,
  collapsed,
}: {
  onClick?: (e: React.MouseEvent<SVGElement>) => void;
  collapsed: boolean;
}) => {
  const classes = useStyles();
  return (
    <ExpandMore
      onClick={onClick}
      className={[
        classes.icon,
        collapsed ? classes.collapsed : classes.expanded,
      ].join(' ')}
    />
  );
};

const ExpandMoreIcon = React.memo(ExpandMoreIconNoMemo);

export {
  StyledMenuItem,
  DrawerWrapper,
  DrawerMenuContent,
  HeaderNavWrapper,
  LogoWrapper,
  LogoCopy,
  Content,
  LayoutWrapper,
  ExpandMoreIcon,
};
