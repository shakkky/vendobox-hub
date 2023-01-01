import React from 'react';
import { Button } from 'Components';
import { Wrapper, Title, Subtitle, CreateDate, ButtonWrapper } from './styles';

const ResumeCard = ({ resume, selected, setSelectedResume }) => {
  const { id, title, version, created_at, url } = resume;
  return (
    <Wrapper selected={selected} onClick={() => setSelectedResume(resume)}>
      <Title>{`${id}. ${title}`}</Title>
      <Subtitle>{`v${version}`}</Subtitle>
      <CreateDate>{created_at}</CreateDate>
      <ButtonWrapper>
        {' '}
        <Button label="Open" onClick={() => window.open(url)} />
      </ButtonWrapper>
    </Wrapper>
  );
};

export default ResumeCard;
