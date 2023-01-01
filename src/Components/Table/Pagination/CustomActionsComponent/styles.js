import styled from 'styled-components';
import { Button as MuiButton } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Button } from 'reactstrap';

import colors from '../../../../styles/colors';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const PageButton = styled(Button)`
  color: ${props => props.theme.colors.regentGrey};
  text-decoration: none;
  font-family: ${p => p.theme.fonts.heavy};
  font-size: 14px;

  &.disabled {
    opacity: 1;
    font-weight: 900;
    color: ${props => props.theme.colors.darkBlue};
    text-decoration: none;
  }

  &:hover,
  &:focus {
    text-decoration: none;
  }
`;

const MaxPage = styled.div`
  color: ${props => props.theme.colors.regentGrey};
  font-size: 14px;
`;

const MaxPageButton = styled(PageButton)`
  padding: 0;
`;

const muiStyles = {
  root: {
    backgroundColor: colors.alabaster,
    borderRadius: '3px',
    width: '32px',
    minWidth: '32px',
    height: '32px',
    minHeight: '32px',
    padding: 0,
    marginRight: '10px',
    outline: 'none',
    color: colors.darkBlue,
    borderColor: colors.iron,
    '&:focus': {
      outline: 'none',
    },
    '&$disabled': {
      outline: 'none',
    },
  },
  disabled: {},
};

const ControlButton = withStyles(muiStyles)(MuiButton);

export { Wrapper, PageButton, ControlButton, MaxPage, MaxPageButton };
