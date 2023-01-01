import styled, { css } from 'styled-components';
import { ModalHeader as Header, Modal } from 'reactstrap';

const ModalHeader = styled(Header)`
  color: #090034;
  border-bottom: 0 !important;
  padding-bottom: 0;
  padding-left: 40px;
  padding-right: 40px;

  h5 {
    font-weight: 600;
    margin: 24px auto 0 auto;
    font-size: 28px;
    font-family: ${p => p.theme.fonts.regular};
  }
`;

const Wrap = styled(Modal)`
  top: ${({ topPercent = 15 }) => topPercent}%;
  max-width: ${({ maxWidth = 560 }) =>
    css`
      ${maxWidth}px
    `};
  ${({ maxWidth }) =>
    maxWidth &&
    `max-width: ${maxWidth.toString().replace(/px$/, '')}px !important;`}
  ${({ noPaddingTop }) => noPaddingTop && `top:0 !important`};

  .modal-backdrop.show {
    opacity: 0.75;
  }
`;

export { ModalHeader, Wrap };
