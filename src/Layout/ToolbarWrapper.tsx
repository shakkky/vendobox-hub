import React from 'react';
import { useHistory } from 'react-router-dom';
import { AppBar, Toolbar, IconButton } from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

import AppHeader from 'Components/AppHeader';
import Avatar from 'Components/Avatar';

const useStyles = makeStyles(theme => ({
  navIconHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  mobileMenu: {
    fill: '#fff',
  },
}));

function ToolbarWrapper({
  userFirstName,
  userLastName,
  userPhoto,
  handleDrawerToggle,
}: {
  userFirstName: Maybe<string>;
  userLastName: Maybe<string>;
  userPhoto?: Maybe<string>;
  handleDrawerToggle: () => void;
}) {
  const classes = useStyles();
  const { push } = useHistory();
  return (
    <AppBar>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerToggle}
          className={classes.navIconHide}
        >
          <Menu className={classes.mobileMenu} />
        </IconButton>
        <AppHeader>
          {userFirstName && (
            <Avatar
              firstName={userFirstName}
              lastName={userLastName}
              photo={userPhoto}
              push={push}
            />
          )}
        </AppHeader>
      </Toolbar>
    </AppBar>
  );
}

export default React.memo(ToolbarWrapper);
