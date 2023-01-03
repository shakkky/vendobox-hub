import React from 'react';
import styled from 'styled-components';
import { round } from 'lodash';

const Wrapper = styled.div`
  font-size: 14px;
`;

const CostCell = ({ expense }) => {
  const { cost_in_cents } = expense ?? {};
  return (
    <Wrapper>
      <p>${round(cost_in_cents, 2) / 100}</p>
    </Wrapper>
  );
};

export default CostCell;
