import React from 'react';
import styled, { css } from 'styled-components';

type ModalActionsProps = {
  children: React.ReactNode;
  minWidth?: number;
  top?: boolean;
  padAmount?: number;
  justify?: string;
  flexEnd?: boolean;
};

const ModalActions = ({
  children,
  top = false,
  flexEnd,
  padAmount,
  justify,
  minWidth,
}: ModalActionsProps): JSX.Element => (
  <Wrapper
    className="text-center"
    top={top}
    minWidth={minWidth}
    flexEnd={flexEnd}
    padAmount={padAmount}
    justify={justify}
  >
    {children}
  </Wrapper>
);

const Wrapper = styled.div<ModalActionsProps>`
  min-width: ${({ minWidth = 56 }) => minWidth}%;
  margin: ${({ top, padAmount = 50 }) =>
    top ? `0 auto ${padAmount}px auto` : `${padAmount}px auto`};
  display: flex;
  justify-content: ${({ justify = 'space-between' }) => justify};

  button {
    min-width: 142px;
    height: 40px;
  }

  ${({ flexEnd }) =>
    flexEnd &&
    css`
      justify-content: flex-end !important;
      margin: 20px 50px;
    `};
`;

export default ModalActions;
