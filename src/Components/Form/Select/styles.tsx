import styled, { css } from 'styled-components';
import Select from '@material-ui/core/Select';
// import { withStyles } from '@material-ui/core/styles';
import colors from '../../../styles/colors';

const Component = styled.div<{
  disabled?: boolean;
  error?: string;
  grow?: boolean;
}>`
  cursor: ${props => (props.disabled ? 'not-allowed' : 'auto')};
  &::after {
    content: '${props => props.error ?? ''}';
    position: absolute;
    top: 90px;
    left: 20px;
    color: ${props => props.theme.colors.thunderbird};
    font-size: 15px;
  }
  & > div::before {
    border: 0;
    content: '';
    width: 0;
    position: relative;
  }

  color: ${props => props.theme.colors.darkGrey};
  border: 1px solid
    ${props => (props.error ? props.theme.colors.thunderbird : 'transparent')} !important;
  ${({ grow = false }) =>
    grow &&
    css`
      flex-grow: 1;
    `}
`;

const Wrapper = styled(Select)<{ disabled?: boolean }>`
  background: ${props =>
    props.disabled
      ? props.theme.colors.lightGrey
      : props.theme.colors.alabaster};
  cursor: ${props => (props.disabled ? 'not-allowed' : 'auto')};
  min-width: 171px;
  border-radius: 3px;
  display: block !important;
  padding: 9px 5px;

  > div > div {
    padding-left: 14px;
    text-align: left;

    &:focus {
      background: inherit !important;
    }
  }

  &::before {
    border: 0;
    position: relative;
  }
`;

// const ItemStyles: Parameters<typeof withStyles>[0] = {
//   root: {
//     fontSize: '14px',
//     height: '40px',
//     paddingTop: 0,
//     paddingBottom: 0,
//     fontWeight: 500,
//     color: colors.darkerBlue,
//     backgroundColor: colors.alabaster,
//     '&:hover': {
//       fontWeight: '500',
//       color: colors.darkerBlue,
//       backgroundColor: colors.white,
//     },
//     '&$selected': {
//       fontWeight: '500',
//       color: colors.darkerBlue,
//       backgroundColor: colors.white,
//       cursor: 'default',
//     },
//     '&:disabled': {
//       cursor: 'not-allowed',
//     },
//   },
//   selected: {
//     fontWeight: 500,
//     color: colors.darkerBlue,
//     backgroundColor: colors.white,
//     cursor: 'default',
//   },
// };
// const Item = styled(withStyles(ItemStyles)(MenuItem))``;
const Item = styled.div``;

const PropStyle = {
  border: `1px solid ${colors.iron}`,
  marginTop: '2px',
};

export { Component, Wrapper, Item, PropStyle };
