import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { TableRow, TableCell } from 'Components/Table';
import styled from 'styled-components';
import { queryLeads_leads_leads } from 'schema/queryLeads';

import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

/**
 * THIS WHOLE FILE IS WIP
 */

const options = ['Mark as ignored', 'Mark as pending'];

const Wrapper = styled.div`
  font-size: 1rem;
  font-weight: lighter;
  color: ${p => p.theme.colors.offBlack};
`;

const Rows = styled.div`
  display: flex;
  flex-direction: rows;
  justify-content: flex-end;
`;

const StyledIconButton = styled(IconButton)`
  border-radius: 4px !important;
`;

/**
 * TODO: when a row is clicked, open a pop-over the displays more details
 * or maybe even a collapsable row
 */

const TableRowBody = ({ lead }: { lead: queryLeads_leads_leads }) => {
  const { name, company_name, notes } = lead;

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <TableRow>
      <TableCell>
        <Wrapper>
          <div>{name}</div>
        </Wrapper>
      </TableCell>
      <TableCell>
        <Wrapper>
          <div>{company_name}</div>
        </Wrapper>
      </TableCell>
      <TableCell>
        <Wrapper>
          <div>{!!notes ? notes : '-'}</div>
        </Wrapper>
      </TableCell>
      <TableCell>
        <Wrapper>
          <Rows>
            <div>
              <StyledIconButton
                aria-label="more"
                id="long-button"
                aria-controls={open ? 'long-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                onClick={e => handleClick(e)}
              >
                <MoreHorizIcon />
              </StyledIconButton>
              <Menu
                id="long-menu"
                MenuListProps={{
                  'aria-labelledby': 'long-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
              >
                {options.map(option => (
                  <MenuItem key={option} onClick={handleClose}>
                    {option}
                  </MenuItem>
                ))}
              </Menu>
            </div>
          </Rows>
        </Wrapper>
      </TableCell>
    </TableRow>
  );
};

TableRowBody.propTypes = {
  lead: PropTypes.object.isRequired,
};

export default TableRowBody;
