import React, { Fragment } from 'react';
import styled from 'styled-components';

import Icon from '../Icon';
import { formatPhone } from '../../Utils';

const ContactIcon = styled(Icon)`
  font-size: 15px !important;
  margin-right: 3px;
`;

const ContactItemWrapper = styled.span`
  display: inline;
  word-break: break-all;
`;

const getLink = (
  type: Maybe<'email' | 'phone'>,
  value: string,
  noLink: boolean
) => {
  if (noLink) {
    return type === 'email' ? (
      <Fragment>{formatPhone(value)}</Fragment>
    ) : (
      <Fragment>{value}</Fragment>
    );
  }

  if (type === 'email') {
    return <a href={`mailto:${value}`}>{value}</a>;
  }

  if (type === 'phone') {
    return <a href={`tel:${value}`}>{formatPhone(value)}</a>;
  }

  return <Fragment>{value}</Fragment>;
};

const ContactItem = ({
  type,
  value,
  loading = false,
  noIcon = false,
  noLink = false,
}: {
  value: Maybe<string>;
  type?: 'email' | 'phone';
  loading?: boolean;
  noIcon?: boolean;
  noLink?: boolean;
}): JSX.Element => {
  return (
    <ContactItemWrapper>
      {!noIcon && <ContactIcon type={type} />}
      {!loading && value && getLink(type, value, noLink)}
    </ContactItemWrapper>
  );
};

ContactItem.defaultProps = {
  noIcon: false,
  noLink: false,
};

export default ContactItem;
