import React from 'react';
import { Row } from 'reactstrap';
import styled from 'styled-components';

const Wrapper = styled.div`
  font-size: 14px;

  display: flex;
  flex-direction: column;
`;

const HealthIndicator = styled.div`
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background-color: ${p => p.color};

  margin-right: 4px;
`;

const Rows = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;
`;

const DetailsCell = ({ machine }) => {
  const { location, address, status } = machine;
  return (
    <Wrapper>
      <div>{location}</div>
      <div>{address}</div>
      <Rows>
        <HealthIndicator color={status?.code === 10 ? '#1DA865' : 'red'} />
        {status?.label}
      </Rows>
    </Wrapper>
  );
};

export default DetailsCell;
