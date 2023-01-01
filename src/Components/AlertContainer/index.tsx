import React from 'react';
import styled from 'styled-components';

const AlertContainer = styled.div`
  padding: 15px;
  color: rgba(0, 0, 0, 65%);
  border-radius: 4px;
  background-color: #e6f7ff;
  border: 1px solid #91d5ff;
  font-size: 14px;
`;

export default function Alert({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return <AlertContainer>{children}</AlertContainer>;
}
