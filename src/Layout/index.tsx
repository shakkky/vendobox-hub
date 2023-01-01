import React, { useState, useCallback, useEffect, useRef } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import Helmet from 'react-helmet';

import {
  Hidden as HiddenMui,
  Drawer,
  CssBaseline,
  HiddenProps,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Alerts from 'Container/Alerts';
import MenuItems from './MenuItems';
import { LayoutWrapper, Content } from './style';
import ToolbarWrapper from './ToolbarWrapper';
import { login_authUser } from 'schema/login';

const Hidden = HiddenMui as React.ComponentType<
  HiddenProps & { className?: string }
>;

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  toolbarClass: theme.mixins.toolbar,
  divider: {
    padding: '12px',
  },
  menuWrapper: {
    backgroundColor: theme.colors.white,
    position: 'absolute',
    height: '100%',
  },
  drawerPaper: {
    width: drawerWidth,
    position: 'fixed !important' as 'fixed',
    height: '100%',
    backgroundColor: theme.colors.white,
    [theme.breakpoints.up('md')]: {
      position: 'relative',
      borderRight: 'none',
    },
    '@media (max-width: 1440px)': {
      width: 200,
    },
    '@media (max-width: 768px)': {
      width: 350,
    },
  },
}));

function Layout({ children }: { children: React.ReactNode }) {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = useState(false);
  const userRef = useRef<Maybe<login_authUser>>(
    JSON.parse(localStorage.getItem('user') ?? 'null')
  );
  const { pathname, search } = useLocation();
  const full_pathname = pathname + search;
  const { push } = useHistory();

  useEffect(() => {
    const func = () => {
      userRef.current = JSON.parse(localStorage.getItem('user') ?? 'null');
    };
    document.addEventListener('storage', func);
    return () => document.removeEventListener('storage', func);
  }, []);

  const user = userRef.current;

  const handleDrawerToggle = useCallback(
    () => setMobileOpen(open => !open),
    []
  );
  const handleLogout = useCallback(() => {
    localStorage.removeItem('user');
    push('/login');
  }, [push]);

  return (
    <>
      <Helmet
        titleTemplate="%s - Portal"
        defaultTitle="Portal - Shakeel Engineering"
      >
        <meta charSet="utf-8" />
      </Helmet>
      <CssBaseline />
      <LayoutWrapper>
        <ToolbarWrapper
          userFirstName={user?.first_name}
          userLastName={user?.last_name}
          userPhoto={user?.photo}
          handleDrawerToggle={handleDrawerToggle}
        />
        <Hidden mdUp>
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            <MenuItems
              userSession={user}
              toolbarClass={classes.toolbarClass}
              pathname={full_pathname}
              handleItemClick={handleDrawerToggle}
              handleLogout={handleLogout}
            />
          </Drawer>
        </Hidden>
        <Hidden smDown implementation="css" className={classes.menuWrapper}>
          <Drawer
            variant="permanent"
            open
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <MenuItems
              userSession={user}
              toolbarClass={classes.toolbarClass}
              pathname={full_pathname}
              handleLogout={handleLogout}
            />
          </Drawer>
        </Hidden>
        <Content className="content-wrapper">
          <Alerts />
          {children}
        </Content>
      </LayoutWrapper>
    </>
  );
}

const withLayout = (component: React.ReactNode) => <Layout>{component}</Layout>;

export default Layout;
export { withLayout };
