import styled from 'styled-components';

import { Color } from 'styles/colors';

const HeaderNavWrapper = styled.div`
  display: flex;
  position: absolute;
  right: 30px;
  top: 12px;

  button {
    background-color: ${props => props.theme.colors.white};
    color: ${props => props.theme.colors.persian};
    border-color: ${props => props.theme.colors.persian};
    margin-right: 10px;

    &:hover {
      color: ${props => props.theme.colors.persian};
      background-color: ${props =>
        Color(props.theme.colors.white).fade(0.1).string()};
    }
  }

  button.btn-outline {
    background-color: ${props => props.theme.colors.persian};
    color: ${props => props.theme.colors.white};
    border-color: ${props => props.theme.colors.white};

    &:hover {
      color: ${props => props.theme.colors.white};
      background-color: ${props =>
        Color(props.theme.colors.black).fade(0.9).string()};
    }
  }
`;

export { HeaderNavWrapper };
