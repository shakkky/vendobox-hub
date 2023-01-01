import React from 'react';
import styled from 'styled-components';

type CardActionsProps = {
  children: React.ReactNode;
};

const CardActions = ({ children }: CardActionsProps): JSX.Element => (
  <Wrapper>{children}</Wrapper>
);

const Wrapper = styled.div`
  height: 40px;
  margin-top: auto;

  border-top: 1px solid ${props => props.theme.colors.lightGrey};

  font-weight: bold;
  color: ${props => props.theme.colors.darkGrey};

  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

export default CardActions;
