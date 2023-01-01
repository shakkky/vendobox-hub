import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: ${props => props.theme.colors.persian};
  color: ${props => props.theme.colors.white};
  padding: 30px;
  animation: fadeinout 4s linear forwards;

  @keyframes fadeinout {
    0%,
    100% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
  }
`;

export { Wrapper };
