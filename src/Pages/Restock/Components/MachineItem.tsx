import React from 'react';
import styled from 'styled-components';
import { round } from 'lodash';

const Wrapper = styled.div<{ highlight?: boolean }>`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  text-align: center;
  overflow: auto;
  cursor: pointer;
  padding: 12px;
  align-items: center;
  justify-content: space-between;

  border: 0.5px solid lightgrey;

  ${p => p.highlight && `border: 3px dashed ${p.theme.colors.jade};`}
`;

const CoilLabel = styled.div`
  border-radius: 25px;
  background-color: black;
  color: white;
  padding: 2px 12px;

  font-size: 0.6rem;
  font-weight: 600;
`;

const MarginTop = styled.div`
  margin-top: 6px;
`;

const Small = styled.p`
  font-size: 0.6rem;
  margin-bottom: 0.2rem;
`;

const VerySmall = styled.p`
  font-size: 0.5rem;
  margin-bottom: unset;
`;

const MachineItem = ({
  highlight,
  image_size = 100,
  coil,
}: {
  highlight?: boolean;
  image_size?: number;
  coil: {
    coil_no?: number;
    product?: Maybe<{
      image_url?: string;
      title?: string;
      label: string;
      default_price?: number;
    }>;
  };
}) => {
  const { coil_no, product } = coil;
  return (
    <Wrapper highlight={highlight}>
      {product ? (
        <>
          {coil_no && <CoilLabel>{coil_no}</CoilLabel>}
          <img
            src={product.image_url}
            alt={product.label}
            height={image_size}
            width={image_size}
          />
          <MarginTop>
            <Small>{product.title}</Small>
          </MarginTop>
          <VerySmall>
            <b>{product.label}</b>
          </VerySmall>
          ${round(product.default_price ?? 0, 2) / 100}0
        </>
      ) : (
        <>
          <CoilLabel>{coil.coil_no}</CoilLabel>
          <MarginTop>
            <Small style={{ color: 'red' }}>
              <b>EMPTY</b>
            </Small>
          </MarginTop>
        </>
      )}
    </Wrapper>
  );
};

export default MachineItem;
