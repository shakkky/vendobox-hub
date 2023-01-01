import styled from 'styled-components';

export const Wrapper = styled.div<{ displayFlex?: boolean }>`
  display: ${props => (props.displayFlex ? 'flex' : 'block')};
  position: absolute;
  top: 15px;
  right: 30px;

  @media (max-width: 768px) {
    position: relative;
    width: 100%;
    display: block;
    left: 0;
    right: 0;
    top: 0;
    margin-bottom: 20px;
  }
  .btn {
    margin-left: 5px;
    display: inline-block;
  }
`;
