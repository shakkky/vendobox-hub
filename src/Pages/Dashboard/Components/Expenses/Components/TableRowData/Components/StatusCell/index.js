import React from 'react';
import Avatar from 'Components/Avatar';
import styled from 'styled-components';

const Wrapper = styled.div`
  font-size: 14px;
`;

const StatusCell = ({ expense }) => {
  const { status } = expense ?? {};
  const { code, label } = status;
  return <Wrapper>{label}</Wrapper>;
};

export default StatusCell;
