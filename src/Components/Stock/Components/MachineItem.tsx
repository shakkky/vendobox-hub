import React from 'react';
import styled from 'styled-components';
import { round } from 'lodash';

import UnstyledEditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';

const Wrapper = styled.div<{ highlight?: boolean; isReadOnly?: boolean }>`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  text-align: center;
  overflow: hidden;
  padding: 12px;
  align-items: center;
  justify-content: space-between;

  border: 0.5px solid lightgrey;

  ${p => p.highlight && `border: 3px dashed ${p.theme.colors.jade};`}
  ${p => !p.isReadOnly && `cursor: pointer;`}
`;

const Header = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const CoilLabel = styled.div`
  border-radius: 25px;
  background-color: black;
  color: white;
  padding: 2px 12px;

  font-size: 0.6rem;
  font-weight: 600;

  margin: auto 0;
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

const EditIcon = styled(UnstyledEditIcon)`
  height: 16px !important;
  width: 16px !important;
`;

const MachineItem = ({
  highlight,
  image_size = 100,
  coil,
  isReadOnly = false,
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
  isReadOnly?: boolean;
}) => {
  const { coil_no, product } = coil;
  return (
    <Wrapper highlight={highlight} isReadOnly={isReadOnly}>
      {product ? (
        <>
          {coil_no && (
            <Header>
              <CoilLabel>{coil_no}</CoilLabel>
              <IconButton
                aria-label="more"
                id="long-button"
                aria-haspopup="true"
                onClick={() => null}
              >
                <EditIcon />
              </IconButton>
            </Header>
          )}
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
