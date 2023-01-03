import styled from 'styled-components';
import { Color } from 'styles/colors';

const Container = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin: 0 10px;
`;

const Copied = styled.span`
  font-size: 10px;
  background-color: ${props =>
    Color(props.theme.colors.lightGrey).fade(0.8).string()};
  padding: 5px 15px;
  border-radius: 5px;
`;

export { Container, Copied };
