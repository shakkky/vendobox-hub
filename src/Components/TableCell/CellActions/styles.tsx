import styled, { css } from 'styled-components';
import Icon from 'Components/Icon';
import { withStyles } from '@material-ui/core/styles';

const ActionIconStyles = {
  root: {
    fontSize: '18px',
  },
};

const ActionIcon = withStyles(ActionIconStyles)(Icon);

const Wrapper = styled.div<{ justify?: string }>`
  display: flex;
  align-items: center;

  ${({ justify }) =>
    justify &&
    css`
      justify-content: ${justify};
    `}
`;

const ActionWrapper = styled.div<{ marginRight?: number; noSpacing?: boolean }>`
  margin-right: ${({ marginRight = 20 }) => marginRight}px !important;

  ${({ noSpacing }) =>
    noSpacing &&
    css`
      margin: 0 !important;
    `};
  &:last-child {
    margin-right: 0;
  }
`;

const ActionClickWrapper = styled(ActionWrapper)<{ disabled?: boolean }>`
  font-size: 0;
  cursor: pointer;
  svg {
    cursor: pointer;
    ${({ disabled }) =>
      disabled &&
      css`
        color: gray;
        cursor: default;
      `};
  }
`;

const ActionLabelWrapper = styled(ActionWrapper)`
  color: inherit;
  cursor: default;
`;

export default Wrapper;
export { ActionClickWrapper, ActionLabelWrapper, ActionIcon };
