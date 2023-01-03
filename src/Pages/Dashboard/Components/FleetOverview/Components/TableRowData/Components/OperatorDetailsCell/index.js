import React from 'react';
import Avatar from 'Components/Avatar';
import styled from 'styled-components';

const Wrapper = styled.div`
  font-size: 14px;
`;

const OperatorDetailsCell = ({ machine }) => {
  const { operator } = machine ?? {};
  const { first_name, last_name, photo } = operator;
  return (
    <Wrapper>
      <Avatar
        firstName={first_name}
        lastName={last_name}
        photo={photo}
        size={32}
      />
    </Wrapper>
  );
};

export default OperatorDetailsCell;
