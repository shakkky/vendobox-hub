import styled, { css } from 'styled-components';

export const RequiredMark = styled.span`
  color: ${props => props.theme.colors.persian};
`;

export const Wrapper = styled.div<{ width?: number; isCheckbox?: boolean }>`
  margin-top: ${p => (p.isCheckbox ? '13px' : '0px')};
  ${p =>
    p.width &&
    css`
      width: ${p.width};
    `}
`;

export const Label = styled.div<{ disabled?: boolean }>`
  margin-top: 14px;
  height: 22px;

  color: ${props => (props.disabled ? 'gray' : props.theme.colors.darkPurple)};
  font-size: 15px;
  margin-bottom: 0;
`;
