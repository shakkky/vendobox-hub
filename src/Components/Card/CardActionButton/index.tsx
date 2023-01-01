import React from 'react';
import styled from 'styled-components';
import styledComponentTheme from 'styles/styled-component-theme';

type CardActionButtonProps = {
  children: React.ReactNode;
  onHoverColor: keyof typeof styledComponentTheme['colors'];
  onClick: () => void;
};

const CardActionButton = ({
  children,
  onHoverColor,
  onClick,
}: CardActionButtonProps): JSX.Element => (
  <Wrapper aria-hidden="true" onhovercolor={onHoverColor} onClick={onClick}>
    {children}
  </Wrapper>
);

const Wrapper = styled.div<{
  onhovercolor: keyof typeof styledComponentTheme['colors'];
  onClick: () => void;
}>`
  height: 100%;
  padding-top: 8px;
  transition: 0.4s;
  &:hover {
    background-color: ${props => props.theme.colors[props.onhovercolor]};
    color: ${props => props.theme.colors.white};
  }
  flex-grow: 1;
`;

export default CardActionButton;
