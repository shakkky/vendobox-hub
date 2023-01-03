import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  font-size: 14px;
`;

const RequestorDetailsCell = ({ lead }) => {
  const { name, phone, email, notes } = lead;
  return (
    <Wrapper>
      <div>
        <div>{name}</div>

        <div>
          {phone} / {email}
        </div>

        <div>{notes}</div>
      </div>
    </Wrapper>
  );
};

export default RequestorDetailsCell;
