import React, { useState } from 'react';
import styled from 'styled-components';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const Wrapper = styled.span`
  white-space: nowrap;
  width: auto;
`;

const TemporaryDrawer = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (open: boolean) => {
    setOpen(open);
  };

  return (
    <>
      <Wrapper role="button" tabIndex={-1} onClick={() => toggleDrawer(true)}>
        <MoreHorizIcon />
      </Wrapper>
      <Drawer anchor="right" open={open} onClose={() => toggleDrawer(false)}>
        <Box
          role="presentation"
          onClick={() => toggleDrawer(false)}
          onKeyDown={() => toggleDrawer(false)}
        >
          {children}
        </Box>
      </Drawer>
    </>
  );
};

export default TemporaryDrawer;
