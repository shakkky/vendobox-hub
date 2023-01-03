import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  font-size: 14px;
`;

const CompanyDetailsCell = ({ lead }) => {
  const { company_name, est_traffic } = lead;
  return (
    <Wrapper>
      <div>{company_name}</div>
      <div>{est_traffic}</div>
    </Wrapper>
  );
};

export default CompanyDetailsCell;
