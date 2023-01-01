import React from 'react';
import PropTypes from 'prop-types';
import { BadgeWrapper } from './styles';

// @see https://github.com/styled-components/styled-components/issues/439
const Badge = ({
  children,
  outline,
  ...rest
}: {
  children: React.ReactNode | string;
  title?: string;
  outline?: boolean;
}): JSX.Element => (
  <BadgeWrapper outline={outline ? 'outline' : 'none'} {...rest}>
    {children}
  </BadgeWrapper>
);

Badge.propTypes = {
  outline: PropTypes.bool,
  color: PropTypes.oneOf([
    'primary',
    'secondary',
    'success',
    'warning',
    'danger',
    'info',
    'dark',
    'light',
  ]),
};

Badge.defaultProps = {
  outline: false,
  color: 'primary',
};

export default Badge;
