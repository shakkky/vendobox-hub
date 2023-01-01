import styled from 'styled-components';

export const Bold = styled.span`
  font-weight: bold;
`;

export const NoWrap = styled.div`
  white-space: nowrap;
`;

export const NoWrapFlexGrow = styled.div<{ flexGrow?: boolean }>`
  white-space: nowrap;
  ${p => {
    if (p.flexGrow) return 'flex-grow:1;';
  }};
`;
