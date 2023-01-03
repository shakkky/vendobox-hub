import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  font-size: 14px;

  display: flex;
  flex-direction: column;
`;

const DetailsCell = ({ expense }) => {
  const { title, paid_to } = expense;
  return (
    <Wrapper>
      <div>{title}</div>
    </Wrapper>
  );
};

export default DetailsCell;
