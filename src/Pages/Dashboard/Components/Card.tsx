import { useEffect, useState } from 'react';
import styled from 'styled-components';
import useHover from 'hooks/useHover';

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const Wrapper = styled.div<{ backgroundColor: string }>`
  padding: 20px;
  border-radius: 8px;

  background: ${p => p.backgroundColor};
`;

const MediumText = styled.h6`
  color: ${p => p.theme.colors.regentGrey};

  color: white;
`;

const LargeText = styled.span`
  color: ${p => p.theme.colors.offBlack};
  font-size: 1.8rem;
`;

const Card = ({
  header,
  unit,
  value,
  backgroundColor = '#F6F0F9',
  masked: maskedByDefault = false,
}: {
  header?: string;
  unit?: string;
  value?: number;
  backgroundColor?: string;
  masked?: boolean;
}) => {
  const { ref: hoverRef, value: isHovered } = useHover();

  const [currentlyMasked, setCurrentlyMasked] = useState(maskedByDefault);

  useEffect(() => {
    setCurrentlyMasked(maskedByDefault && !isHovered);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isHovered]);

  return (
    <Wrapper
      backgroundColor={backgroundColor}
      ref={hoverRef}
      onClick={() => setCurrentlyMasked(maskedByDefault && !currentlyMasked)}
      role="button"
      tabIndex={-33}
    >
      <MediumText>{header}</MediumText>
      <Row>
        <LargeText>{unit}</LargeText>
        {currentlyMasked ? (
          <LargeText>--</LargeText>
        ) : (
          <LargeText>{value}</LargeText>
        )}
      </Row>
    </Wrapper>
  );
};

export default Card;
