import styled from 'styled-components';
import { CloseRounded } from '@material-ui/icons';

const BannerWrapper = styled.div`
  background-color: ${p => {
    switch (p.type) {
      case 'error':
        return '#FFB2B2';
      case 'success':
        return '#CCEFEA';
      default:
        return '#D5DCF5';
    }
  }};

  display: flex;
  flex-direction: row;
  padding: 15px 5px;
  box-sizing: border-box;
  overflow: hidden;
  transition: transform 0.3s ease-out;
  height: auto;
  transform: scaleY(1);
  transform-origin: top;
  &:nth-child(n + 2) {
    border-top: 1px solid rgba(255, 0, 0, 28%) !important;
  }

  ${p => {
    if (!p.hasContent) return `transform:scaleY(0); }`;
  }};
`;

const CloseButtonWrapper = styled.div`
  width: 86px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 40px;
`;

const CloseButton = styled(CloseRounded)`
  background-color: ${p => {
    switch (p.type) {
      case 'error':
        return '#FF0000';
      case 'success':
        return '#00AE95';
      default:
        return '#090034';
    }
  }};
  color: ${p => p.theme.colors.white};
  font-size: 20px;
  border-radius: 1em;
  cursor: pointer;
`;

const ContentWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export { BannerWrapper, ContentWrapper, CloseButton, CloseButtonWrapper };
