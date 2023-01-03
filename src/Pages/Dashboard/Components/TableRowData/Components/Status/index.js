import React from 'react';

import StatusBadge from 'Components/StatusBadge';
import { Wrapper } from './styles';

const Status = ({ downloadRequest }) => {
  const {
    is_download_approved,
    has_accepted_terms_and_conditions,
  } = downloadRequest;
  return (
    <Wrapper>
      <StatusBadge
        label={
          has_accepted_terms_and_conditions
            ? 'ACCEPTED TERMS'
            : 'NOT ACCEPTED TERMS'
        }
      />
      {is_download_approved && <StatusBadge label="APPROVED" />}
    </Wrapper>
  );
};

export default Status;
