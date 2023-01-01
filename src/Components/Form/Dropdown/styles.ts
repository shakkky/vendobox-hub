import styled from 'styled-components';

export const Container = styled.div<{ error?: boolean; errorMessage?: string }>`
  width: 100%;
  font-family: Avenir-Roman, sans-serif;
  height: inherit;

  & > div::after {
    border: 0;
    content: '${props => (props.error ? props.errorMessage : '')}';
    position: absolute;
    bottom: -28px;
    left: 0;
    color: ${props => props.theme.colors.thunderbird};
    font-size: 15px;
  }
  border: 1px solid
    ${props => (props.error ? props.theme.colors.thunderbird : 'transparent')} !important;
`;
