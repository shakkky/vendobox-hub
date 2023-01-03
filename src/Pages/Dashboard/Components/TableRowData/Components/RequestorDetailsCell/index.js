import React from 'react';
import { Row } from 'reactstrap';
import { Wrapper } from './styles';

const RequestorDetailsCell = ({ downloadRequest }) => {
  const { name, email, comments } = downloadRequest;
  return (
    <Wrapper>
      <div>
        <Row>{name}</Row>

        <Row>{email}</Row>

        <Row>{comments}</Row>
      </div>
    </Wrapper>
  );
};

export default RequestorDetailsCell;
