import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const TemporaryDrawer = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (open: boolean) => {
    setOpen(open);
  };

  return (
    <>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={() => toggleDrawer(true)}
      >
        <NavigateNextIcon />
      </IconButton>
      <Drawer anchor="right" open={open} onClose={() => toggleDrawer(false)}>
        <Box role="presentation" onKeyDown={() => toggleDrawer(false)}>
          {children}
        </Box>
      </Drawer>
    </>
  );
};

export default TemporaryDrawer;
