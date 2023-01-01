import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  justify-content: flex-start;
  width: 100%;
  @media (max-width: ${props => props.theme.sizes.phone}px) {
    flex-direction: column;
    width: 100%;
    &:first-child {
      margin-top: 2rem;
    }
  }
  @media (max-width: ${props => props.theme.sizes.tablet}px) {
    flex-wrap: wrap;
  }
`;
