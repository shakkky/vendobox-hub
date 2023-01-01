import styled from 'styled-components';

const Wrapper = styled.div`
  float: ${props => (props.right ? 'right' : 'left')};
  position: relative;
`;

export { Wrapper };
