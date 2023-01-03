import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  font-size: 14px;
`;

const MachineTypeCell = ({ lead }) => {
  const { machine_type } = lead;
  return (
    <Wrapper>
      <div>{machine_type}</div>
    </Wrapper>
  );
};

export default MachineTypeCell;
