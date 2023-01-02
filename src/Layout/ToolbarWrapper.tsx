import React from 'react';
import { IconButton } from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  navIconHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  mobileMenu: {
    fill: '#2E2E2E',
  },
}));

function ToolbarWrapper({
  handleDrawerToggle,
}: {
  handleDrawerToggle: () => void;
}) {
  const classes = useStyles();
  return (
    <>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={handleDrawerToggle}
        className={classes.navIconHide}
      >
        <Menu className={classes.mobileMenu} />
      </IconButton>
    </>
  );
}

export default React.memo(ToolbarWrapper);
