import React from 'react';
import styled from 'styled-components';
import { round } from 'lodash';

const Wrapper = styled.div`
  font-size: 14px;
`;

const RevenueCell = ({ machine }) => {
  const { revenue, revenue_since_restock } = machine ?? {};
  return (
    <Wrapper>
      <p>${round(revenue, 2) / 100}/week</p>

      <p>${round(revenue_since_restock, 2) / 100}/re-stock</p>
    </Wrapper>
  );
};

export default RevenueCell;
