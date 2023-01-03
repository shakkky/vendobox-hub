import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  font-size: 14px;
`;

const StatusCell = ({ expense }) => {
  const { status } = expense ?? {};
  const { label } = status;
  return <Wrapper>{label}</Wrapper>;
};

export default StatusCell;
