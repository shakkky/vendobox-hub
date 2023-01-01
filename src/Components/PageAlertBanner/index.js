import React from 'react';
import PropTypes from 'prop-types';

import {
  BannerWrapper,
  ContentWrapper,
  CloseButtonWrapper,
  CloseButton,
} from './styles';

const PageAlertBanner = ({ message, type, handleClose }) => {
  if (!message) return null;

  return (
    <BannerWrapper hasContent={!!message} type={type}>
      <CloseButtonWrapper>
        <CloseButton onClick={handleClose} type={type} />
      </CloseButtonWrapper>
      <ContentWrapper>{message}</ContentWrapper>
    </BannerWrapper>
  );
};

PageAlertBanner.propTypes = {
  handleClose: PropTypes.func.isRequired,
  content: PropTypes.any,
  type: PropTypes.string,
};

PageAlertBanner.defaultProps = {
  content: null,
  type: 'info',
};

export default PageAlertBanner;
